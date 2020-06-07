import React from "react";

import { Grid, Paper } from "@material-ui/core";

import { getScubaById } from "../utils/getScuba";

// https://codesandbox.io/s/qxzor?file=/demo.js:1054-1056
export const ScubaInfo = ({ id }) => {

  const scuba = getScubaById(id);
  console.log("=====> scuba = ", scuba);
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <img src="" alt="Scuba image" />
        </Grid>
        <Grid item xs={6}>
          <Paper>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>xs=3</Paper>
        </Grid>
      </Grid>
    </>
  );
};
