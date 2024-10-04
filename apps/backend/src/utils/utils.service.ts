import { Injectable } from "@nestjs/common";
import slugify from "slugify";
import { createId } from "@paralleldrive/cuid2";

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
