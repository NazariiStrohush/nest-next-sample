import gql from 'graphql-tag';

const ALL_APP_IDS = gql`
  query allAppIds {
    allAppIds
  }
`;

export default ALL_APP_IDS;
