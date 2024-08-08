import { Global, Module } from "@nestjs/common";
import { RecommentationValuesService } from "./recommentation-values.service";

@Global()
@Module({
    providers: [RecommentationValuesService],
})
export class RecommentationValuesModule {}
