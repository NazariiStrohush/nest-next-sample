import Next from "next";
import * as path from "path";
import * as process from "process";
import { forwardRef, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { RenderModule } from "nest-next";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { ServeStaticModule } from "@nestjs/serve-static";

import { AppsModule } from "./apps/apps.module";
import { ApplicationController } from "./application.controller";

import nextConfig from "./next.config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: path.join(__dirname, "schema.gql"),
    }),
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, "..", process.env.STORAGE_PATH as string),
    }),
    RenderModule.forRootAsync(
      Next({
        dev: process.env.NODE_ENV !== "production",
        conf: nextConfig,
      })
    ),
    forwardRef(() => AppsModule),
  ],
  controllers: [ApplicationController],
  providers: [],
})
export class ApplicationModule {}
