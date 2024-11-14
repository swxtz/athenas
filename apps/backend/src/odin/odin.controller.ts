import {
    Controller,
    Get,
    Param,
    Post,
    Query,
    UsePipes,
    ValidationPipe,
} from "@nestjs/common";
import { OdinService } from "./odin.service";
import { ApiTags } from "@nestjs/swagger";
import { GetScoreByIdDTO } from "./dtos/get-score-by-id.dto";
import { GetScoreBySlugDTO } from "./dtos/get-score-by-slug.dto";
import { incrementLikeDTO } from "./dtos/increment-like.dto";
import { GetRecommendedProductsQuery } from "./queries/get-recommended-products.query";
import { SearchProductsQuery } from "./queries/search-products.dto";

@Controller("odin")
@ApiTags("Odin")
export class OdinController {
    constructor(private odinService: OdinService) {}

    @Get("get-score-by-id/:id")
    @UsePipes(new ValidationPipe({ transform: true }))
    async getScoreById(@Param() param: GetScoreByIdDTO) {
        return this.odinService.getScoreById(param.id);
    }

    @Get("get-score-by-slug/:slug")
    @UsePipes(new ValidationPipe({ transform: true }))
    async getScoreBySlug(@Param() param: GetScoreBySlugDTO) {
        return this.odinService.getScoreBySlug(param.slug);
    }

    @Get("get-recommended-products")
    async getRecommendedProducts(
        @Query(new ValidationPipe({ transform: true }))
        query?: GetRecommendedProductsQuery,
    ) {
        return this.odinService.getRecommendedProducts(query);
    }

    @Get("search-products")
    async searchProducts(
        @Query(new ValidationPipe()) query: SearchProductsQuery,
    ) {
        return this.odinService.searchProducts(query);
    }

    @Post("increment-like/:id")
    @UsePipes(new ValidationPipe({ transform: true }))
    async incrementLike(@Param() param: incrementLikeDTO) {
        return this.odinService.incrementLikeValue(param.id);
    }
}
