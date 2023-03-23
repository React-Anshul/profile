import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, Container, Box } from "@material-ui/core";
import NavBar from "./NavBar";
import TopBar from "./TopBar";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundRepeat: "no-repeat",
    background: "#fff",
    backgroundImage: "url(/images/line.png)" /* fallback */,
    backgroundSize: "100%",
    backgroundPosition: "top",
    backgroundImage:
      " url(/images/line.png), linear-gradient(105deg, #feeefd 1.25%, #4606b9 99.18%)" /* W3C */,
    display: "flex",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  wrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    minHeight: "100vh",
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 256,
    },
  },
  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    backgroundRepeat: "no-repeat",
    background: "#fff",

    backgroundSize: "100%",
    backgroundPosition: "top",
  },
  content: {
    flex: "1 1 auto",
    height: "100%",
    overflow: "hidden",
    position: "relative",
    WebkitOverflowScrolling: "touch",
    background: "#eff5ee",
    padding: "10px 0px 25px 0px",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 0px 25px 0px",
    },
  },
}));

const DashboardLayout = ({ children }) => {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <div className={classes.root}>
        <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
        <NavBar
          onMobileClose={() => setMobileNavOpen(false)}
          openMobile={isMobileNavOpen}
        />
        <div className={classes.wrapper}>
          <div className={classes.contentContainer}>
            <div className={classes.content} id="main-scroll">
              <Container>{children}</Container>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node,
};

export default DashboardLayout;
