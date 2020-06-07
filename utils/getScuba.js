import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { GET_SCUBA, GET_SCUBA_BY_ID } from "../graphql/jobs.query";

// add useMemo()
export const getScuba = () => {
  const { errors, loading, data } = useQuery(GET_SCUBA);
  console.log(data);
  console.log(errors);
  console.log(loading);
  return errors
    ? "Error!"
    : loading
    ? "Loading..."
    : data
    ? data.scubaCollection.items
    : console.log("data", data);
};

export const getScubaById = (id) => {
  const { errors, loading, data } = useQuery(GET_SCUBA_BY_ID(id));
  console.log(data);
  console.log(errors);
  console.log(loading);
  return errors
    ? "Error!"
    : loading
    ? "Loading..."
    : data
    ? data.scuba
    : console.log("data", data);
};
