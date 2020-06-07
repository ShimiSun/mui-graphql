import React from "react";

import { Grid } from "@material-ui/core";

import { ScubaCard } from "../components";
import { getScuba } from "../utils/getScuba";

// https://codesandbox.io/s/qxzor?file=/demo.js:1054-1056
export const Carte = () => {
  const items = getScuba();
  console.log("items", items);

  return (
    <>
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
              />
            </Grid>
          ))}
      </Grid>
    </>
  );
};
