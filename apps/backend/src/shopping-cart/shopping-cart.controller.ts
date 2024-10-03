import {
    Body,
    Controller,
    Delete,
    Get,
    Headers,
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
import { DeleteProductInShoppingCsartParam } from "./params/delete-product-in-user-shopping-cart.params";

@Controller("shopping-cart")
@ApiTags("Shopping Cart")
export class ShoppingCartController {
    constructor(private readonly shoppingCartService: ShoppingCartService) {}

    @Post("add-product-in-user-shopping-cart")
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
    @UseGuards(AuthGuard)
    async allProductsInShoppingCart(@Headers("authorization") token: string) {
        return this.shoppingCartService.getAllProductsInUserShoppingCart(token);
    }

    @Put(":id")
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

    @Delete(":id")
    @UsePipes(new ValidationPipe({ transform: true }))
    async deleteProductInShoppingCart(
        @Param(new ValidationPipe({ transform: true }))
        params: DeleteProductInShoppingCsartParam,
        @Headers("authorization") token: string,
    ) {
        return this.shoppingCartService.deleteProductInUserShoppingCart(
            token,
            params,
        );
    }
}
