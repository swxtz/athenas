import { Test, TestingModule } from "@nestjs/testing";
import { CepController } from "./cep.controller";
import { CepService } from "./cep.service";

describe("CepController", () => {
    let controller: CepController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [CepController],
            providers: [CepService],
        }).compile();

        controller = module.get<CepController>(CepController);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });
});
