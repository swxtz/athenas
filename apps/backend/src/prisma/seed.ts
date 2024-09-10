import { PrismaClient } from "@prisma/client";
import { UtilsService } from "src/utils/utils.service";
import { PrismaMocks } from "./mocks";

const prisma = new PrismaClient();

const utils = new UtilsService();

const products = new PrismaMocks().products();

const users = new PrismaMocks().users;

async function seed() {
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
        },
    });

    await prisma.recommendation.create({
        data: {
            productId: p5.id,
        },
    });

    const user1 = await prisma.user.create({
        data: {
            email: users[0].email,
            name: users[0].name,
            password: users[0].password,
        },
    });

    console.log("Seed completed");
}

seed().finally(async () => {
    await prisma.$disconnect();
});
