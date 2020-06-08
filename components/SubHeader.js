import React from 'react';
import styled from '@emotion/styled';

import { AppBar, Typography } from '@material-ui/core';
import { Waves } from './Waves';

const StyledAppBar = styled(AppBar)`
  margin-bottom: 25px;
`;

// https://css-tricks.com/how-to-stack-elements-in-css/
// https://getwaves.io/
export const SubHeader = () => {
  return (
    <StyledAppBar position="static">
      <Waves />
      <div style={{ padding: '25px' }}>
        <Typography style={{ fontFamily: 'Comic Sans MS', fontSize: '24px' }}>
          Beta access to the new scuba diving trends at ScubaHub.
        </Typography>
        <Typography style={{ fontFamily: 'Comic Sans MS', fontSize: '24px' }}>
          Find the best places to dive, and connect with divers worldwide.
        </Typography>
      </div>
    </StyledAppBar>
  );
};
