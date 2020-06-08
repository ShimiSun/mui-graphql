import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { GET_SCUBA, GET_SCUBA_BY_ID } from "../graphql/jobs.query";

export const LOADING = "loading";
export const ERRORS = "errors";

const manageStates = (errors, loading) => {
  // console.log(data);
  // console.log(errors);
  // console.log(loading);
  if (errors) return ERRORS;
  if (loading) return LOADING;
  return "DATA";
  // return ERRORS;
};

export const getScuba = () => {
  const { errors, loading, data } = useQuery(GET_SCUBA);
  const clientState = manageStates(errors, loading);
  return clientState == "DATA" ? data.scubaCollection.items : clientState;
};

export const getScubaById = (id) => {
  const { errors, loading, data } = useQuery(GET_SCUBA_BY_ID(id));

  const clientState = manageStates(errors, loading);
  return clientState == "DATA" ? data.scuba : clientState;
};
