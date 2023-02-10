import gql from "graphql-tag";

const APP = gql`
  query app($appId: String!) {
    app(appId: $appId)
  }
`;

export default APP;
