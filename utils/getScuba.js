import React from "react";
import { useQuery } from "@apollo/react-hooks";

import GET_SCUBA from "../graphql/jobs.query";

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
