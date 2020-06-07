import React from "react";
import styled from "@emotion/styled";
import { Card, CardMedia, Grid, Typography } from "@material-ui/core";

import { Gravatar } from "../components";
import MapContainer from "../components/Map";

import { getScubaById } from "../utils/getScuba";
import { flagsMap } from "../utils/flags";

export const StyledCardMedia = styled(CardMedia)`
  height: 520px;
`;

// https://codesandbox.io/s/qxzor?file=/demo.js:1054-1056
export const ScubaInfo = ({ id }) => {
  const scubaInfo = getScubaById(id);
  console.log("=====> scuba = ", scubaInfo);

  return (
    <>
      {scubaInfo && typeof scubaInfo !== "string" && (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <StyledCardMedia image={scubaInfo.imageUrl} />
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Typography style={{ fontFamily: "Comic Sans MS" }} variant="h1">
              {flagsMap[scubaInfo.state]}
            </Typography>
            <Typography style={{ fontFamily: "Comic Sans MS" }} variant="h2">
              {scubaInfo.name}
            </Typography>
            <Typography style={{ fontFamily: "Comic Sans MS" }} variant="h3">
              {scubaInfo.state}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Gravatar gravatars={scubaInfo.gravatars} max={4} />
          </Grid>
          <Grid item xs={6} />
          <Grid item xs={9}>
            <Typography component="p">{scubaInfo.description}</Typography>
          </Grid>
          <Grid item xs={12}>
            <MapContainer />
          </Grid>
        </Grid>
      )}
    </>
  );
};
