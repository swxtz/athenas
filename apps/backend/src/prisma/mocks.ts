import { ProductEntity } from "src/products/entity/product.entity";
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
                type: "Molhos",
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
                type: "Molhos",
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
                type: "Molhos",
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
                type: "Molhos",
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
                type: "Molhos",
            },

            // Batatas
            {
                name: "Batata Palito Pré-frita Congelada 9mm Bem Brasil 2Kg",
                description:
                    "Batata Palito Pré-frita Congelada 9mm Bem Brasil 2Kg",
                barcode: "123456789",
                price: 2674,
                buyPrice: 1000,
                stock: 100,
                coverImage:
                    "https://www.riosoftice.com.br/wp-content/uploads/2021/08/Batata-Palito-Pre-frita-Congelada-9mm-Bem-Brasil-510x510.jpg",
                isAvailable: true,
                localPickup: true,
                numberOfSales: 1000,
                numberOfViews: 1000,
                numberOfViewsInLastWeek: 1000,
                productType: "others",
                state: "available",
                type: "Batatas",
            },

            {
                name: "Batata Palito Pré-frita Congelada 7mm Bem Brasil 2Kg",
                description:
                    "Batata Palito Pré-frita Congelada 7mm Bem Brasil 2Kg",
                barcode: "123456789",
                price: 3154,
                buyPrice: 1000,
                stock: 100,
                coverImage:
                    "https://www.riosoftice.com.br/wp-content/uploads/2021/08/Batata-Palito-Pre-frita-Congelada-7mm-Bem-Brasil-510x510.jpg",
                isAvailable: true,
                localPickup: true,
                numberOfSales: 1000,
                numberOfViews: 1000,
                numberOfViewsInLastWeek: 1000,
                productType: "others",
                state: "available",
                type: "Batatas",
            },

            {
                name: "Lamb Weston® Corte Fino 7 mm",
                description: "Lamb Weston® Corte Fino 7 mm",
                barcode: "123456789",
                price: 3154,
                buyPrice: 1000,
                stock: 100,
                coverImage:
                    "https://www.riosoftice.com.br/wp-content/uploads/2022/05/Batata-7mm-LambWeston-Pacote.png",
                isAvailable: true,
                localPickup: true,
                numberOfSales: 1000,
                numberOfViews: 1000,
                numberOfViewsInLastWeek: 1000,
                productType: "others",
                state: "available",
                type: "Batatas",
            },

            {
                name: "Batata Congelada Lamb Weston Tradicional 9MM 2,5Kg",
                description:
                    "Batata Congelada Lamb Weston Tradicional 9MM 2,5Kg",
                barcode: "123456789",
                price: 3154,
                buyPrice: 1000,
                stock: 100,
                coverImage:
                    "https://cdn.shopify.com/s/files/1/0579/9742/6861/files/image-removebg-preview_18_0dc0c323-1b2c-45a2-888a-59e953e595f3.png?v=1685130398",
                isAvailable: true,
                localPickup: true,
                numberOfSales: 1000,
                numberOfViews: 1000,
                numberOfViewsInLastWeek: 1000,
                productType: "others",
                state: "available",
                type: "Batatas",
            },

            {
                name: "Stealth Fries®",
                description: "Stealth Fries®",
                barcode: "123456789",
                price: 3154,
                buyPrice: 1000,
                stock: 100,
                coverImage:
                    "https://lambweston.scene7.com/is/image/lambweston/Stealth_Fries_9mm_Spanish_Box_LowRes?$ProductImage$",
                isAvailable: true,
                localPickup: true,
                numberOfSales: 1000,
                numberOfViews: 1000,
                numberOfViewsInLastWeek: 1000,
                productType: "others",
                state: "available",
                type: "Batatas",
            },

            // Hambugueres
            {
                name: "Hambúrguer Tradicional 56g – Caixa com 36 Unidades",
                description:
                    "Hambúrguer Tradicional 56g – Caixa com 36 Unidades",
                barcode: "123456789",
                price: 4525,
                buyPrice: 1000,
                stock: 100,
                coverImage:
                    "https://brasa.com.br/wp-content/uploads/2022/05/caixa-branca-tradicional-56g-768x576.png",
                isAvailable: true,
                localPickup: true,
                numberOfSales: 1000,
                numberOfViews: 1000,
                numberOfViewsInLastWeek: 1000,
                productType: "others",
                state: "available",
                type: "Hambugueres",
            },

            {
                name: "Hambúrguer Sabor Picanha 56g – Caixa com 36 Unidades",
                description:
                    "Hambúrguer Sabor Picanha 56g – Caixa com 36 Unidades",
                barcode: "123456789",
                price: 4525,
                buyPrice: 1000,
                stock: 100,
                coverImage:
                    "https://brasa.com.br/wp-content/uploads/2022/05/caixa-branca-picanha-56g-768x576.png",
                isAvailable: true,
                localPickup: true,
                numberOfSales: 1000,
                numberOfViews: 1000,
                numberOfViewsInLastWeek: 1000,
                productType: "others",
                state: "available",
                type: "Hambugueres",
            },

            {
                name: "Hambúrguer Sabor Picanha 90g – Caixa com 36 Unidades",
                description:
                    "https://brasa.com.br/wp-content/uploads/2022/05/caixa-branca-picanha-90g-768x576.png",
                barcode: "123456789",
                price: 4525,
                buyPrice: 1000,
                stock: 100,
                coverImage:
                    "https://brasa.com.br/wp-content/uploads/2022/05/caixa-branca-picanha-90g-768x576.png",
                isAvailable: true,
                localPickup: true,
                numberOfSales: 1000,
                numberOfViews: 1000,
                numberOfViewsInLastWeek: 1000,
                productType: "others",
                state: "available",
                type: "Hambugueres",
            },

            {
                name: "Hambúrguer Tradicional 90g – Caixa com 36 Unidades",
                description:
                    "Hambúrguer Tradicional 90g – Caixa com 36 Unidades",
                barcode: "123456789",
                price: 4525,
                buyPrice: 1000,
                stock: 100,
                coverImage:
                    "https://brasa.com.br/wp-content/uploads/2022/05/caixa-branca-tradicional-90g-768x576.png",
                isAvailable: true,
                localPickup: true,
                numberOfSales: 1000,
                numberOfViews: 1000,
                numberOfViewsInLastWeek: 1000,
                productType: "others",
                state: "available",
                type: "Hambugueres",
            },

            {
                name: "Hambúrguer Sabor Picanha 120g – Caixa com 30 Unidades",
                description:
                    "Hambúrguer Sabor Picanha 120g – Caixa com 30 Unidades",
                barcode: "123456789",
                price: 4525,
                buyPrice: 1000,
                stock: 100,
                coverImage:
                    "https://brasa.com.br/wp-content/uploads/2022/05/caixa-branca-picanha-120g-768x576.png",
                isAvailable: true,
                localPickup: true,
                numberOfSales: 1000,
                numberOfViews: 1000,
                numberOfViewsInLastWeek: 1000,
                productType: "others",
                state: "available",
                type: "Hambugueres",
            },

            // Pães

            {
                name: "Pão de Hambúrguer Mônaco G CT BIMBO QSR 12x73g",
                description: "Pão de Hambúrguer Mônaco G CT BIMBO QSR 12x73g",
                barcode: "123456789",
                price: 3525,
                buyPrice: 1000,
                stock: 100,
                coverImage:
                    "https://www.riosoftice.com.br/wp-content/uploads/2021/08/Pao-de-Hamburguer-Monaco-G-CT-BIMBO-QSR-510x510.jpg",
                isAvailable: true,
                localPickup: true,
                numberOfSales: 1000,
                numberOfViews: 1000,
                numberOfViewsInLastWeek: 1000,
                productType: "others",
                state: "available",
                type: "Pães",
            },

            {
                name: "Pão de Hambúrguer Brioche MAX BIMBO QSR 12x95g",
                description: "Pão de Hambúrguer Brioche MAX BIMBO QSR 12x95g",
                barcode: "123456789",
                price: 5625,
                buyPrice: 1000,
                stock: 100,
                coverImage:
                    "https://www.riosoftice.com.br/wp-content/uploads/2021/03/Pao-de-Hamburguer-Brioche-MAX-BIMBO-QSR-510x510.jpg",
                isAvailable: true,
                localPickup: true,
                numberOfSales: 1000,
                numberOfViews: 1000,
                numberOfViewsInLastWeek: 1000,
                productType: "others",
                state: "available",
                type: "Pães",
            },

            {
                name: "Pão de Hambúrguer Brioche 4″ CT BIMBO QSR 15x64g",
                description: "Pão de Hambúrguer Brioche 4″ CT BIMBO QSR 15x64g",
                barcode: "123456789",
                price: 2325,
                buyPrice: 1000,
                stock: 100,
                coverImage:
                    "https://www.riosoftice.com.br/wp-content/uploads/2017/03/Pao-de-Hamburguer-Brioche-4-CT-BIMBO-QSR-510x510.jpg",
                isAvailable: true,
                localPickup: true,
                numberOfSales: 1000,
                numberOfViews: 1000,
                numberOfViewsInLastWeek: 1000,
                productType: "others",
                state: "available",
                type: "Pães",
            },

            {
                name: "Pão de Hambúrguer Supremo G CD BIMBO QSR 15x73g",
                description: "Pão de Hambúrguer Supremo G CD BIMBO QSR 15x73g",
                barcode: "123456789",
                price: 3525,
                buyPrice: 1000,
                stock: 100,
                coverImage:
                    "https://www.riosoftice.com.br/wp-content/uploads/2017/03/Pao-de-Hamburguer-Supremo-G-CD-BIMBO-QSR-510x510.jpg",
                isAvailable: true,
                localPickup: true,
                numberOfSales: 1000,
                numberOfViews: 1000,
                numberOfViewsInLastWeek: 1000,
                productType: "others",
                state: "available",
                type: "Pães",
            },

            {
                name: "Pão de Hambúrguer Riviera G CT BIMBO QSR 15x50g",
                description: "Pão de Hambúrguer Riviera G CT BIMBO QSR 15x50g",
                barcode: "123456789",
                price: 3525,
                buyPrice: 1000,
                stock: 100,
                coverImage:
                    "https://www.riosoftice.com.br/wp-content/uploads/2021/03/Pao-de-Hamburguer-Riviera-G-CT-BIMBO-QSR-510x510.jpg",
                isAvailable: true,
                localPickup: true,
                numberOfSales: 1000,
                numberOfViews: 1000,
                numberOfViewsInLastWeek: 1000,
                productType: "others",
                state: "available",
                type: "Pães",
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
}
