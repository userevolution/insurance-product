import React, { useState, useEffect } from "react";
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import UserIcon from '@material-ui/icons/PermIdentity';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import FileIcon from '@material-ui/icons/InsertDriveFile';
import MoneyIcon from '@material-ui/icons/AttachMoney';
import HelpIcon from '@material-ui/icons/Help';
import ContactIcon from '@material-ui/icons/ContactMail';
import DashboardIcon from '@material-ui/icons/Dashboard';

import { Switch, Route, Link } from 'react-router-dom'

import styled from "styled-components";

const StyledDrawer = styled(Drawer)`
  & > div {
    margin-top: 8rem;
  }
`;



function SideBar({ window, drizzle }) {
  const container = window !== undefined ? () => window.document.body : undefined;
  function getSelected(path) {
    return window.location.pathname === path;
  }

  const drawer = (
    <div>
      <div />
      <Divider />
      <List>
        <Link to="/">
          <ListItem selected={getSelected("/")} button key={"Home"}>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItem>
        </Link>
        <Link to="/profile">
          <ListItem selected={getSelected("/profile")} button key={"Profile"} >
            <ListItemIcon><UserIcon /></ListItemIcon>
            <ListItemText primary={"Profile"} />
          </ListItem>
        </Link>
        <Link to="/policy">
          <ListItem selected={getSelected("/policy")} button key={"PolicyRegistration"} >
            <ListItemIcon><FileIcon /></ListItemIcon>
            <ListItemText primary={"Policy Registration"} />
          </ListItem>
        </Link>
        <Link to="/claims">
          <ListItem hidden={true} selected={getSelected("/claims")} button key={"ClaimProcess"} >
            <ListItemIcon><MoneyIcon /></ListItemIcon>
            <ListItemText primary={"Claim Process"} />
          </ListItem>
        </Link>
        <Link to="/dashboard">
          <ListItem selected={getSelected("/dashboard")} button key={"Dashboard"}>
            <ListItemIcon><DashboardIcon /></ListItemIcon>
            <ListItemText primary={"Statistics"} />
          </ListItem>
        </Link>
        <Divider />
        <Link to="/about">
          <ListItem selected={getSelected("/about")} button key={"About"}>
            <ListItemIcon><HelpIcon /></ListItemIcon>
            <ListItemText primary={"About"} />
          </ListItem>
        </Link>
        <Link to="/contact">
          <ListItem selected={getSelected("/contact")} button key={"Contact"}>
            <ListItemIcon><ContactIcon /></ListItemIcon>
            <ListItemText primary={"Contact"} />
          </ListItem>
        </Link>
      </List>
    </div>
  );
  return (
    <nav aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <StyledDrawer className="drawer"
          container={container}
          variant="temporary"
          anchor={'right'}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </StyledDrawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <StyledDrawer
          variant="permanent"
          open
        >
          {drawer}
        </StyledDrawer>
      </Hidden>
    </nav>
  );
}

export default SideBar;