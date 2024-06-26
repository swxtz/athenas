import { Injectable } from "@nestjs/common";

@Injectable()
export class UtilsService {
    removeBearer(token: string) {
        return token.split(" ")[1];
    }

    async jwtIsValid(token: string): Promise<boolean> {
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
}
