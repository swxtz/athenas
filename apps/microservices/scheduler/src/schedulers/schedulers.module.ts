import { Module } from "@nestjs/common";
import { SchedulersService } from "./schedulers.service";
import { SchedulersController } from "./schedulers.controller";

@Module({
  controllers: [SchedulersController],
  providers: [SchedulersService],
})
export class SchedulersModule {}
