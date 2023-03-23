import {
  AppBar,
  Toolbar,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  InputBase,
  Grid,
  MenuItem,
  Box,
  Container,
  withStyles,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React, { useState, useEffect, useRef, useContext } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { Link, useHistory } from "react-router-dom";
import Logo from "src/component/Logo";
import { UserContext } from "src/context/User";

import { sortAddress } from "src/utils";

import { useWeb3React } from "@web3-react/core";
import MuiDialogContent from "@material-ui/core/DialogContent";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: "600",
    borderRadius: 0,
    minWidth: "auto",
    color: theme.palette.secondary.main,
    height: "31px",
    padding: "0px 7px",
    letterSpacing: "1px",
    marginLeft: "15px",
    "@media (max-width: 900px)": {
      color: "#FFF",
      padding: "15px !important",
      height: "51px",
      width: "100%",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    "&:active": {
      color: theme.palette.secondary.dark,
    },
    "&:hover": {
      color: theme.palette.secondary.dark,
    },
  },
  menuButton1: {
    width: "100%",
  },
  toolbar: {
    display: "flex",
    padding: "10px 0",
    justifyContent: "space-between",
    height: "100%",

    "@media (max-width: 900px)": {
      paddingLeft: "75px",
      paddingRight: "20px",
      height: "100%",
    },
  },
  maindrawer: {
    height: "100%",
    background: "#0c0731",
    width: "260px",
  },
  logoDrawer: {
    paddingLeft: "10px",
    width: "140px",
    marginBottom: "30px",
  },
  drawerContainer: {
    padding: "20px 0px ",
    height: "100%",
    backgroundColor: "rgb(60 39 89)",
    width: "260px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  drawericon: {
    color: "#000",
    position: "absolute",
    top: "0px",
    right: "0px",
    fontSize: "25px",
  },
  logoImg: {
    width: "66px",
    height: "44.5px",
    margin: " 14px 15px 11px 0px",
    objectFit: "contain",
    "@media (max-width: 500px)": {
      margin: " 11px 1px 3px 0px",
      width: "52px",
    },
  },
  flexButton: {
    display: "flex",
    justifyContent: "flex-between",
    alignItems: "center",
  },
  menuMobile: {
    fontSize: "16px",
    fontWeight: "400",
    fontStyle: "normal",
    letterSpacing: "-0.6px",
    lineHeight: "1.75",
    color: "#fff",
    borderBottom: "1px solid #3e3e3e",
    padding: "16px",
    "@media (max-width: 500px)": {
      padding: "7px 0",
      width: "100%",
    },
  },
  paper1: {
    background: "black",
    color: "white",
  },
  containerHeight: {
    height: "100%",
  },
  mainHeader: {
    justifyContent: "space-between",
    padding: "0px",
  },
  search: {
    height: "35px",
    position: "relative",
    background: " rgba(255, 255, 255, 0.2)",
    boxShadow: "0px 6px 9px rgba(110, 0, 149, 0.15)",
    borderRadius: "40px",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.5)",
    },
    marginLeft: 10,
    marginRight: 10,
    width: "150px",
    maxWidth: "150px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "204px",
      maxWidth: "204px",
      height: "42px",
    },
  },
  searchIcon: {
    fontSize: "16px",
    padding: theme.spacing(0, 1),
    color: "#fff",
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "#fff",
    fontSize: "12px",
    width: "100%",
  },
  wallet: {
    fontSize: "14px",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "21px",
    color: "#fff",
    border: "1px solid #ec0066",
    padding: "0 15px",
    background: "#ec0066",
    borderRadius: "50px",
    height: "31px",
    "&:hover": {
      background: "#fff",
      color: "#ec0066",
    },
    "@media (max-width: 900px)": {
      marginLeft: "12px",
      marginTop: "12px",
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    fontSize: "13px",
    color: "#fff",
    paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
    transition: theme.transitions.create("width"),
    width: "100px",
    height: "20px",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      width: "100%",
      height: "25px",
      "&:focus": {
        width: "100%",
      },
    },
  },
  submenu: {
    borderTop: "3px solid #300760",
    top: "25px !important",
  },

  menuMobile1: {
    marginLeft: "10px",
    backgroundColor: " #FCF2FA",
    borderRadius: "40px",
    "& h4": {
      fontSize: "14px",
      lineHeight: " 17px",
      color: "#D200A5",
      margin: "0 5px",
      "@media (max-width:767px)": {
        display: "none",
      },
    },
    "& svg": {
      "@media (max-width:767px)": {
        display: "none",
      },
    },
    "&:hover": {
      backgroundColor: " #FCF2FA",
      borderRadius: "40px",
    },
    "& figure": {
      margin: 0,
      width: 40,
      height: 40,
      borderRadius: "50px",
      overflow: "hidden",
      display: "flex",
      justifyContent: " center",
      alignItems: "center",
      "& img": {
        width: "auto",
        height: "auto",
        maxWidth: "100%",
        // maxHeight: "100%",
      },
    },
  },
  customizedButton: {
    fontSize: "20px",
    padding: "5px 10px 10px 0px",
  },
  dailogOpen: {
    "& .MuiDialog-paperWidthMd": { maxWidth: "100%" },
    borderRadius: "25px",
    padding: "10px",
    "& h5": {
      color: "#3B0D60",
      fontSize: "17px",
    },
  },
  customizedButton1: {
    display: "flex !important",
    justifyContent: "end",
    "& div": {
      display: "flex !important",
    },
  },
  paper: {
    overflowY: "unset",
  },
  dialogBox: {
    padding: "20px !important",
    "& h5": {
      color: "#3B0D60",
      fontSize: "20px",
    },
  },
}));

