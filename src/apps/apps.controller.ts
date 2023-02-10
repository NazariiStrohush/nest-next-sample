import { Controller, Get, Injectable, Param, Render } from '@nestjs/common';

@Controller('/apps')
@Injectable()
export class AppsController {
  @Render('apps')
  @Get()
  public index() {
    return {};
  }

  @Render('apps/[appId]')
  @Get(':appId')
  public get(@Param('appId') appId: string) {
    return {};
  }
}
