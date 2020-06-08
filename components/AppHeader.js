import React from 'react';
import {
  AppBar,
  Avatar,
  Badge,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from '@material-ui/core';
import Link from 'next/link';

import { GiScubaTanks } from 'react-icons/gi';
import NotificationsIcon from '@material-ui/icons/Notifications';
import GitHubIcon from '@material-ui/icons/GitHub';

// https://codesandbox.io/s/tyr6m?file=/demo.js:0-957
export const AppHeader = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography style={{ fontSize: '36px' }}>
          <GiScubaTanks />
        </Typography>
        <Link key="home" href="/">
          <Typography
            style={{
              cursor: 'pointer',
              fontFamily: 'Comic Sans MS',
              fontSize: '22px',
            }}
          >
            ScubaHub
          </Typography>
        </Link>
        <div style={{ flex: 'auto' }} />
        <IconButton href="https://github.com/ShimiSun/mui-graphql" aria-label="show 3 new notifications" color="inherit">
          <GitHubIcon />
        </IconButton>
        <Tooltip title="Not supported yet" aria-label="notification">
          <IconButton aria-label="show 3 new notifications" color="inherit">
            <Badge badgeContent={3} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Tooltip>
        <Tooltip title="Welcome back Shimi!" aria-label="welcome">
          <Avatar
            style={{ margin: '20px' }}
            aria-label="Shimi"
            alt="Shimi"
            src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80"
          />
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};