export default function Header() {
  const user = useContext(UserContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [walletPopup, setWalletPopup] = useState(false);
  const [isWrongNetwork, setIsWrongNetwork] = useState(false);
  const { account, chainId } = useWeb3React();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClose1 = () => {
    setAnchorEl(null);
  };
  const {
    menuMobile,
    menuButton,
    menuButton1,
    paper,
    dialogBox,
    logoImg,
    divstake,
    toolbar,
    search,
    searchIcon,
    flexButton,
    inputInput,
    drawerContainer,
    drawericon,
    inputRoot,
    logoDrawer,
    containerHeight,
    mainHeader,
    wallet,
    menuMobile1,
    submenu,
    customizedButton,
    dailogOpen,
    customizedButton1,
  } = useStyles();
  const history = useHistory();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const { mobileView, drawerOpen } = state;
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose4 = () => {
    setAnchorEl1(null);
  };

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1220
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const [open1, setOpen1] = useState({ community: false, user: false });
  const anchorRef = { community: useRef(null), user: useRef(null) };
  const [updateMinSatkeOpen, setUpdateMinSatkeOpen] = useState(false);
  const [updateName, setUpdateName] = useState(false);

  const handleClose2 = (event, name) => {
    if (
      anchorRef[name].current &&
      anchorRef[name].current.contains(event.target)
    ) {
      return;
    }

    setOpen1({ ...open1, [name]: false });
  };

  function handleListKeyDown(event, name) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen1({ ...open1, [name]: false });
    }
  }
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
      overflow: "hidden !important",
    },
  }))(MuiDialogContent);

  const displayDesktop = () => {
    return (
      <Container maxWidth="lg">
        <Toolbar className={toolbar}>
          {femmecubatorLogo}
          <Grid
            container
            item
            direction="row"
            justify="flex-end"
            alignItems="center"
            style={{ paddingLeft: "0px" }}
          >
            {/* <div>{getMenuButtons()}</div> */}
          </Grid>
        </Toolbar>
      </Container>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar className={mainHeader}>
        <Drawer
          {...{
            anchor: "right",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>
            <img className={logoDrawer} src="images/logo.png" alt="" />
          </div>
        </Drawer>

        <div>{femmecubatorLogo}</div>
      </Toolbar>
    );
  };

  const femmecubatorLogo = (
    <Box>
        {/* <Link to="/">
          <Logo className="logoImg" />
        </Link> */}
    </Box>
  );

  return (
    <>
      <AppBar
        position={history.location.pathname !== "/" ? "relative" : "absolute"}
        elevation={0}
        style={{ background:"#fff", border: "none" }}
      >
        <Box
          maxWidth={history.location.pathname !== "/" ? "lg" : "fixed"}
          className={containerHeight}
        >
          {mobileView ? displayMobile() : displayDesktop()}
        </Box>
      </AppBar>
    </>
  );
}
