import gql from "graphql-tag";

export const GET_SCUBA = gql`
  {
    scubaCollection {
      items {
        sys {
          id
        }
        name
        state
        visited
        description
        imageUrl
        gravatars
      }
    }
  }
`;

export const GET_SCUBA_BY_ID = (id) => {
  return gql`
  {
    scuba(id: "${id}"){
      name
      state
      visited
      description
      imageUrl
      gravatars
    }
  }
  `;
};
