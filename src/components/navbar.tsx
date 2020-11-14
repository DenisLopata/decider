import React, { useState } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core/";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import NavDrawer from "./navDrawer";

export default function NavBar() {
const [drawerOpen, setDrawer] = useState(false);

  const toggleDrawer = () => {
      setDrawer(!drawerOpen);
  };

  return (
      <div>
    <AppBar position="static">
      {/* <MenuIcon onClick={handleMenuOnClick} /> */}
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className="title">
          Decision maker 3000
        </Typography>
      </Toolbar>
    </AppBar>
    {/* <NavDrawer open={drawerOpen}></NavDrawer> */}
    </div>
  );
}
