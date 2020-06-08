import React from "react";

import { Grid } from "@material-ui/core";

import { Error, Footer, Loading, ScubaCard, SubHeader } from "../components";
import { getScuba, ERRORS, LOADING } from "../utils/queries";

// https://codesandbox.io/s/qxzor?file=/demo.js:1054-1056
export const Carte = () => {
  const items = getScuba();

  return (
    <>
      <SubHeader />
      {items === ERRORS && <Error />}
      {items === LOADING && <Loading />}
      <Grid container spacing={3}>
        {items &&
          Array.isArray(items) &&
          items.map((item) => (
            <Grid item xs key={item.name}>
              <ScubaCard
                id={item.sys.id}
                name={item.name}
                state={item.state}
                description={item.description}
                imageUrl={item.imageUrl}
                gravatars={item.gravatars}
                visited={item.visited}
              />
            </Grid>
          ))}
      </Grid>
      <Footer />
    </>
  );
};
