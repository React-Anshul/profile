import React from "react";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";
import TopBar from "./TopBar";

const useStyles = makeStyles((theme) => ({
  root: {
    // background: "rgb(229,71,255)",
    // backgroundImage: "linear-gradient(to top right, #4b20ff 15%, #e547ff 60%)",
    // position: "relative",
    // "&::before": {
    //   content: "' '",
    //   width: "100%",
    //   height: "100%",
    //   position: "fixed",
    //   top: "0",
    //   left: "0",
    //   background: "rgb(229,71,255)",
    //   backgroundImage:
    //     "linear-gradient(to top right, #4b20ff 15%, #e547ff 60%)",
    //   zIndex: "1",
    // },
  },
  mainBox: {
    position: "relative",
    overflow: "hidden",
    minHeight: "calc(100vh - 415px)",
    height: "100vh",
    //minHeight: 'calc(100vh - 215px)',
    zIndex: "1",
  },
}));

const MainLayout = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.root}>
      {/* <TopBar /> */}
      <div
        style={
          history.location.pathname !== "/"
            ? { display: "block" }
            : { display: "none" }
        }
      ></div>

      <div className={classes.mainBox}>
        <div className={classes.shade}></div>
        <div className={classes.shade2}></div>
        <div className={classes.shade3}></div>
        <div className={classes.shade4}></div>
        {children}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
