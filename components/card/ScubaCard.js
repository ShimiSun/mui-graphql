import React from "react";
import Link from "next/link";
import {
  CardContent,
  CardHeader,
  CardActions,
  Collapse,
  IconButton,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import InfoIcon from "@material-ui/icons/Info";

import clsx from "clsx";

import { StyledCard, StyledCardMedia } from "./StyledCard";
import { Gravatar } from "../Gravatar";

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
    color: "white",
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export const ScubaCard = ({
  id,
  imageUrl,
  gravatars,
  name,
  state,
  description,
  visited,
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => setExpanded(!expanded);
  const favoriteIconColor = visited ? { fill: "salmon" } : undefined;
  return (
    <StyledCard>
      <StyledCardMedia image={imageUrl} />
      <CardHeader
        avatar={<Gravatar gravatars={gravatars} max={2} />}
        title={name}
        subheader={state}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon style={favoriteIconColor} />
        </IconButton>
        <IconButton aria-label="more info">
          <Link key="info" href="/[id]" as={id}>
            <InfoIcon />
          </Link>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
          <Typography component="p">Learn More</Typography>
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography component="p">{description}</Typography>
        </CardContent>
      </Collapse>
    </StyledCard>
  );
};
