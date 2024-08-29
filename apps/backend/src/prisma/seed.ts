import { PrismaClient } from "@prisma/client";
import { ProductEntity } from "src/products/entity/product.entity";
import { UtilsService } from "src/utils/utils.service";

const prisma = new PrismaClient();

const utils = new UtilsService();

const products: ProductEntity[] = [
    {
        name: "Junior Ketchup Defumado",
        description:
            "Descubra um novo nível de sabor com o Junior Ketchup Defumado! Este ketchup artesanal combina o clássico molho de tomate com um toque sofisticado de defumado, oferecendo uma explosão de sabor que vai elevar suas refeições a um patamar gourmet. Feito com ingredientes selecionados e um processo de defumação especial, o Junior Ketchup Defumado proporciona uma textura suave e um gosto irresistível, perfeito para acompanhar hambúrgueres, batatas fritas, carnes grelhadas e muito mais. Experimente e transforme o simples em extraordinário com este ketchup inovador e cheio de personalidade!",
        barcode: "123456789",
        price: 2284,
        stock: 100,
        coverImage:
            "https://http2.mlstatic.com/D_NQ_NP_623362-MLA76151912404_052024-O.webp",
        buyPrice: 1000,
        isAvailable: true,
        localPickup: true,
        numberOfSales: 1000,
        numberOfViews: 1000,
        numberOfViewsInLastWeek: 1000,
        productType: "others",
        state: "available",
    },
    {
        name: "Junior Ketchup American",
        description:
            "Descubra um novo nível de sabor com o Junior Ketchup ! Este ketchup artesanal combina o clássico molho de tomate com um toque sofisticado de defumado, oferecendo uma explosão de sabor que vai elevar suas refeições a um patamar gourmet. Feito com ingredientes selecionados e um processo de defumação especial, o Junior Ketchup Defumado proporciona uma textura suave e um gosto irresistível, perfeito para acompanhar hambúrgueres, batatas fritas, carnes grelhadas e muito mais. Experimente e transforme o simples em extraordinário com este ketchup inovador e cheio de personalidade!",
        barcode: "123456789",
        price: 2284,
        stock: 100,
        coverImage:
            "https://http2.mlstatic.com/D_NQ_NP_981556-MLU77836658274_072024-O.webp",
        buyPrice: 1000,
        isAvailable: true,
        localPickup: true,
        numberOfSales: 1002,
        numberOfViews: 1000,
        numberOfViewsInLastWeek: 1000,
        productType: "others",
        state: "available",
    },
    {
        name: "Junior Maionese Grill",
        description:
            "Descubra um novo nível de sabor com o Junior Ketchup ! Este ketchup artesanal combina o clássico molho de tomate com um toque sofisticado de defumado, oferecendo uma explosão de sabor que vai elevar suas refeições a um patamar gourmet. Feito com ingredientes selecionados e um processo de defumação especial, o Junior Ketchup Defumado proporciona uma textura suave e um gosto irresistível, perfeito para acompanhar hambúrgueres, batatas fritas, carnes grelhadas e muito mais. Experimente e transforme o simples em extraordinário com este ketchup inovador e cheio de personalidade!",
        barcode: "123456789",
        price: 2284,
        stock: 100,
        coverImage:
            "https://http2.mlstatic.com/D_NQ_NP_945620-MLU74118445342_012024-O.webp",
        buyPrice: 1000,
        isAvailable: true,
        localPickup: true,
        numberOfSales: 1003,
        numberOfViews: 1000,
        numberOfViewsInLastWeek: 1000,
        productType: "others",
        state: "available",
    },
    {
        name: "Junior Maionese de Bacon",
        description:
            "Descubra um novo nível de sabor com o Junior Ketchup ! Este ketchup artesanal combina o clássico molho de tomate com um toque sofisticado de defumado, oferecendo uma explosão de sabor que vai elevar suas refeições a um patamar gourmet. Feito com ingredientes selecionados e um processo de defumação especial, o Junior Ketchup Defumado proporciona uma textura suave e um gosto irresistível, perfeito para acompanhar hambúrgueres, batatas fritas, carnes grelhadas e muito mais. Experimente e transforme o simples em extraordinário com este ketchup inovador e cheio de personalidade!",
        barcode: "123456789",
        price: 2284,
        stock: 100,
        coverImage:
            "https://http2.mlstatic.com/D_NQ_NP_666694-MLU72647870627_112023-O.webp",
        buyPrice: 1000,
        isAvailable: true,
        localPickup: true,
        numberOfSales: 1004,
        numberOfViews: 1000,
        numberOfViewsInLastWeek: 1000,
        productType: "others",
        state: "available",
    },
    {
        name: "Junior Chipotle",
        description:
            "Descubra um novo nível de sabor com o Junior Ketchup ! Este ketchup artesanal combina o clássico molho de tomate com um toque sofisticado de defumado, oferecendo uma explosão de sabor que vai elevar suas refeições a um patamar gourmet. Feito com ingredientes selecionados e um processo de defumação especial, o Junior Ketchup Defumado proporciona uma textura suave e um gosto irresistível, perfeito para acompanhar hambúrgueres, batatas fritas, carnes grelhadas e muito mais. Experimente e transforme o simples em extraordinário com este ketchup inovador e cheio de personalidade!",
        barcode: "123456789",
        price: 2284,
        stock: 100,
        coverImage:
            "https://http2.mlstatic.com/D_NQ_NP_770885-MLB73177688727_112023-O.webp",
        buyPrice: 1000,
        isAvailable: true,
        localPickup: true,
        numberOfSales: 1005,
        numberOfViews: 1000,
        numberOfViewsInLastWeek: 1000,
        productType: "others",
        state: "available",
    },
];

async function seed() {
    await prisma.product.create({
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
    }),
        await prisma.product.create({
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
    await prisma.product.create({
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
    await prisma.product.create({
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
    await prisma.product.create({
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
    console.log("Seed completed");
}

seed().finally(async () => {
    await prisma.$disconnect();
});
