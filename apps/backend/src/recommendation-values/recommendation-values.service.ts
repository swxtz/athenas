import { Injectable } from "@nestjs/common";

@Injectable()
export class RecommendationValuesService {
    private static viewValue = 0.03;
    private static saleValue = 0.5;
    private static reBuy = 0.6;
    private static like = 0.1;
    private static selfSearch = 0.75;

    public static get view() {
        return this.viewValue;
    }

    public static get sale() {
        return this.saleValue;
    }

    public static get reBuyValue() {
        return this.reBuy;
    }

    public static get likeValue() {
        return this.like;
    }

    public static get selfSearchValue() {
        return this.selfSearch;
    }
}
