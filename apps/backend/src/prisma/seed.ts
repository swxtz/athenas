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

    // Batatas

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

    const p11 = await prisma.product.create({
        data: {
            name: products[10].name,
            description: products[10].description,
            barcode: products[10].barcode,
            price: products[10].price,
            stock: products[10].stock,
            coverImage: products[10].coverImage,
            buyPrice: products[10].buyPrice,
            isAvailable: products[10].isAvailable,
            localPickup: products[10].localPickup,
            numberOfSales: products[10].numberOfSales,
            numberOfViews: products[10].numberOfViews,
            numberOfViewsInLastWeek: products[10].numberOfViewsInLastWeek,
            productType: products[10].productType,
            state: products[10].state,
            slug: utils.createProductSlug(products[10].name),

            Category: {
                create: {
                    type: products[10].type,
                },
            },
        },
    });

    await prisma.recommendation.create({
        data: {
            productId: p11.id,
        },
    });

    const p12 = await prisma.product.create({
        data: {
            name: products[11].name,
            description: products[11].description,
            barcode: products[11].barcode,
            price: products[11].price,
            stock: products[11].stock,
            coverImage: products[11].coverImage,
            buyPrice: products[11].buyPrice,
            isAvailable: products[11].isAvailable,
            localPickup: products[11].localPickup,
            numberOfSales: products[11].numberOfSales,
            numberOfViews: products[11].numberOfViews,
            numberOfViewsInLastWeek: products[11].numberOfViewsInLastWeek,
            productType: products[11].productType,
            state: products[11].state,
            slug: utils.createProductSlug(products[11].name),

            Category: {
                create: {
                    type: products[11].type,
                },
            },
        },
    });

    await prisma.recommendation.create({
        data: {
            productId: p12.id,
        },
    });

    //Hamburguéres

    const p13 = await prisma.product.create({
        data: {
            name: products[12].name,
            description: products[12].description,
            barcode: products[12].barcode,
            price: products[12].price,
            stock: products[12].stock,
            coverImage: products[12].coverImage,
            buyPrice: products[12].buyPrice,
            isAvailable: products[12].isAvailable,
            localPickup: products[12].localPickup,
            numberOfSales: products[12].numberOfSales,
            numberOfViews: products[12].numberOfViews,
            numberOfViewsInLastWeek: products[12].numberOfViewsInLastWeek,
            productType: products[12].productType,
            state: products[12].state,
            slug: utils.createProductSlug(products[12].name),

            Category: {
                create: {
                    type: products[12].type,
                },
            },
        },
    });

    await prisma.recommendation.create({
        data: {
            productId: p13.id,
        },
    });

    const p14 = await prisma.product.create({
        data: {
            name: products[13].name,
            description: products[13].description,
            barcode: products[13].barcode,
            price: products[13].price,
            stock: products[13].stock,
            coverImage: products[13].coverImage,
            buyPrice: products[13].buyPrice,
            isAvailable: products[13].isAvailable,
            localPickup: products[13].localPickup,
            numberOfSales: products[13].numberOfSales,
            numberOfViews: products[13].numberOfViews,
            numberOfViewsInLastWeek: products[13].numberOfViewsInLastWeek,
            productType: products[13].productType,
            state: products[13].state,
            slug: utils.createProductSlug(products[13].name),

            Category: {
                create: {
                    type: products[13].type,
                },
            },
        },
    });

    await prisma.recommendation.create({
        data: {
            productId: p14.id,
        },
    });

    const p15 = await prisma.product.create({
        data: {
            name: products[14].name,
            description: products[14].description,
            barcode: products[14].barcode,
            price: products[14].price,
            stock: products[14].stock,
            coverImage: products[14].coverImage,
            buyPrice: products[14].buyPrice,
            isAvailable: products[14].isAvailable,
            localPickup: products[14].localPickup,
            numberOfSales: products[14].numberOfSales,
            numberOfViews: products[14].numberOfViews,
            numberOfViewsInLastWeek: products[14].numberOfViewsInLastWeek,
            productType: products[14].productType,
            state: products[14].state,
            slug: utils.createProductSlug(products[14].name),

            Category: {
                create: {
                    type: products[14].type,
                },
            },
        },
    });

    await prisma.recommendation.create({
        data: {
            productId: p15.id,
        },
    });

    const p16 = await prisma.product.create({
        data: {
            name: products[15].name,
            description: products[15].description,
            barcode: products[15].barcode,
            price: products[15].price,
            stock: products[15].stock,
            coverImage: products[15].coverImage,
            buyPrice: products[15].buyPrice,
            isAvailable: products[15].isAvailable,
            localPickup: products[15].localPickup,
            numberOfSales: products[15].numberOfSales,
            numberOfViews: products[15].numberOfViews,
            numberOfViewsInLastWeek: products[15].numberOfViewsInLastWeek,
            productType: products[15].productType,
            state: products[15].state,
            slug: utils.createProductSlug(products[15].name),

            Category: {
                create: {
                    type: products[15].type,
                },
            },
        },
    });

    await prisma.recommendation.create({
        data: {
            productId: p16.id,
        },
    });

    const p17 = await prisma.product.create({
        data: {
            name: products[16].name,
            description: products[16].description,
            barcode: products[16].barcode,
            price: products[16].price,
            stock: products[16].stock,
            coverImage: products[16].coverImage,
            buyPrice: products[16].buyPrice,
            isAvailable: products[16].isAvailable,
            localPickup: products[16].localPickup,
            numberOfSales: products[16].numberOfSales,
            numberOfViews: products[16].numberOfViews,
            numberOfViewsInLastWeek: products[16].numberOfViewsInLastWeek,
            productType: products[16].productType,
            state: products[16].state,
            slug: utils.createProductSlug(products[16].name),

            Category: {
                create: {
                    type: products[16].type,
                },
            },
        },
    });

    await prisma.recommendation.create({
        data: {
            productId: p17.id,
        },
    });

    const p18 = await prisma.product.create({
        data: {
            name: products[17].name,
            description: products[17].description,
            barcode: products[17].barcode,
            price: products[17].price,
            stock: products[17].stock,
            coverImage: products[17].coverImage,
            buyPrice: products[17].buyPrice,
            isAvailable: products[17].isAvailable,
            localPickup: products[17].localPickup,
            numberOfSales: products[17].numberOfSales,
            numberOfViews: products[17].numberOfViews,
            numberOfViewsInLastWeek: products[17].numberOfViewsInLastWeek,
            productType: products[17].productType,
            state: products[17].state,
            slug: utils.createProductSlug(products[17].name),

            Category: {
                create: {
                    type: products[17].type,
                },
            },
        },
    });

    await prisma.recommendation.create({
        data: {
            productId: p18.id,
        },
    });

    // Pães

    const p19 = await prisma.product.create({
        data: {
            name: products[18].name,
            description: products[18].description,
            barcode: products[18].barcode,
            price: products[18].price,
            stock: products[18].stock,
            coverImage: products[18].coverImage,
            buyPrice: products[18].buyPrice,
            isAvailable: products[18].isAvailable,
            localPickup: products[18].localPickup,
            numberOfSales: products[18].numberOfSales,
            numberOfViews: products[18].numberOfViews,
            numberOfViewsInLastWeek: products[18].numberOfViewsInLastWeek,
            productType: products[18].productType,
            state: products[18].state,
            slug: utils.createProductSlug(products[18].name),

            Category: {
                create: {
                    type: products[18].type,
                },
            },
        },
    });

    await prisma.recommendation.create({
        data: {
            productId: p19.id,
        },
    });

    const p20 = await prisma.product.create({
        data: {
            name: products[19].name,
            description: products[19].description,
            barcode: products[19].barcode,
            price: products[19].price,
            stock: products[19].stock,
            coverImage: products[19].coverImage,
            buyPrice: products[19].buyPrice,
            isAvailable: products[19].isAvailable,
            localPickup: products[19].localPickup,
            numberOfSales: products[19].numberOfSales,
            numberOfViews: products[19].numberOfViews,
            numberOfViewsInLastWeek: products[19].numberOfViewsInLastWeek,
            productType: products[19].productType,
            state: products[19].state,
            slug: utils.createProductSlug(products[19].name),

            Category: {
                create: {
                    type: products[19].type,
                },
            },
        },
    });

    await prisma.recommendation.create({
        data: {
            productId: p20.id,
        },
    });

    const p21 = await prisma.product.create({
        data: {
            name: products[20].name,
            description: products[20].description,
            barcode: products[20].barcode,
            price: products[20].price,
            stock: products[20].stock,
            coverImage: products[20].coverImage,
            buyPrice: products[20].buyPrice,
            isAvailable: products[20].isAvailable,
            localPickup: products[20].localPickup,
            numberOfSales: products[20].numberOfSales,
            numberOfViews: products[20].numberOfViews,
            numberOfViewsInLastWeek: products[20].numberOfViewsInLastWeek,
            productType: products[20].productType,
            state: products[20].state,
            slug: utils.createProductSlug(products[20].name),

            Category: {
                create: {
                    type: products[20].type,
                },
            },
        },
    });

    await prisma.recommendation.create({
        data: {
            productId: p21.id,
        },
    });

    const p22 = await prisma.product.create({
        data: {
            name: products[21].name,
            description: products[21].description,
            barcode: products[21].barcode,
            price: products[21].price,
            stock: products[21].stock,
            coverImage: products[21].coverImage,
            buyPrice: products[21].buyPrice,
            isAvailable: products[21].isAvailable,
            localPickup: products[21].localPickup,
            numberOfSales: products[21].numberOfSales,
            numberOfViews: products[21].numberOfViews,
            numberOfViewsInLastWeek: products[21].numberOfViewsInLastWeek,
            productType: products[21].productType,
            state: products[21].state,
            slug: utils.createProductSlug(products[21].name),

            Category: {
                create: {
                    type: products[21].type,
                },
            },
        },
    });

    await prisma.recommendation.create({
        data: {
            productId: p22.id,
        },
    });

    const p23 = await prisma.product.create({
        data: {
            name: products[22].name,
            description: products[22].description,
            barcode: products[22].barcode,
            price: products[22].price,
            stock: products[22].stock,
            coverImage: products[22].coverImage,
            buyPrice: products[22].buyPrice,
            isAvailable: products[22].isAvailable,
            localPickup: products[22].localPickup,
            numberOfSales: products[22].numberOfSales,
            numberOfViews: products[22].numberOfViews,
            numberOfViewsInLastWeek: products[22].numberOfViewsInLastWeek,
            productType: products[22].productType,
            state: products[22].state,
            slug: utils.createProductSlug(products[22].name),

            Category: {
                create: {
                    type: products[22].type,
                },
            },
        },
    });

    await prisma.recommendation.create({
        data: {
            productId: p23.id,
        },
    });

    const p24 = await prisma.product.create({
        data: {
            name: products[23].name,
            description: products[23].description,
            barcode: products[23].barcode,
            price: products[23].price,
            stock: products[23].stock,
            coverImage: products[23].coverImage,
            buyPrice: products[23].buyPrice,
            isAvailable: products[23].isAvailable,
            localPickup: products[23].localPickup,
            numberOfSales: products[23].numberOfSales,
            numberOfViews: products[23].numberOfViews,
            numberOfViewsInLastWeek: products[23].numberOfViewsInLastWeek,
            productType: products[23].productType,
            state: products[23].state,
            slug: utils.createProductSlug(products[23].name),

            Category: {
                create: {
                    type: products[23].type,
                },
            },
        },
    });

    await prisma.recommendation.create({
        data: {
            productId: p24.id,
        },
    });

    // Queijos

    const p25 = await prisma.product.create({
        data: {
            name: products[24].name,
            description: products[24].description,
            barcode: products[24].barcode,
            price: products[24].price,
            stock: products[24].stock,
            coverImage: products[24].coverImage,
            buyPrice: products[24].buyPrice,
            isAvailable: products[24].isAvailable,
            localPickup: products[24].localPickup,
            numberOfSales: products[24].numberOfSales,
            numberOfViews: products[24].numberOfViews,
            numberOfViewsInLastWeek: products[24].numberOfViewsInLastWeek,
            productType: products[24].productType,
            state: products[24].state,
            slug: utils.createProductSlug(products[24].name),

            Category: {
                create: {
                    type: products[24].type,
                },
            },
        },
    });

    await prisma.recommendation.create({
        data: {
            productId: p25.id,
        },
    });

    const p26 = await prisma.product.create({
        data: {
            name: products[25].name,
            description: products[25].description,
            barcode: products[25].barcode,
            price: products[25].price,
            stock: products[25].stock,
            coverImage: products[25].coverImage,
            buyPrice: products[25].buyPrice,
            isAvailable: products[25].isAvailable,
            localPickup: products[25].localPickup,
            numberOfSales: products[25].numberOfSales,
            numberOfViews: products[25].numberOfViews,
            numberOfViewsInLastWeek: products[25].numberOfViewsInLastWeek,
            productType: products[25].productType,
            state: products[25].state,
            slug: utils.createProductSlug(products[25].name),

            Category: {
                create: {
                    type: products[25].type,
                },
            },
        },
    });

    await prisma.recommendation.create({
        data: {
            productId: p26.id,
        },
    });

    const p27 = await prisma.product.create({
        data: {
            name: products[26].name,
            description: products[26].description,
            barcode: products[26].barcode,
            price: products[26].price,
            stock: products[26].stock,
            coverImage: products[26].coverImage,
            buyPrice: products[26].buyPrice,
            isAvailable: products[26].isAvailable,
            localPickup: products[26].localPickup,
            numberOfSales: products[26].numberOfSales,
            numberOfViews: products[26].numberOfViews,
            numberOfViewsInLastWeek: products[26].numberOfViewsInLastWeek,
            productType: products[26].productType,
            state: products[26].state,
            slug: utils.createProductSlug(products[26].name),

            Category: {
                create: {
                    type: products[26].type,
                },
            },
        },
    });

    await prisma.recommendation.create({
        data: {
            productId: p27.id,
        },
    });

    const p28 = await prisma.product.create({
        data: {
            name: products[27].name,
            description: products[27].description,
            barcode: products[27].barcode,
            price: products[27].price,
            stock: products[27].stock,
            coverImage: products[27].coverImage,
            buyPrice: products[27].buyPrice,
            isAvailable: products[27].isAvailable,
            localPickup: products[27].localPickup,
            numberOfSales: products[27].numberOfSales,
            numberOfViews: products[27].numberOfViews,
            numberOfViewsInLastWeek: products[27].numberOfViewsInLastWeek,
            productType: products[27].productType,
            state: products[27].state,
            slug: utils.createProductSlug(products[27].name),

            Category: {
                create: {
                    type: products[27].type,
                },
            },
        },
    });

    await prisma.recommendation.create({
        data: {
            productId: p28.id,
        },
    });

    const p29 = await prisma.product.create({
        data: {
            name: products[28].name,
            description: products[28].description,
            barcode: products[28].barcode,
            price: products[28].price,
            stock: products[28].stock,
            coverImage: products[28].coverImage,
            buyPrice: products[28].buyPrice,
            isAvailable: products[28].isAvailable,
            localPickup: products[28].localPickup,
            numberOfSales: products[28].numberOfSales,
            numberOfViews: products[28].numberOfViews,
            numberOfViewsInLastWeek: products[28].numberOfViewsInLastWeek,
            productType: products[28].productType,
            state: products[28].state,
            slug: utils.createProductSlug(products[28].name),

            Category: {
                create: {
                    type: products[28].type,
                },
            },
        },
    });

    await prisma.recommendation.create({
        data: {
            productId: p29.id,
        },
    });

    const p30 = await prisma.product.create({
        data: {
            name: products[29].name,
            description: products[29].description,
            barcode: products[29].barcode,
            price: products[29].price,
            stock: products[29].stock,
            coverImage: products[29].coverImage,
            buyPrice: products[29].buyPrice,
            isAvailable: products[29].isAvailable,
            localPickup: products[29].localPickup,
            numberOfSales: products[29].numberOfSales,
            numberOfViews: products[29].numberOfViews,
            numberOfViewsInLastWeek: products[29].numberOfViewsInLastWeek,
            productType: products[29].productType,
            state: products[29].state,
            slug: utils.createProductSlug(products[29].name),

            Category: {
                create: {
                    type: products[29].type,
                },
            },
        },
    });

    await prisma.recommendation.create({
        data: {
            productId: p30.id,
        },
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
            password: await argon2.hash(users[1].password),
            emailVerified: true,
            emailVerificatedAt: new Date("2024-08-07T22:58:31.874Z"),
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
