import React from "react";
import Link from "next/link";
import {
  Avatar,
  CardContent,
  CardHeader,
  CardActions,
  Collapse,
  IconButton,
  Typography,
} from "@material-ui/core";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import { makeStyles } from "@material-ui/core/styles";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import InfoIcon from "@material-ui/icons/Info";

import clsx from "clsx";

import { StyledCard, StyledCardMedia } from "./StyledCard";

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

const AvatarGroupContainer = ({ gravatars }) => {
  return (
    <AvatarGroup max={2}>
      {gravatars.data.map((user) => (
        <Avatar alt="User" src={user} key={user} />
      ))}
    </AvatarGroup>
  );
};

const getAvatar = (gravatars) => {
  if (gravatars && gravatars.data.length > 1) {
    return <AvatarGroupContainer gravatars={gravatars} />;
  }
  return <Avatar aria-label="User" src={gravatars.data[0]} />;
};

export const ScubaCard = ({
  id,
  imageUrl,
  gravatars,
  name,
  state,
  description,
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => setExpanded(!expanded);

  return (
    <StyledCard>
      <StyledCardMedia image={imageUrl} />
      <CardHeader
        avatar={gravatars && gravatars.data && getAvatar(gravatars)}
        title={name}
        subheader={state}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="more info">
          <Link key="info" href="[id]/" as={id}>
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
