import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core/";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

export default function NavBar() {
 

  return (
    <AppBar position="static">
      {/* <MenuIcon onClick={handleMenuOnClick} /> */}
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className="title">
          Decision maker 3000
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
