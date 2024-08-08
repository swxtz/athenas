import { Module } from "@nestjs/common";
import { OdinService } from "./odin.service";

@Module({
    providers: [OdinService],
    imports: [],
})
export class OdinModule {}
