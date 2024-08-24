import { Test, TestingModule } from "@nestjs/testing";
import { CepService } from "./cep.service";

describe("CepService", () => {
    let service: CepService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [CepService],
        }).compile();

        service = module.get<CepService>(CepService);
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });
});
