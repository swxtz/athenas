import { HttpException, Injectable, Logger } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/prisma/prisma.service";
import { UtilsService } from "src/utils/utils.service";
import { AddProductInUserShoppingCartDTO } from "./dtos/add-product-in-user-shopping-cart.dto";
import { Prisma } from "@prisma/client";
import { UpdateProductInShoppingCartParams } from "./params/update-product-in-shopping-cart.params";
import { UpdateProductInShoppingCartDTO } from "./dtos/update-product-in-shopping-cart.dto";

interface JWTBearerTokenPayLoad {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
    updateAt: Date;
    iat: number;
    exp: number;
}

@Injectable()
export class ShoppingCartService {
    constructor(
        private prisma: PrismaService,
        private utils: UtilsService,
        private jwt: JwtService,
    ) {}

    private logger = new Logger();

    async addProductInUserShoppingCart(
        rawtoken: string,
        product: AddProductInUserShoppingCartDTO,
    ) {
        const token = this.utils.removeBearer(rawtoken);

        try {
            const jwtpayload: JWTBearerTokenPayLoad =
                await this.jwt.verifyAsync(token);

            if (!jwtpayload) {
                throw new HttpException(
                    {
                        message: "Token inválido",
                    },
                    401,
                );
            }

            const user = await this.prisma.user.findFirst({
                where: { id: jwtpayload.id },
                select: {
                    id: true,
                    email: true,
                },
            });

            if (!user) {
                throw new HttpException(
                    {
                        message: "JWT Inválido",
                    },
                    401,
                );
            }

            const productExists = await this.prisma.product.findFirst({
                where: { id: product.id },
                select: {
                    id: true,
                    name: true,
                    price: true,
                    isAvailable: true,
                    isDeleted: true,
                    stock: true,
                },
            });

            if (!productExists) {
                this.logger.warn(`Product not find with: ${product.id}`);
                throw new HttpException(
                    {
                        message: `Produto não encontrado com o id: ${product.id}`,
                    },
                    404,
                );
            }

            if (productExists.isDeleted) {
                this.logger.warn(`Product deleted with: ${product.id}`);
                throw new HttpException(
                    {
                        message: `Produto deletado com o id: ${product.id}`,
                    },
                    404,
                );
            }

            if (!productExists.isAvailable) {
                this.logger.warn(`Product not available with: ${product.id}`);
                throw new HttpException(
                    {
                        message: `Produto não disponível com o id: ${product.id}`,
                    },
                    404,
                );
            }

            if (product.amount > productExists.stock) {
                this.logger.warn(`Product out of stock with: ${product.id}`);
                throw new HttpException(
                    {
                        message: `Produto sem estoque: ${productExists.name}`,
                    },
                    400,
                );
            }

            const shoppingCart =
                await this.prisma.shoppingCart.findFirstOrThrow({
                    where: {
                        userId: user.id,
                    },
                    select: {
                        id: true,
                    },
                });

            const cartProducts = await this.prisma.shoppingCartProduct.findMany(
                {
                    where: {
                        shoppingCartId: shoppingCart.id,
                    },
                },
            );

            const productExistsInShoppingCart = cartProducts.some(
                (cartProduct) => cartProduct.productId === product.id,
            );

            if (productExistsInShoppingCart) {
                throw new HttpException(
                    {
                        message: `Produto já está no carrinho: ${productExists.name}`,
                    },
                    400,
                );
            }

            const addProductInUserShoppingCart =
                await this.prisma.shoppingCartProduct.create({
                    data: {
                        shoppingCartId: shoppingCart.id,
                        productId: product.id,
                        amount: product.amount,
                    },
                });

            return addProductInUserShoppingCart;
        } catch (err) {
            if (err instanceof Prisma.PrismaClientKnownRequestError) {
                console.log(err.name);
                if (
                    err.name === "NotFoundError" &&
                    err.message === "No User found"
                ) {
                    this.logger.warn(`User not find`);
                    throw new HttpException(
                        {
                            message:
                                "Usuário não existe, tente relogar na aplicação",
                        },
                        401,
                    );
                }
            }

            if (err instanceof HttpException) {
                throw err;
            }

            this.logger.error(err);
            console.error(err);
            throw new HttpException(
                {
                    message: "Ocorreu um erro interno",
                },
                500,
            );
        }
    }

    async getAllProductsInUserShoppingCart(rawtoken: string) {
        const token = this.utils.removeBearer(rawtoken);

        try {
            const jwtpayload: JWTBearerTokenPayLoad =
                await this.jwt.verifyAsync(token);

            if (!jwtpayload) {
                throw new HttpException(
                    {
                        message: "Token inválido",
                    },
                    401,
                );
            }

            const user = await this.prisma.user.findFirst({
                where: { id: jwtpayload.id },
                select: {
                    id: true,
                    email: true,
                },
            });

            if (!user) {
                throw new HttpException(
                    {
                        message: "JWT Inválido",
                    },
                    401,
                );
            }

            const shoppingCart = await this.prisma.shoppingCart.findFirst({
                where: {
                    userId: user.id,
                },
                select: {
                    id: true,
                },
            });

            const products = await this.prisma.shoppingCartProduct.findMany({
                where: { shoppingCartId: shoppingCart.id },
                select: {
                    productId: true,
                    amount: true,
                },
            });

            return products;
        } catch (err) {
            if (err instanceof Prisma.PrismaClientKnownRequestError) {
                console.log(err.name);
                if (
                    err.name === "NotFoundError" &&
                    err.message === "No User found"
                ) {
                    this.logger.warn(`User not find`);
                    throw new HttpException(
                        {
                            message:
                                "Usuário não existe, tente relogar na aplicação",
                        },
                        401,
                    );
                }
            }

            if (err instanceof HttpException) {
                throw err;
            }

            this.logger.error(err);
            console.error(err);
            throw new HttpException(
                {
                    message: "Ocorreu um erro interno",
                },
                500,
            );
        }
    }

