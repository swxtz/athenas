import { Injectable } from "@nestjs/common";
import { GetSearchParams } from "./params/get-search-params";

@Injectable()
export class SearchService {
    async getSearch(params: GetSearchParams) {}
}
