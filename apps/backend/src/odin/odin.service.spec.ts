import { Test, TestingModule } from "@nestjs/testing";
import { OdinService } from "./odin.service";

describe("OdinService", () => {
    let service: OdinService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [OdinService],
        }).compile();

        service = module.get<OdinService>(OdinService);
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });
});
