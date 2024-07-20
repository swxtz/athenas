import { Global, Module } from "@nestjs/common";
import { DayjsService } from "./dayjs.service";

@Global()
@Module({
    providers: [DayjsService],
    exports: [DayjsService],
})
export class DayjsModule {}
