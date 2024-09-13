/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient } from "@prisma/client";
import { UtilsService } from "src/utils/utils.service";
import { PrismaMocks } from "./mocks";

const prisma = new PrismaClient();

const utils = new UtilsService();

const products = new PrismaMocks().products();

const users = new PrismaMocks().users();

async function seed() {
    // Molhos
    const p1 = await prisma.product.create({
        data: {
            name: products[0].name,
            description: products[0].description,
            barcode: products[0].barcode,
            price: products[0].price,
            stock: products[0].stock,
            coverImage: products[0].coverImage,
            buyPrice: products[0].buyPrice,
            isAvailable: products[0].isAvailable,
            localPickup: products[0].localPickup,
            numberOfSales: products[0].numberOfSales,
            numberOfViews: products[0].numberOfViews,
            numberOfViewsInLastWeek: products[0].numberOfViewsInLastWeek,
            productType: products[0].productType,
            state: products[0].state,
            slug: utils.createProductSlug(products[0].name),

            Category: {
                create: {
                    type: products[0].type,
                },
            },
        },
    });

    await prisma.recommendation.create({
        data: {
            productId: p1.id,
        },
    });

    const p2 = await prisma.product.create({
        data: {
            name: products[1].name,
            description: products[1].description,
            barcode: products[1].barcode,
            price: products[1].price,
            stock: products[1].stock,
            coverImage: products[1].coverImage,
            buyPrice: products[1].buyPrice,
            isAvailable: products[1].isAvailable,
            localPickup: products[1].localPickup,
            numberOfSales: products[1].numberOfSales,
            numberOfViews: products[1].numberOfViews,
            numberOfViewsInLastWeek: products[1].numberOfViewsInLastWeek,
            productType: products[1].productType,
            state: products[1].state,
            slug: utils.createProductSlug(products[1].name),

            Category: {
                create: {
                    type: products[1].type,
                },
            },
        },
    });

    await prisma.recommendation.create({
        data: {
            productId: p2.id,
        },
    });

    const p3 = await prisma.product.create({
        data: {
            name: products[2].name,
            description: products[2].description,
            barcode: products[2].barcode,
            price: products[2].price,
            stock: products[2].stock,
            coverImage: products[2].coverImage,
            buyPrice: products[2].buyPrice,
            isAvailable: products[2].isAvailable,
            localPickup: products[2].localPickup,
            numberOfSales: products[2].numberOfSales,
            numberOfViews: products[2].numberOfViews,
            numberOfViewsInLastWeek: products[2].numberOfViewsInLastWeek,
            productType: products[2].productType,
            state: products[2].state,
            slug: utils.createProductSlug(products[2].name),

            Category: {
                create: {
                    type: products[2].type,
                },
            },
        },
    });

    await prisma.recommendation.create({
        data: {
            productId: p3.id,
        },
    });

    const p4 = await prisma.product.create({
        data: {
            name: products[3].name,
            description: products[3].description,
            barcode: products[3].barcode,
            price: products[3].price,
            stock: products[3].stock,
            coverImage: products[3].coverImage,
            buyPrice: products[3].buyPrice,
            isAvailable: products[3].isAvailable,
            localPickup: products[3].localPickup,
            numberOfSales: products[3].numberOfSales,
            numberOfViews: products[3].numberOfViews,
            numberOfViewsInLastWeek: products[3].numberOfViewsInLastWeek,
            productType: products[3].productType,
            state: products[3].state,
            slug: utils.createProductSlug(products[3].name),

            Category: {
                create: {
                    type: products[3].type,
                },
            },
        },
    });

    await prisma.recommendation.create({
        data: {
            productId: p4.id,
        },
    });

    const p5 = await prisma.product.create({
        data: {
            name: products[4].name,
            description: products[4].description,
            barcode: products[4].barcode,
            price: products[4].price,
            stock: products[4].stock,
            coverImage: products[4].coverImage,
            buyPrice: products[4].buyPrice,
            isAvailable: products[4].isAvailable,
            localPickup: products[4].localPickup,
            numberOfSales: products[4].numberOfSales,
            numberOfViews: products[4].numberOfViews,
            numberOfViewsInLastWeek: products[4].numberOfViewsInLastWeek,
            productType: products[4].productType,
            state: products[4].state,
            slug: utils.createProductSlug(products[4].name),

            Category: {
                create: {
                    type: products[4].type,
                },
            },
        },
    });

    await prisma.recommendation.create({
        data: {
            productId: p5.id,
        },
    });

    // Batatas

    const p6 = await prisma.product.create({
        data: {
            name: products[5].name,
            description: products[5].description,
            barcode: products[5].barcode,
            price: products[5].price,
            stock: products[5].stock,
            coverImage: products[5].coverImage,
            buyPrice: products[5].buyPrice,
            isAvailable: products[5].isAvailable,
            localPickup: products[5].localPickup,
            numberOfSales: products[5].numberOfSales,
            numberOfViews: products[5].numberOfViews,
            numberOfViewsInLastWeek: products[5].numberOfViewsInLastWeek,
            productType: products[5].productType,
            state: products[5].state,
            slug: utils.createProductSlug(products[5].name),

            Category: {
                create: {
                    type: products[5].type,
                },
            },
        },
    });

    await prisma.recommendation.create({
        data: {
            productId: p6.id,
        },
    });

    const p7 = await prisma.product.create({
        data: {
            name: products[6].name,
            description: products[6].description,
            barcode: products[6].barcode,
            price: products[6].price,
            stock: products[6].stock,
            coverImage: products[6].coverImage,
            buyPrice: products[6].buyPrice,
            isAvailable: products[6].isAvailable,
            localPickup: products[6].localPickup,
            numberOfSales: products[6].numberOfSales,
            numberOfViews: products[6].numberOfViews,
            numberOfViewsInLastWeek: products[6].numberOfViewsInLastWeek,
            productType: products[6].productType,
            state: products[6].state,
            slug: utils.createProductSlug(products[6].name),

            Category: {
                create: {
                    type: products[6].type,
                },
            },
        },
    });

    await prisma.recommendation.create({
        data: {
            productId: p7.id,
        },
    });

    const p8 = await prisma.product.create({
        data: {
            name: products[7].name,
            description: products[7].description,
            barcode: products[7].barcode,
            price: products[7].price,
            stock: products[7].stock,
            coverImage: products[7].coverImage,
            buyPrice: products[7].buyPrice,
            isAvailable: products[7].isAvailable,
            localPickup: products[7].localPickup,
            numberOfSales: products[7].numberOfSales,
            numberOfViews: products[7].numberOfViews,
            numberOfViewsInLastWeek: products[7].numberOfViewsInLastWeek,
            productType: products[7].productType,
            state: products[7].state,
            slug: utils.createProductSlug(products[7].name),

            Category: {
                create: {
                    type: products[7].type,
                },
            },
        },
    });

    await prisma.recommendation.create({
        data: {
            productId: p8.id,
        },
    });

    const p9 = await prisma.product.create({
        data: {
            name: products[8].name,
            description: products[8].description,
            barcode: products[8].barcode,
            price: products[8].price,
            stock: products[8].stock,
            coverImage: products[8].coverImage,
            buyPrice: products[8].buyPrice,
            isAvailable: products[8].isAvailable,
            localPickup: products[8].localPickup,
            numberOfSales: products[8].numberOfSales,
            numberOfViews: products[8].numberOfViews,
            numberOfViewsInLastWeek: products[8].numberOfViewsInLastWeek,
            productType: products[8].productType,
            state: products[8].state,
            slug: utils.createProductSlug(products[8].name),

            Category: {
                create: {
                    type: products[8].type,
                },
            },
        },
    });

    await prisma.recommendation.create({
        data: {
            productId: p9.id,
        },
    });

    const p10 = await prisma.product.create({
        data: {
            name: products[9].name,
            description: products[9].description,
            barcode: products[9].barcode,
            price: products[9].price,
            stock: products[9].stock,
            coverImage: products[9].coverImage,
            buyPrice: products[9].buyPrice,
            isAvailable: products[9].isAvailable,
            localPickup: products[9].localPickup,
            numberOfSales: products[9].numberOfSales,
            numberOfViews: products[9].numberOfViews,
            numberOfViewsInLastWeek: products[9].numberOfViewsInLastWeek,
            productType: products[9].productType,
            state: products[9].state,
            slug: utils.createProductSlug(products[9].name),

            Category: {
                create: {
                    type: products[9].type,
                },
            },
        },
    });

    await prisma.recommendation.create({
        data: {
            productId: p10.id,
        },
    });

    const user1 = await prisma.user.create({
        data: {
            email: users[0].email,
            name: users[0].name,
            password: users[0].password,
        },
    });

    await prisma.userPurchases.create({
        data: {
            productName: p1.name,
            productValue: p1.price,
            productSlug: p1.slug,
            productId: p1.id,
            userId: user1.id,
        },
    });

    await prisma.userPurchases.create({
        data: {
            productName: p2.name,
            productValue: p2.price,
            productSlug: p2.slug,
            productId: p2.id,
            userId: user1.id,
        },
    });

    await prisma.userPurchases.create({
        data: {
            productName: p3.name,
            productValue: p3.price,
            productSlug: p3.slug,
            productId: p3.id,
            userId: user1.id,
        },
    });

    await prisma.userPurchases.create({
        data: {
            productName: p4.name,
            productValue: p4.price,
            productSlug: p4.slug,
            productId: p4.id,
            userId: user1.id,
        },
    });

    await prisma.userPurchases.create({
        data: {
            productName: p5.name,
            productValue: p5.price,
            productSlug: p5.slug,
            productId: p5.id,
            userId: user1.id,
        },
    });

    console.log("Seed completed");
}

seed().finally(async () => {
    await prisma.$disconnect();
});
