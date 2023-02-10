import { Resolver, Query, Args } from "@nestjs/graphql";

import { AppsService } from "./apps.service";

@Resolver(() => String)
export class AppsResolver {
  constructor(private readonly appService: AppsService) {}

  @Query(() => [String])
  async allAppIds() {
    return this.appService.findAll();
  }

  @Query(() => String, { nullable: true })
  async app(
    @Args("appId", { type: () => String })
    appId: string
  ) {
    const res = await this.appService.findUnique(appId);
    return res;
  }
}
