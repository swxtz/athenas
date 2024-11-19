import { HttpException, Injectable, Logger } from "@nestjs/common";
import { LoginDTO } from "./dtos/sign-in.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { ArgonService } from "src/argon/argon.service";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { VerifyEmailResponse } from "./response/verify-email.response";
import { ResetPasswordDTO } from "./dtos/reset-password.dto";
import { GetEmailForResetPasswordDTO } from "./dtos/get-email-for-reset-password.dto";
import { EmailsService } from "src/emails/emails.service";
import { validate } from "class-validator";

export interface signinReturn {
    data: {
        token: string;
    };
}

interface VerifyEmailJWTPayload {
    id: string;
    email: string;
    iat: number;
    exp: number;
}

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private argon: ArgonService,
        private jwtService: JwtService,
        private configService: ConfigService,
        private emailsService: EmailsService,
    ) {}

    private logger = new Logger(AuthService.name);

    private JWTSecret = this.configService.getOrThrow("JWT_SECRET");

    async signIn(login: LoginDTO) {
        const user = await this.prisma.user.findFirst({
            where: { email: login.email },
            select: {
                password: true,
                emailVerified: true,
            },
        });

        if (!user) {
            throw new HttpException("Email ou senha incorreto", 401);
        }

        if (!user.emailVerified) {
            throw new HttpException("Verifique seu email primeiro", 401);
        }

        const hashIsValid = await this.argon.verify(
            login.password,
            user.password,
        );

        if (!hashIsValid) {
            throw new HttpException("Email ou senha incorreto", 401);
        }

        const dataToPayload = await this.prisma.user.findFirst({
            where: { email: login.email },
            select: {
                id: true,
                name: true,
                email: true,
                createdAt: true,
                updatedAt: true,
            },
        });

        const token = await this.jwtService.signAsync(dataToPayload, {
            secret: this.configService.getOrThrow("JWT_SECRET"),
        });

        return { data: { token } };
    }

    async verifyEmail(token: string): Promise<VerifyEmailResponse> {
        const jwtIsValid = await this.jwtIsValid(token);

        if (!jwtIsValid) {
            throw new HttpException("Token inválido", 401);
        }
        const payload: VerifyEmailJWTPayload =
            await this.jwtService.verifyAsync(token, {
                secret: this.configService.getOrThrow("JWT_SECRET"),
            });
        const user = await this.prisma.user.findFirst({
            where: { email: payload.email },
            select: {
                emailVerified: true,
            },
        });
        if (user.emailVerified) {
            throw new HttpException("Email já verificado", 401);
        }

        const emailVerified = await this.prisma.user.update({
            where: { email: payload.email },
            data: {
                emailVerified: true,
                emailVerificatedAt: new Date(),
            },
            select: {
                emailVerified: true,
                id: true,
                email: true,
            },
        });

        return {
            message: "Email verificado com sucesso!",
            data: emailVerified,
        };
    }

    private async jwtIsValid(token: string): Promise<boolean> {
        try {
            const isValid: VerifyEmailJWTPayload =
                await this.jwtService.verifyAsync(token, {
                    secret: this.configService.getOrThrow("JWT_SECRET"),
                });

            if (!isValid || null) {
                return false;
            }

            return true;
        } catch (err) {
            if (err.message === "invalid signature") {
                throw new HttpException("Token expirado", 401);
            }

            this.logger.error(err.message);
        }
    }

    async getUserEmail(body: GetEmailForResetPasswordDTO) {
        const verifyUser = await this.prisma.user.findFirst({
            where: { email: body.email },
            select: { id: true, emailVerified: true },
        });

        if (!verifyUser) {
            throw new HttpException(
                "Não há uma conta vinculada a esse email",
                400,
            );
        }

        if (verifyUser.emailVerified == false) {
            throw new HttpException("Verifique seu email primeiro", 400);
        }

        const payload = {
            id: verifyUser.id,
            email: body.email,
        };

        const token = await this.jwtService.signAsync(payload, {
            expiresIn: 60 * 10,
            secret: this.configService.getOrThrow("JWT_SECRET"),
        });

        this.emailsService.sendAccountVerificationEmail({
            from: "onboarding@resend.dev",
            to: "alf4r6@gmail.com",
            subject: "redefina sua conta",
        });

        console.log(token);
    }

    async resetPassword(body: ResetPasswordDTO) {
        const jwtIsValid = await this.jwtIsValid(body.token);
    }

    async resendVeificationEmail(emailDTO: GetEmailForResetPasswordDTO) {
        const user = await this.prisma.user.findFirst({
            where: { email: emailDTO.email },
            select: {
                emailVerified: true,
                id: true,
                email: true,
                name: true,
            },
        });

        if (!user) {
            this.logger.warn(
                `the user with the email: ${emailDTO.email}, don't exist`,
            );
            throw new HttpException(
                {
                    message: `o usuário com o email: ${emailDTO.email}, não existe`,
                },
                404,
            );
        }

        if (user.emailVerified) {
            this.logger.warn(
                `the user with the email: ${emailDTO.email}, is already verified`,
            );
            throw new HttpException(
                {
                    message: `o usuário com o email: ${emailDTO.email}, já está verificado`,
                },
                400,
            );
        }

        const webUrl = this.configService.getOrThrow("WEB_URL");

        const payload = {
            id: user.id,
            email: user.email,
        };

        const token = await this.jwtService.signAsync(payload, {
            expiresIn: 60 * 10,
            secret: this.JWTSecret,
        });

        const url = `${webUrl}/auth/verificar-email?token=${token}`;

        this.emailsService.resendAccountVerificationEmail({
            from: "",
            to: user.email,
            name: user.name,
            link: url,
        });
        this.logger.debug(`Confirm email JWT: ${url}`);
    }
}
