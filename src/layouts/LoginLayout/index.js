import React from "react";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#fff",
  },
  MainLayout: {
    minHeight: "calc(100vh - 72px)",
    overflowX: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const MainLayout = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  console.log(history.location);
  return (
    <div className={classes.root}>
      <div
        style={
          history.location.pathname !== "/"
            ? { display: "block" }
            : { display: "none" }
        }
      ></div>

      <div className={classes.MainLayout}>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
