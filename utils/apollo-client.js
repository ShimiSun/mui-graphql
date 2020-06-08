import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

// Linking the GraphQL endpoint to graphql contentful config
const GRAPHQL_URL =
  'https://graphql.contentful.com/content/v1/spaces/4evuhjsl0dea/environments/master?access_token=SfKVmtM3ktZDQETMoTNjLmpuwRhTEwxn5y3yg7M4vX8';
//   "https://graphql.contentful.com/content/v1/spaces/d6crv8bywafu/explore?access_token=8ZRsfDyfbL0EmhcAfBU9kHXwSeLoExZQ6ut2_qyuIOg";
//   "https://api.spacex.land/graphql";

const link = new HttpLink({
  uri: GRAPHQL_URL,
});

export const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});
