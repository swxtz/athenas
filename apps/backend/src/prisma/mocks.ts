import { ProductEntity } from "src/products/entity/product.entity";
import { PurchasedProductEntity } from "src/purchased-products/entities/purchased-product.entity";
import { UserEntity } from "src/users/entity/user.entity";
import { v4 as uuidv4 } from "uuid";

export class PrismaMocks {
    products(): ProductEntity[] {
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

        return products;
    }
    users(): UserEntity[] {
        const users: UserEntity[] = [
            new UserEntity({
                id: uuidv4(),
                name: "Jose",
                email: "jose@seedmock.com",
                password: "123456789",
                userType: "consumer",
                emailVerified: true,
                emailVerificatedAt: new Date("2024-09-10T01:11:28Z"),
            }),
        ];

        return users;
    }

    userPurchases(): PurchasedProductEntity[] {
        const purchases: PurchasedProductEntity[] = [
            new PurchasedProductEntity({}),
        ];

        return purchases;
    }
}
