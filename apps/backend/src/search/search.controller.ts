import {
    Body,
    Controller,
    Get,
    Param,
    UsePipes,
    ValidationPipe,
} from "@nestjs/common";
import { SearchService } from "./search.service";
import { ApiTags } from "@nestjs/swagger";
import { GetSearchParams } from "./params/get-search-params";
import { GetSearchDTO } from "./dtos/get-search.dto";

@Controller("search")
@ApiTags("Search")
export class SearchController {
    constructor(private readonly searchService: SearchService) {}

    @Get(":userSearch")
    @UsePipes(new ValidationPipe({ transform: true }))
    async getSearch(
        @Param(new ValidationPipe({ transform: true }))
        params: GetSearchParams,
        @Body() body: GetSearchDTO,
    ) {
        return this.searchService.getSearch(params, body);
    }
}
