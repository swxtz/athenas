import { Injectable } from "@nestjs/common";
import * as argon from "argon2";

@Injectable()
export class ArgonService {
    async hash(raw: string): Promise<string> {
        const hash = await argon.hash(raw);
        return hash;
    }

    async verify(raw: string, hash: string): Promise<boolean> {
        const hashIsValid = await argon.verify(hash, raw);
        return hashIsValid;
    }
}
