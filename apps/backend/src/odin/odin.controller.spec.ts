import { Test, TestingModule } from "@nestjs/testing";
import { OdinController } from "./odin.controller";
import { OdinService } from "./odin.service";
import request from "supertest";
import { createNestAppInstance } from "test/test.helpers";
import { RecommendationEntity } from "./entities/recommendation.entity";
import { v4 as uuid } from "uuid";

const mockProductId = uuid();

const mockRecommendationProduct = new RecommendationEntity({
    id: uuid(),
    productId: mockProductId,
    score: 0.5,
    weeklyRecommendation: 1,
    dailyRecommendation: 1,
    views: 1,
    dailyViews: 1,
    weeklyViews: 1,
    sales: 1,
    dailySales: 1,
    weeklySales: 1,
    likes: 1,
    dailyLikes: 1,
    weeklyLikes: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
});

describe("OdinController", () => {
    let controller: OdinController;
    let app;

    beforeAll(async () => {
        app = await createNestAppInstance();
    });

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [OdinController],
            providers: [
                {
                    provide: OdinService,
                    useValue: {
                        getScoreById: jest
                            .fn()
                            .mockResolvedValue(mockRecommendationProduct),
                    },
                },
            ],
        }).compile();

        controller = module.get<OdinController>(OdinController);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });

    describe("getScoreById", () => {
        it("shouldn't be possible to get a score from a valid uuid", async () => {
            const res = await request(app.getHttpServer()).get(
                "/odin/get-score-by-id/123",
            );

            expect(res.statusCode).toBe(400);
            expect(res.body.message[0]).toBe("deve ser um UUID");
        });

        it("shouldn't be possible to return a score without an existing id", async () => {
            const res = await request(app.getHttpServer()).get(
                "/odin/get-score-by-id/6f240daf-61ab-43fb-bc00-ac9defff6a57",
            );

            expect(res.statusCode).toBe(404);
            expect(res.body.message).toBe("Produto não encontrado");
        });

        it("should be possible to return a score from a valid uuid", async () => {
            const productId = await request(app.getHttpServer()).get(
                "/products/get-best-sellers?limit=1",
            );

            const res = await request(app.getHttpServer()).get(
                `/odin/get-score-by-id/${productId.body.data[0].id}`,
            );

            expect(res.statusCode).toBe(200);
            expect(res.body.score).toEqual(500);
        });
    });

    describe("getScoreBySlug", () => {
        it("shouldn't be possible to get a score from a valid slug", async () => {
            const res = await request(app.getHttpServer()).get(
                "/odin/get-score-by-slug/123",
            );

            expect(res.statusCode).toBe(400);
            expect(res.body.message[0]).toBe(
                "Slug deve ser em letra minúscula, sem números e espaços",
            );
        });

        it("shouldn't be possible to return a score without an existing slug", async () => {
            const res = await request(app.getHttpServer()).get(
                "/odin/get-score-by-slug/invalid-slug",
            );

            expect(res.statusCode).toBe(404);
            expect(res.body.message).toBe("Produto não encontrado");
        });

        it("should be possible to return a score from a valid slug", async () => {
            const productId = await request(app.getHttpServer()).get(
                "/products/get-best-sellers?limit=1",
            );

            const res = await request(app.getHttpServer()).get(
                `/odin/get-score-by-slug/${productId.body.data[0].slug}`,
            );

            expect(res.statusCode).toBe(200);
            expect(res.body.score).toEqual(500);
        });
    });

    describe("searchProduct", () => {
        it("should return products based on user search", async () => {
            const SearchReturn = await request(app.getHttpServer()).get(
                "/odin/search-products?search=ketchup",
            );
            expect(SearchReturn.body).toBeInstanceOf(Object);
            expect(SearchReturn.body.data.length).toBeGreaterThan(0);
            expect(SearchReturn.body.data).toBeInstanceOf(Array);
            expect(SearchReturn.body.message).toBe(
                "Produtos encontrados com base na sua pesquisa:",
            );
        });
        it("should return products based on the proximity of the user's search", async () => {
            const SearchReturn = await request(app.getHttpServer()).get(
                "/odin/search-products?search=ket",
            );
            expect(SearchReturn.body).toBeInstanceOf(Object);
            expect(SearchReturn.body.data.length).toBeGreaterThan(0);
            expect(SearchReturn.body.data).toBeInstanceOf(Array);
            expect(SearchReturn.body.data[0].name).toMatch(/Ketchup/i);
            expect(SearchReturn.body.message).toBe(
                "Produtos encontrados com base na sua pesquisa:",
            );
        });

        it("should return products sorted by numberOfSales in descending order", async () => {
            const SearchReturn = await request(app.getHttpServer()).get(
                "/odin/search-products?search=ketchup",
            );
            expect(SearchReturn.body).toBeInstanceOf(Object);
            expect(SearchReturn.body.data.length).toBeGreaterThan(0);
            expect(SearchReturn.body.data).toBeInstanceOf(Array);

            const products = SearchReturn.body.data;
            const sortedProducts = [...products].sort(
                (a, b) => b.numberOfSales - a.numberOfSales,
            );
            expect(products).toEqual(sortedProducts);
        });
    });
});
