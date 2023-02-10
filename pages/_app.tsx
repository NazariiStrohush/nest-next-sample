import { FC, ReactElement, ReactNode } from "react";
import { ApolloProvider } from "@apollo/client";
import { NextPage } from "next/types";
import type { AppProps } from "next/app";

import { useApollo } from "lib/hooks/useApollo";

const getDefaultLayout = (page: ReactElement) => <div>{page}</div>;

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppPropsWithLayout) => {
  const apolloClient = useApollo(pageProps.initialApolloState);
  const getLayout = Component.getLayout ?? getDefaultLayout;

  return (
    <ApolloProvider client={apolloClient}>
      {getLayout(<Component {...pageProps} />)}
    </ApolloProvider>
  );
};

export default MyApp;
