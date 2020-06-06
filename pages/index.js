import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "../utils/apollo-client";
import { Carte } from "../layouts";
// import { ThemeProvider } from "@material-ui/core";

// import { scubaTheme } from "../theme";

const IndexPage = () => {
  return (
    <ApolloProvider client={client}>
      <Carte />
    </ApolloProvider>
  );
};

export default IndexPage;
