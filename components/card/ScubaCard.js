import React from "react";
import { Avatar, CardContent, CardHeader, Typography } from "@material-ui/core";
// import { useTheme } from "@material-ui/core/styles";

import { StyledCard, StyledCardMedia } from "./StyledCard";

export const ScubaCard = ({ image, avatar, name, state, description }) => {
  return (
    <StyledCard>
      <StyledCardMedia image="https://images.unsplash.com/photo-1537399959189-32f69acfbe3b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=354addb80a3822019442841c011e7d5f&auto=format&fit=crop&w=2134&q=80" />
      <CardHeader
        avatar={<Avatar aria-label="Recipe">R</Avatar>}
        title={name}
        subheader={state}
      />
      <CardContent>
        <Typography component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
    </StyledCard>
  );
};
