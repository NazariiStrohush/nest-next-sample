import { Module } from "@nestjs/common";
import { AppsService } from "./apps.service";
import { AppsController } from "./apps.controller";
import { AppsResolver } from "./apps.resolver";

@Module({
  imports: [],
  controllers: [AppsController],
  providers: [AppsService, AppsResolver],
  exports: [AppsService],
})
export class AppsModule {}
