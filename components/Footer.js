import React from 'react';
import styled from '@emotion/styled';
import { Grid, Typography } from '@material-ui/core';

const StyledBox = styled.div`
  background: #000851;
  margin-top: 45px;
  max-height: 300px;
`;

export const Footer = () => {
  return (
    <StyledBox>
      <Typography style={{ padding: '10px', color: 'white' }} variant="body2">
        @copyright shimi 2020
      </Typography>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={8}>
          <Grid item>
            <img
              src="https://cdn.emojidex.com/emoji/seal/scuba_diver.png"
              emoji-code="scuba_diver"
              alt="scuba diver"
            />
          </Grid>
          <Grid item>
            <img
              src="https://www.animatedimages.org/data/media/194/animated-fish-image-0241.gif"
              border="0"
              alt="animated-fish-image-0241"
            />
          </Grid>
        </Grid>
      </Grid>
    </StyledBox>
  );
};
