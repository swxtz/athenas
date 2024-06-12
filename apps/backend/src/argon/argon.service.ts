import { Injectable } from "@nestjs/common";
import * as argon from "argon2";

@Injectable()
export class ArgonService {
    async hash(raw: string): Promise<string> {
        const hash = await argon.hash(raw);
        return hash;
    }
}
