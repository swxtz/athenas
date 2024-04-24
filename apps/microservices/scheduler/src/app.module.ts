import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { SchedulersModule } from "./schedulers/schedulers.module";

@Module({
  imports: [SchedulersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
