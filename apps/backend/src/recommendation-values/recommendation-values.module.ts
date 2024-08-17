import { Global, Module } from "@nestjs/common";
import { RecommendationValuesService } from "./recommendation-values.service";

@Global()
@Module({
    providers: [RecommendationValuesService],
})
export class RecommendationValuesModule {}
