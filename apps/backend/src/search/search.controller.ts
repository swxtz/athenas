import { Controller, Get, Query } from "@nestjs/common";
import { SearchService } from "./search.service";
import { ApiTags } from "@nestjs/swagger";
import { GetSearchQuery } from "./querys/get-search-params";

@Controller("search")
@ApiTags("Search")
export class SearchController {
    constructor(private readonly searchService: SearchService) {}

    @Get()
    async getSearch(
        @Query()
        query: GetSearchQuery,
    ) {
        console.log(query);
        return this.searchService.getSearch(query);
    }
}
