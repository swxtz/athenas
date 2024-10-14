import {
    Body,
    Controller,
    Delete,
    Get,
    Headers,
    HttpCode,
    Param,
    Post,
    Put,
    UseGuards,
    UsePipes,
    ValidationPipe,
} from "@nestjs/common";
import { ShoppingCartService } from "./shopping-cart.service";
import { AuthGuard } from "src/auth/auth.guard";
import { ApiTags } from "@nestjs/swagger";
import { AddProductInUserShoppingCartDTO } from "./dtos/add-product-in-user-shopping-cart.dto";
import { UpdateProductInShoppingCartParams } from "./params/update-product-in-shopping-cart.params";
import { UpdateProductInShoppingCartDTO } from "./dtos/update-product-in-shopping-cart.dto";
import { Throttle } from "@nestjs/throttler";
import { DeleteProductInShoppingCartParam } from "./params/delete-product-in-user-shopping-cart.params";

@Controller("shopping-cart")
@ApiTags("Shopping Cart")
export class ShoppingCartController {
    constructor(private readonly shoppingCartService: ShoppingCartService) {}

    @Post("add-product-in-user-shopping-cart")
    @Throttle({ default: { limit: 20, ttl: 60000 } })
    @UseGuards(AuthGuard)
    async addProductInShoppingCart(
        @Body(new ValidationPipe()) body: AddProductInUserShoppingCartDTO,
        @Headers("authorization") token: string,
    ) {
        return this.shoppingCartService.addProductInUserShoppingCart(
            token,
            body,
        );
    }

    @Get("get-all-products-in-user-shopping-cart")
    @Throttle({ default: { limit: 20, ttl: 60000 } })
    @UseGuards(AuthGuard)
    async allProductsInShoppingCart(@Headers("authorization") token: string) {
        return this.shoppingCartService.getAllProductsInUserShoppingCart(token);
    }

    @Put(":id")
    @Throttle({ default: { limit: 20, ttl: 60000 } })
    @UsePipes(new ValidationPipe({ transform: true }))
    async updateProduct(
        @Body() body: UpdateProductInShoppingCartDTO,
        @Param(new ValidationPipe({ transform: true }))
        params: UpdateProductInShoppingCartParams,
        @Headers("authorization") token: string,
    ) {
        return this.shoppingCartService.updateProductInShoppingCart(
            token,
            params,
            body,
        );
    }

    @Delete("/delete-product/:id")
    @HttpCode(200)
    @UsePipes(new ValidationPipe({ transform: true }))
    async deleteProductInShoppingCart(
        @Param(new ValidationPipe({ transform: true }))
        params: DeleteProductInShoppingCartParam,
        @Headers("authorization") token: string,
    ) {
        return this.shoppingCartService.deleteProductInUserShoppingCart(
            token,
            params,
        );
    }

    @Delete("delete-all-products-from-user-shopping-cart")
    @HttpCode(200)
    async deleteManyProductInShoppingCart(
        @Headers("authorization") token: string,
    ) {
        return this.shoppingCartService.deleteAllProductsFromUserShoppingCart(
            token,
        );
    }
}
