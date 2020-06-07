import React from "react";

import { AvatarGroup } from "@material-ui/lab";
import { Avatar } from "@material-ui/core";

export const Gravatar = ({ gravatars, max }) => {
  if (!gravatars || !gravatars.data) return null;
  if (gravatars && gravatars.data && gravatars.data.length > 1) {
    return <GravatarGroup gravatars={gravatars} max={max} />;
  }
  return <Avatar aria-label="User" src={gravatars.data[0]} />;
};

const GravatarGroup = ({ gravatars, max }) => {
  return (
    <AvatarGroup max={max}>
      {gravatars.data.map((user) => (
        <Avatar alt="User" src={user} key={user} />
      ))}
    </AvatarGroup>
  );
};
