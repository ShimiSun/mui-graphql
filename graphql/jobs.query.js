import gql from "graphql-tag";

const GET_SCUBA = gql`
  {
    scubaCollection {
      items {
        name
        state
        users
        visited
      }
    }
  }
`;

export default GET_SCUBA;
