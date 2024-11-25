/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient } from "@prisma/client";
import { UtilsService } from "src/utils/utils.service";
import { PrismaMocks } from "./mocks";
import { ArgonService } from "src/argon/argon.service";
import argon2 from "argon2";

const prisma = new PrismaClient();

const utils = new UtilsService();

const products = new PrismaMocks().products();

const users = new PrismaMocks().users();

async function seed() {
    const argon = new ArgonService();

    for (const product of products) {
        const createdProduct = await prisma.product.create({
            data: {
                name: product.name,
                description: product.description,
                barcode: product.barcode,
                price: product.price,
                stock: product.stock,
                coverImage: product.coverImage,
                buyPrice: product.buyPrice,
                isAvailable: product.isAvailable,
                localPickup: product.localPickup,
                numberOfSales: product.numberOfSales,
                numberOfViews: product.numberOfViews,
                numberOfViewsInLastWeek: product.numberOfViewsInLastWeek,
                productType: product.productType,
                state: product.state,
                slug: utils.createProductSlug(product.name),
                Category: {
                    create: {
                        type: product.type,
                    },
                },
            },
        });

        await prisma.recommendation.create({
            data: {
                productId: createdProduct.id,
            },
        });

        await prisma.productDimensions.create({
            data: {
                productId: createdProduct.id,
                height: 2,
                weight: 2,
                length: 2,
                width: 2,
            },
        });
    }

    const availableProducts = await prisma.product.findMany({
        where: { isAvailable: true, isDeleted: false },
        take: 5,
    });

    const user1 = await prisma.user.create({
        data: {
            email: users[0].email,
            name: users[0].name,
            password: await argon2.hash(users[0].password),
            emailVerified: true,
            emailVerificatedAt: new Date("2024-08-07T22:58:31.874Z"),
        },
    });

    const user2 = await prisma.user.create({
        data: {
            email: users[1].email,
            name: users[1].name,
            password: await argon2.hash(users[0].password),
            emailVerified: true,
            emailVerificatedAt: new Date("2024-08-07T22:58:31.874Z"),
        },
    });

    const user3 = await prisma.user.create({
        data: {
            email: users[2].email,
            name: users[2].name,
            password: await argon2.hash(users[2].password),
            emailVerified: true,
            emailVerificatedAt: new Date("2024-08-07T22:58:31.874Z"),
        },
    });

    await prisma.shoppingCart.create({
        data: {
            userId: user3.id,
        },
    });

    await prisma.userPurchases.create({
        data: {
            productName: availableProducts[0].name,
            productValue: availableProducts[0].price,
            productSlug: availableProducts[0].slug,
            productId: availableProducts[0].id,
            userId: user1.id,
        },
    });

    await prisma.userPurchases.create({
        data: {
            productName: availableProducts[1].name,
            productValue: availableProducts[1].price,
            productSlug: availableProducts[1].slug,
            productId: availableProducts[1].id,
            userId: user1.id,
        },
    });

    await prisma.userPurchases.create({
        data: {
            productName: availableProducts[2].name,
            productValue: availableProducts[2].price,
            productSlug: availableProducts[2].slug,
            productId: availableProducts[2].id,
            userId: user1.id,
        },
    });

    await prisma.userPurchases.create({
        data: {
            productName: availableProducts[3].name,
            productValue: availableProducts[3].price,
            productSlug: availableProducts[3].slug,
            productId: availableProducts[3].id,
            userId: user1.id,
        },
    });

    await prisma.userPurchases.create({
        data: {
            productName: availableProducts[4].name,
            productValue: availableProducts[4].price,
            productSlug: availableProducts[4].slug,
            productId: availableProducts[4].id,
            userId: user1.id,
        },
    });

    console.log("Seed completed");
}

seed().finally(async () => {
    await prisma.$disconnect();
});
