import styled from '@emotion/styled';
import { Card, CardMedia } from '@material-ui/core';

// https://codesandbox.io/s/0o7zynrjqw?file=/EmotionButton.js
// https://cssgradient.io/
// background: linear-gradient(70deg, #1cb5e0 0%, #000851 100%);
export const StyledCard = styled(Card)`
  background: linear-gradient(70deg, #1cb5e0 0%, #000851 100%);
  color: white;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
  min-width: 320px;
`;

export const StyledCardMedia = styled(CardMedia)`
  height: 320px;
`;
