import React, { Suspense } from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "../utils/apollo-client";
import { App } from "../components/App";

const IndexPage = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <App />
      </div>
    </ApolloProvider>
  );
};

export default IndexPage;
