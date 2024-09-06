import { Module } from "@nestjs/common";
import { OdinService } from "./odin.service";
import { OdinController } from "./odin.controller";

@Module({
    providers: [OdinService],
    imports: [],
    controllers: [OdinController],
})
export class OdinModule {}
