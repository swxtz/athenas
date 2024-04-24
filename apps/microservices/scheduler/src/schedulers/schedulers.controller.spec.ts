import { Test, TestingModule } from "@nestjs/testing";
import { SchedulersController } from "./schedulers.controller";
import { SchedulersService } from "./schedulers.service";

describe("SchedulersController", () => {
  let controller: SchedulersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SchedulersController],
      providers: [SchedulersService],
    }).compile();

    controller = module.get<SchedulersController>(SchedulersController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
