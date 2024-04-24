import { Test, TestingModule } from "@nestjs/testing";
import { SchedulersService } from "./schedulers.service";

describe("SchedulersService", () => {
  let service: SchedulersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SchedulersService],
    }).compile();

    service = module.get<SchedulersService>(SchedulersService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