    async updateProductInShoppingCart(
        rawtoken: string,
        params: UpdateProductInShoppingCartParams,
        product: UpdateProductInShoppingCartDTO,
    ) {
        const token = this.utils.removeBearer(rawtoken);

        try {
            const jwtpayload: JWTBearerTokenPayLoad =
                await this.jwt.verifyAsync(token);

            if (!jwtpayload) {
                throw new HttpException(
                    {
                        message: "Token inválido",
                    },
                    401,
                );
            }

            const user = await this.prisma.user.findFirst({
                where: { id: jwtpayload.id },
                select: {
                    id: true,
                    email: true,
                },
            });

            if (!user) {
                throw new HttpException(
                    {
                        message: "JWT Inválido",
                    },
                    401,
                );
            }

            const productExists = await this.prisma.product.findFirst({
                where: { id: params.id },
                select: {
                    id: true,
                    name: true,
                    price: true,
                    isAvailable: true,
                    isDeleted: true,
                    stock: true,
                },
            });

            if (!productExists) {
                this.logger.warn(`Product not find with: ${params.id}`);
                throw new HttpException(
                    {
                        message: `Produto não encontrado com o id: ${params.id}`,
                    },
                    404,
                );
            }

            if (productExists.isDeleted) {
                this.logger.warn(`Product deleted with: ${params.id}`);
                throw new HttpException(
                    {
                        message: `Produto deletado com o id: ${params.id}`,
                    },
                    404,
                );
            }

            if (!productExists.isAvailable) {
                this.logger.warn(`Product not available with: ${params.id}`);
                throw new HttpException(
                    {
                        message: `Produto não disponível com o id: ${params.id}`,
                    },
                    404,
                );
            }

            if (product.amount > productExists.stock) {
                this.logger.warn(`Product out of stock with: ${params.id}`);
                throw new HttpException(
                    {
                        message: `Produto sem estoque: ${productExists.name}`,
                    },
                    400,
                );
            }

            const shoppingCart =
                await this.prisma.shoppingCart.findFirstOrThrow({
                    where: {
                        userId: user.id,
                    },
                    select: {
                        id: true,
                    },
                });

            const cartProducts = await this.prisma.shoppingCartProduct.findMany(
                {
                    where: {
                        shoppingCartId: shoppingCart.id,
                    },
                    select: {
                        id: true,
                        productId: true,
                        amount: true,
                    },
                },
            );

            let productToUpdate: {
                id: string;
                amount: number;
            };

            const productExistsInShoppingCart = cartProducts.some(
                (cartProduct) => {
                    if (cartProduct.productId === params.id) {
                        productToUpdate = {
                            id: cartProduct.id,
                            amount: cartProduct.amount,
                        };
                        return true;
                    }
                    return false;
                },
            );

            if (!productExistsInShoppingCart) {
                throw new HttpException(
                    {
                        message: `Produto com esse ${product.name} não existe no carrinho`,
                    },
                    400,
                );
            }

            if (product.order === "increment") {
                if (product.amount < productExists.stock) {
                    await this.prisma.shoppingCartProduct.update({
                        where: {
                            id: productToUpdate.id,
                        },
                        data: {
                            amount: {
                                increment: product.amount,
                            },
                        },
                    });
                } else {
                    throw new HttpException(
                        {
                            message: `Não é possível adicionar mais produtos do que há no estoque`,
                        },
                        400,
                    );
                }
            } else {
                if (product.amount < productToUpdate.amount) {
                    await this.prisma.shoppingCartProduct.update({
                        where: {
                            id: productToUpdate.id,
                        },
                        data: {
                            amount: {
                                decrement: product.amount,
                            },
                        },
                    });
                } else {
                    throw new HttpException(
                        {
                            message: `Não é possível retirar mais produtos do que há no carrinho`,
                        },
                        400,
                    );
                }
            }
        } catch (err) {
            if (err instanceof Prisma.PrismaClientKnownRequestError) {
                console.log(err.name);
                if (
                    err.name === "NotFoundError" &&
                    err.message === "No User found"
                ) {
                    this.logger.warn(`User not find`);
                    throw new HttpException(
                        {
                            message:
                                "Usuário não existe, tente relogar na aplicação",
                        },
                        401,
                    );
                }
            }

            if (err instanceof HttpException) {
                throw err;
            }

            this.logger.error(err);
            console.error(err);
            throw new HttpException(
                {
                    message: "Ocorreu um erro interno",
                },
                500,
            );
        }
    }
}
