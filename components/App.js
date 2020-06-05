import React from "react";
import { useQuery } from "@apollo/react-hooks";

import GET_SCUBA from "../graphql/jobs.query";

export const App = () => {
  const { errors, loading, data } = useQuery(GET_SCUBA);
  console.log(data);
  console.log(errors);
  console.log(loading);
  return errors
    ? "Error!"
    : loading
    ? "Loading..."
    : data.scubaCollection.items.map(({ name, state, visited }) => (
        <div key={name}>
          <h1>{name}</h1>
          <p>{state}</p>
          <p>{visited}</p>
        </div>
      ));
};
