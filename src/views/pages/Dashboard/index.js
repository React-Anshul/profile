import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  makeStyles,
  Drawer,
  Toolbar,
  IconButton,
  Dialog,
  DialogContent,
  Typography,
  DialogActions,
  Button,
  Slide,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Page from "src/component/Page";
import Dashboard from "./Dashboard";
import FarmerManagement from "./FarmerMangement/FarmerManagement";
import Sidebar from "../Home/sidebar/SideBar";
import DelevryManagement from "./DelevryManagement/DelevryManagement";
import CropManagement from "./UerManagement/usermanagement";
import ProductManagement from "./ProductManagment/ProductManagement";
import OrderManagement from "./Order-Management/orderManagement";
import QueryManagement from "./QueryManagement/QueryManagement";
import CategoryMangement from "./CategoryManagement/CategoryMangement";
import StaticContentManagement from "./StaticContentManagement/StaticContentManagement";
import TransactionManagement from "./TransactionManagement/Transactionmanagement";
import Report from "./ReportManagment/Report";
import { useHistory } from "react-router-dom";
import AdminProfile from "./Profile/AdminProfile";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px 0px 0px 0px",
    marginTop: "5rem",
    transition: "0.5s",
    "&:hover": {
      transform: "translateY(-5px)",
    },
  },
  drawerContainer: {
    padding: "20px 0px ",
    height: "100%",
    background: "#170C41",
    border: "1px solid #332262",
    boxSizing: "border-box",
    width: "260px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },

  mainHeader: {
    justifyContent: "space-between",
    padding: "0px",
  },
  logoDrawer: {
    width: "100%",
    maxWidth: "140px",
    margin: "0px 6px",
  },
  drawericon: {
    color: "#000",
    position: "absolute",
    top: "-21px",
    left: "36px",
    fontSize: "25px",
    zIndex: "1111111111 !important",
    "@media(max-width:600px)": {
      left: "25 px",
    },
  },
  dialougTitle: {
    color: "#fff",
  },
}));

function Index(props) {
  const classes = useStyles();
  const history = useHistory();
  const [tabview, setTabView] = useState("");
  const [isLogout, setIsLogout] = useState(false);
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 960
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);
  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar className={classes.mainHeader}>
        <Drawer
          {...{
            anchor: "left",
            open: state.drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={classes.drawerContainer}>
            {/* <Grid item xs={12} sm={5} md={3} lg={2}> */}

            <Sidebar
              tabview={tabview}
              setTabView={(data) => setTabView(data)}
              setIsLogout={(data) => setIsLogout(data)}
              handleDrawerClose={handleDrawerClose}
            />
            {/* </Grid> */}
          </div>
        </Drawer>

        {/* <div>{femmecubatorLogo}</div> */}
        <Grid container>
          <Grid item xs={10}></Grid>
          <Grid item xs={2}>
            <IconButton
              className={classes.drawericon}
              {...{
                edge: "start",
                color: "inherit",
                "aria-label": "menu",
                "aria-haspopup": "true",
                onClick: handleDrawerOpen,
              }}
            >
              <MenuIcon
                width="60px"
                height="60px"
                style={{ color: "#000", fontSize: "30px" }}
              />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    );
  };
  return (
    <>
      <Page title="Dashboard">
        <Box className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} lg={12} md={12} className="mainBody">
              {tabview === "Dashboard" ? <Dashboard /> : ""}
              {tabview === "FarmerManagement" ? <FarmerManagement /> : ""}
              {tabview === "DeliveryManagement" ? <DelevryManagement /> : ""}
              {tabview === "CropManagement" ? <CropManagement /> : ""}
              {tabview === "ProductManagement" ? <ProductManagement /> : ""}
              {tabview === "OrderManagement" ? <OrderManagement /> : ""}
              {tabview === "QueryManagement" ? <QueryManagement /> : ""}
              {tabview === "CategoryMangement" ? <CategoryMangement /> : ""}
              {tabview === "StaticManagement" ? (
                <StaticContentManagement />
              ) : (
                ""
              )}

              {tabview === "TransactionManagement" ? (
                <TransactionManagement />
              ) : (
                ""
              )}

              {tabview === "ReportManagement" ? <Report /> : ""}
              {tabview === "AdminManagement" ? <AdminProfile /> : ""}
            </Grid>
          </Grid>
        </Box>
      </Page>
      {isLogout && (
        <Dialog open={isLogout} keepMounted onClose={() => setIsLogout(false)}>
          <DialogContent>
            <Box className={classes.dialougTitle}>
              <Typography
                variants="h2"
                style={{ fontSize: "20px", color: "#000" }}
              >
                Are you sure want to logout?
              </Typography>
            </Box>
          </DialogContent>
          <DialogActions
            style={{
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Box>
              <Button
                color="primary"
                variant="contained"
                onClick={() => setIsLogout(false)}
              >
                No
              </Button>
              &nbsp;
              <Button
                color="primary"
                variant="contained"
                onClick={() => history.push("/")}
              >
                Yes
              </Button>
            </Box>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}

export default Index;
