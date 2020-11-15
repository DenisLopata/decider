import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { BarChart, FlightTakeoff } from "@material-ui/icons";
import { ListItemText } from "@material-ui/core";
import RandomChoice from "./randomChoice";
import TotalStats from "./totalStats";
//import "../App.css";
// import "../styles/randomChoice.css";

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
  const firstUpdate = useRef(true);
  //const initalDrawState = useState(props.open);
  const [drawerState, setDrawerOpen] = useState(props.open);

  const toggleDrawer = () => {
    console.log("Setting drawer changing state...");
    setDrawerOpen(false);
  };

  useEffect(() => {
    console.log("drawer changing state...");
    if (!firstUpdate.current) {
      setDrawerOpen(true);
    } else {
      firstUpdate.current = false;
    }
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
            <ListItem button component={Link} to="/">
              <ListItemIcon>
                <FlightTakeoff></FlightTakeoff>
              </ListItemIcon>
              <ListItemText primary={"Make Decision"}></ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/totalStats">
              <ListItemIcon>
                <BarChart></BarChart>
              </ListItemIcon>
              <ListItemText primary={"Total Stats"}></ListItemText>
            </ListItem>
          </List>
        </Drawer>
        <div className="App-body">
          <Route exact path="/" component={RandomChoice}></Route>
          <Route exact path="/totalStats" component={TotalStats}></Route>
        </div>
      </Router>
    </div>
  );
}
