import { Injectable } from "@nestjs/common";

const apps = ["app1", "app2", "app3"];

@Injectable()
export class AppsService {
  constructor() {}
  findAll() {
    return apps;
  }

  async findUnique(appId: string) {
    return apps.find((app) => app === appId);
  }
}
