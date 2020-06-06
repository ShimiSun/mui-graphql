import styled from "@emotion/styled";
import { Card, CardMedia } from "@material-ui/core";

// https://codesandbox.io/s/0o7zynrjqw?file=/EmotionButton.js
export const StyledCard = styled(Card)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  color: white;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
  min-width: 300px;
`;

export const StyledCardMedia = styled(CardMedia)`
  height: 200px;
`;
