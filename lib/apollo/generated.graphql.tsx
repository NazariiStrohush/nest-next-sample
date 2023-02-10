import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}

export interface Query {
  __typename?: "Query";
  allAppIds: Array<Scalars["String"]>;
  app?: Maybe<Scalars["String"]>;
}

export interface QueryAppArgs {
  appId: Scalars["String"];
}

export type AllAppIdsQueryVariables = Exact<{ [key: string]: never }>;

export type AllAppIdsQuery = { __typename?: "Query"; allAppIds: Array<string> };

export type AppQueryVariables = Exact<{
  appId: Scalars["String"];
}>;

export type AppQuery = { __typename?: "Query"; app?: string | null };

export const AllAppIdsDocument = gql`
  query allAppIds {
    allAppIds
  }
`;

/**
 * __useAllAppIdsQuery__
 *
 * To run a query within a React component, call `useAllAppIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllAppIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllAppIdsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllAppIdsQuery(
  baseOptions?: Apollo.QueryHookOptions<AllAppIdsQuery, AllAppIdsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllAppIdsQuery, AllAppIdsQueryVariables>(
    AllAppIdsDocument,
    options
  );
}
export function useAllAppIdsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllAppIdsQuery,
    AllAppIdsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllAppIdsQuery, AllAppIdsQueryVariables>(
    AllAppIdsDocument,
    options
  );
}
export type AllAppIdsQueryHookResult = ReturnType<typeof useAllAppIdsQuery>;
export type AllAppIdsLazyQueryHookResult = ReturnType<
  typeof useAllAppIdsLazyQuery
>;
export type AllAppIdsQueryResult = Apollo.QueryResult<
  AllAppIdsQuery,
  AllAppIdsQueryVariables
>;
export const AppDocument = gql`
  query app($appId: String!) {
    app(appId: $appId)
  }
`;

/**
 * __useAppQuery__
 *
 * To run a query within a React component, call `useAppQuery` and pass it any options that fit your needs.
 * When your component renders, `useAppQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAppQuery({
 *   variables: {
 *      appId: // value for 'appId'
 *   },
 * });
 */
export function useAppQuery(
  baseOptions: Apollo.QueryHookOptions<AppQuery, AppQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AppQuery, AppQueryVariables>(AppDocument, options);
}
export function useAppLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AppQuery, AppQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AppQuery, AppQueryVariables>(AppDocument, options);
}
export type AppQueryHookResult = ReturnType<typeof useAppQuery>;
export type AppLazyQueryHookResult = ReturnType<typeof useAppLazyQuery>;
export type AppQueryResult = Apollo.QueryResult<AppQuery, AppQueryVariables>;
