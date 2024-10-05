import { HttpException, Injectable, Logger } from "@nestjs/common";
import slugify from "slugify";
import { createId } from "@paralleldrive/cuid2";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

interface VerifyEmailJWTPayload {
    id: string;
    email: string;
    iat: number;
    exp: number;
}

@Injectable()
export class UtilsService {
    constructor(
        private jwtService: JwtService,
        private configService: ConfigService,
    ) {}

    private logger = new Logger();
    removeBearer(token: string) {
        return token.split(" ")[1];
    }

    async jwtIsValid(token: string): Promise<VerifyEmailJWTPayload | null> {
        try {
            const isValid: VerifyEmailJWTPayload =
                await this.jwtService.verifyAsync(token, {
                    secret: this.configService.getOrThrow("JWT_SECRET"),
                });

            if (!isValid || null) {
                return null;
            }

            return isValid;
        } catch (err) {
            if (err.message === "invalid signature") {
                throw new HttpException("Token expirado", 401);
            }
            console.log(err);
            this.logger.error(err.message);
        }
    }

    createProductSlug(productName: string): string {
        let slug = slugify(productName, {
            lower: true,
            strict: true,
        });

        slug = slug + "-" + this.gereateRandomStringCode(12);
        return slug;
    }

    private gereateRandomStringCode(length: number) {
        if (length <= 0) {
            throw new Error(
                "O comprimento da string deve ser um valor positivo.",
            );
        }

        const characters = "abcdefghijklmnopqrstuvwxyz";
        const charactersLength = characters.length;

        let result = "";

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charactersLength);
            result += characters[randomIndex];
        }

        return result;
    }

    createCUID(): string {
        const id = createId();
        return id;
    }
}
