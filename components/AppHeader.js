import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
// import MenuIcon from "@material-ui/icons/Menu";
import { GiScubaTanks } from "react-icons/gi";

import styled from "@emotion/styled";

const StyledAppBar = styled(AppBar)`
  margin-bottom: 20px;
`;

// https://codesandbox.io/s/tyr6m?file=/demo.js:0-957
export const AppHeader = () => {
  return (
      <StyledAppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="scuba">
            <GiScubaTanks />
          </IconButton>
          <Typography style={{ fontFamily: "Comic Sans MS" }} variant="h6">
            ScubaHub
          </Typography>
        </Toolbar>
      </StyledAppBar>
  );
};
