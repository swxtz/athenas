import { Controller, Get, Query, ValidationPipe } from "@nestjs/common";
import { CategoriesService } from "./categories.service";
import { ApiTags } from "@nestjs/swagger";
import { GetAllCategoriesDTO } from "./dtos/get-all-categories.dto";
import { GetProductsByCategoriesQuery } from "./querys/get-products-by-categorie.query";

@Controller("categories")
@ApiTags("Categories")
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService) {}
    @Get("all")
    async getAllCategories(
        @Query(new ValidationPipe({ transform: true }))
        query?: GetAllCategoriesDTO,
    ) {
        return this.categoriesService.getCategories(query.limit);
    }

    @Get()
    async getSearch(
        @Query()
        query: GetProductsByCategoriesQuery,
    ) {
        return this.categoriesService.getProductsByCategory(query);
    }
}
