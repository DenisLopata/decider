import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

interface DrawerState {
  open: boolean;
}
const drawerWidth = 240;

//material ui custom styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawerPaper: {
      position: "relative",
      width: drawerWidth,
    },
  })
);
export default function NavDrawer(props: DrawerState) {
  const classes = useStyles();
  //const initalDrawState = useRef(props.open);
  //const initalDrawState = useState(props.open);
  const [drawerState, setDrawerOpen] = useState(props.open);

  const toggleDrawer = () => {
    console.log("Setting drawer changing state...");
    setDrawerOpen(!drawerState);
  };

  useEffect(() => {
    console.log("drawer changing state...");
    setDrawerOpen(props.open);
  }, [props.open]);

  return (
    <div>
      <Router>
        <Drawer
          variant="temporary"
          open={drawerState}
          onClose={toggleDrawer}
          classes={{ paper: classes.drawerPaper }}
        >
          <List>
            <ListItem></ListItem>
          </List>
        </Drawer>
      </Router>
    </div>
  );
}
