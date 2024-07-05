import { PrismaClient } from "@prisma/client";
import { ProductEntity } from "src/products/entity/product.entity";

const prisma = new PrismaClient();

const products: ProductEntity[] = [
    {
        name: "Pão para hamburguer",
        description: "Pão para hamburguer",
        barcode: "123456789",
        price: 1425,
        stock: 100,
        image: "https://megag.com.br/v21/wp-content/uploads/2024/01/15060-PAO-DE-HAMBURGUER-TRADICIONAL-PITA-BREAD-48X80G.png",
        buyPrice: 1000,
    },
];

async function seed() {
    console.log("teste");

    await prisma.product.create({
        data: {
            name: products[0].name,
            description: products[0].description,
            barcode: products[0].barcode,
            price: products[0].price,
            stock: products[0].stock,
            image: products[0].image,
            buyPrice: products[0].buyPrice,
        },
    }),
        console.log("Seed completed");
}

seed().finally(async () => {
    await prisma.$disconnect();
});
