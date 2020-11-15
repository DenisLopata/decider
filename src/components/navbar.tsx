import React, { useState } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core/";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import NavDrawer from "./navDrawer";
import Grid from "@material-ui/core/Grid/Grid";

export default function NavBar() {
  const [drawerOpen, setDrawer] = useState(false);

  const toggleDrawer = () => {
    console.log("drawer open state:" + drawerOpen);
    setDrawer(!drawerOpen);
  };

  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
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
        <NavDrawer open={drawerOpen}></NavDrawer>
      </Grid>
    </Grid>
  );
}
