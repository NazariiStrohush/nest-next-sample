import {
  ApolloClient,
  from,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getCookie } from "../helpers/cookies";
import * as process from "process";

const authLink = setContext((_, req) => {
  // get the authentication token from cookies if it exists
  const token = getCookie("token") || "";
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...req.headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_URL}/graphql`,
});

export const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: from([authLink, httpLink]),
    cache: new InMemoryCache(),
  });
};

let apolloClient: ApolloClient<NormalizedCacheObject>;

export const initializeApollo = (initialState?: NormalizedCacheObject) => {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Restore the cache using the data passed from
    // getStaticProps/getServerSideProps combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
};

export const extractApolloState = (
  apolloClient: ApolloClient<NormalizedCacheObject>
) => {
  return { initialApolloState: apolloClient.cache.extract() };
};
