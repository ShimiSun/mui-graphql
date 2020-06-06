import React from "react";

import Grid from "@material-ui/core/Grid";

import { App, ScubaCard } from "../components";

// https://codesandbox.io/s/qxzor?file=/demo.js:1054-1056
export const Carte = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs>
          <ScubaCard />
        </Grid>
        <Grid item xs>
          <ScubaCard />
        </Grid>
        <Grid item xs>
          <ScubaCard />
        </Grid>
        <Grid item xs>
          <ScubaCard />
        </Grid>
      </Grid>
      <App />
    </>
  );
};
