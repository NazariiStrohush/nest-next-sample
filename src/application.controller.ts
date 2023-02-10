import { Controller, Get, Injectable, Query, Render } from "@nestjs/common";

@Controller()
@Injectable()
export class ApplicationController {
  constructor() {}

  @Render("about")
  @Get("/about")
  public about() {
    return {};
  }

  @Render("home")
  @Get('/')
  public index(@Query("name") name?: string) {
    return { name };
  }
}
