import { Test, TestingModule } from "@nestjs/testing";
import { SearchController } from "./search.controller";
import { SearchService } from "./search.service";
import { PrismaService } from "src/prisma/prisma.service";
import { createNestAppInstance } from "test/test.helpers";
import request from "supertest";

describe("SearchController", () => {
    let controller: SearchController;
    let service: SearchService;
    let app;

    beforeAll(async () => {
        app = await createNestAppInstance();
        ("");
    });

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [SearchController],
            providers: [
                {
                    provide: SearchService,
                    useValue: {
                        getSearch: jest.fn(),
                    },
                },
                PrismaService,
            ],
        }).compile();

        controller = module.get<SearchController>(SearchController);
        service = module.get<SearchService>(SearchService);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
        expect(service).toBeDefined();
    });

    describe("getSearch", () => {
        it("should return products based on user search", async () => {
            const SearchReturn = await request(app.getHttpServer()).get(
                "/search?search=ketchup",
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
                "/search?search=ket",
            );
            expect(SearchReturn.body).toBeInstanceOf(Object);
            expect(SearchReturn.body.data.length).toBeGreaterThan(0);
            expect(SearchReturn.body.data).toBeInstanceOf(Array);
            expect(SearchReturn.body.data[0].name).toMatch(/Ketchup/i);
            expect(SearchReturn.body.message).toBe(
                "Produtos encontrados com base na sua pesquisa:",
            );
        });
    });
});
