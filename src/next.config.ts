import webpack from "webpack";
import * as process from "process";

type NodeJsProcessEnv = Record<string, undefined | string>;

const filterClientSideEnv = (env: NodeJsProcessEnv) => {
  return Object.entries(env).reduce<NodeJsProcessEnv>((acc, [key, value]) => {
    if (key.startsWith("NEXT_PUBLIC_")) {
      acc[key] = value;
    }
    return acc;
  }, {});
};

const nextConfig = {
  i18n: {
    // providing the locales supported by your application
    locales: ["en-US", "es-ES", "it-IT"],
    //  default locale used when the non-locale paths are visited
    defaultLocale: "en-US",
  },
  images: {},
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  webpack: (config: any, { isServer }: any) => {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      }
    );
    if (isServer) {
      return config;
    }
    // make selected env vars avail on client
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env": JSON.stringify({ ...filterClientSideEnv(process.env) }),
      })
    );
    return config;
  },
};

export default nextConfig;
