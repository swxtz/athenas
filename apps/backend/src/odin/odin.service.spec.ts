import { Test, TestingModule } from "@nestjs/testing";
import { OdinService } from "./odin.service";
import { PrismaService } from "src/prisma/prisma.service";
import { createId } from "@paralleldrive/cuid2";
import { RecommendationEntity } from "./entities/recommendation.entity";
import { ProductEntity } from "src/products/entity/product.entity";

const productMockId = createId();

const recommedationTable: RecommendationEntity = new RecommendationEntity({
    id: "1",
    productId: "1",
    product: new ProductEntity({
        id: productMockId,
        name: "batata",
        description: "batata gostosa",
        barcode: "123456789",
        images: ["www.google.com"],
        coverImage: "www.google.com",
        isAvailable: true,
        rating: "5",
        productType: "others",
        state: "",
        localPickup: true,
        numberOfSales: 2,
        numberOfViews: 10,
        numberOfViewsInLastWeek: 10,
        buyPrice: 5,
        price: 2,
        stock: 10000,

        createdAt: new Date("2024-08-07T22:58:31.874Z"),
        updatedAt: new Date("2024-08-07T22:58:31.874Z"),
    }),
    score: 0.5,
    weekRecommendation: 0.3,
    views: 100,
    weekViews: 50,
    sales: 10,
    weekSales: 5,
});

describe("OdinService", () => {
    let service: OdinService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                OdinService,
                PrismaService,
                {
                    provide: PrismaService,
                    useValue: {
                        recommendation: {
                            findUnique: jest
                                .fn()
                                .mockResolvedValue(recommedationTable),
                            update: jest.fn(),
                        },
                    },
                },
            ],
        }).compile();

        service = module.get<OdinService>(OdinService);
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });
});
