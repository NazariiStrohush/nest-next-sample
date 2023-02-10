import React from "react";
import { GetStaticPaths, NextPage, NextPageContext } from "next";

import { extractApolloState, initializeApollo } from "lib/apollo";

import APP from "lib/queries/app";
import ALL_APP_IDS from "../../../lib/queries/allAppIds";
import {
  AllAppIdsQuery,
  AppQuery,
  AppQueryVariables,
} from "../../../lib/apollo/generated.graphql";

interface Props {
  appId: string;
  initialApolloState: any;
}

const App: NextPage<Props> = ({ appId }) => {
  return <div>{appId}</div>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query<AllAppIdsQuery>({
    query: ALL_APP_IDS,
  });
  const paths = data.allAppIds.map((appId) => appId);
  console.log("getStaticPaths", paths);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (
  context: NextPageContext & { params: Record<string, string> }
) => {
  const { res, query, params } = context;
  const appId = params.appId || (query.appId as string);

  const apolloClient = initializeApollo();
  // Get app info
  await apolloClient.query<AppQuery, AppQueryVariables>({
    query: APP,
    variables: {
      appId,
    },
  });

  if (res) {
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=10, stale-while-revalidate=59"
    );
  }

  const props = { ...extractApolloState(apolloClient), appId };
  return { props };
};

export default App;
