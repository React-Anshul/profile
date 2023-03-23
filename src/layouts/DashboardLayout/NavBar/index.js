/* eslint-disable no-use-before-define */
import React, { useContext, useEffect, useState } from "react";
import { useLocation, matchPath, useHistory } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import clsx from "clsx";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";

import {
  Box,
  Drawer,
  Hidden,
  List,
  ListSubheader,
  makeStyles,
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
  Slide,
  ListItem,
  ListItemIcon,
} from "@material-ui/core";
import NavItem from "./NavItem";
import GroupIcon from "@material-ui/icons/Group";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import {
  AssignmentTurnedInRounded,
  AttachMoneyRounded,
  BarChartRounded,
  DashboardRounded,
  TocRounded,
  Receipt,
  AccountCircle,
  Assessment,
  QuestionAnswer,
  Category,
  Comment,
  LocalShipping,
  Group,
} from "@material-ui/icons";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaWarehouse, FaUserAlt } from "react-icons/fa";
import { GiFarmer, GiWheat, GiNewspaper, GiWantedReward } from "react-icons/gi";
import Collapse from "@material-ui/core/Collapse";
import ImageIcon from "@material-ui/icons/Image";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

const sections = [
  {
    items: [
      {
        title: "DASHBOARD",
        icon: DashboardRounded,
        href: "/dashboard",
      },
      {
        title: "Recharge Report",
        icon: GiWheat,
        href: "/user-management",
      },
      {
        title: "QR CODE MANAGEMENT",
        icon: MdOutlineProductionQuantityLimits,
        href: "/QRcode",
      },
      {
        title: "UTILITY MANAGEMENT",
        icon: Category,
        href: "/utility-management",
      },
      {
        title: "REWARD MANAGEMENT",
        icon: Receipt,
        href: "/reward-management",
      },
     
      {
        title: "TRANSACTION MANAGEMENT",
        icon: Receipt,
        href: "/transaction-management",
      },
      {
        title: "LOAN MANAGEMENT",
        icon: QuestionAnswer,
        href: "/loan-management",
      },
      {
        title: "FUND TRANSFER MANAGEMENT ",
        icon: Assessment,
        href: "/fund-management",
      },
      {
        title: "AGENCY MANAGEMENT",
        icon: Comment,
        href: "/agency-management",
      },
      {
        title: "CARD MANAGEMENT",
        icon: ImageIcon,
        href: "/card-management",
      },
      {
        title: "SERVICE REQUEST MANAGEMENT",
        icon: GiNewspaper,
        href: "/service-management",
      },
      {
        title: "NOTIFICATION MANAGEMENT",
        icon: FaWarehouse,
        href: "/notification-management",
      },
      {
        title: "BANNER MANAGEMENT",
        icon: PlaylistAddCheckIcon,
        href: "/banner-management",
      },
      {
        title: "STATIC CONTENT MANAGEMENT",
        icon: GiFarmer,
        href: "/static-management",
      },
      {
        title: "LOGS MANAGEMENT",
        icon: GiFarmer,
        href: "/logs-management",
      },
      {
        title: "SETTINGS ",
        icon: GiWantedReward,
        href: "/settings",
      },

    
    ],
  },
];

function renderNavItems({ items, pathname, depth = 0 }) {
  return (
    <List disablePadding>
      {items.reduce(
        (acc, item) => reduceChildRoutes({ acc, item, pathname, depth }),
        []
      )}
    </List>
  );
}

function reduceChildRoutes({ acc, pathname, item, depth }) {
  const key = item.title + depth;

  if (item.items) {
    const open = matchPath(pathname, {
      path: item.href,
      exact: false,
    });

    acc.push(
      <NavItem
        depth={depth}
        icon={item.icon}
        info={item.info}
        key={key}
        open={Boolean(open)}
        title={item.title}
      >
        {renderNavItems({
          depth: depth + 1,
          pathname,
          items: item.items,
        })}
      </NavItem>
    );
  } else {
    acc.push(
      <NavItem
        depth={depth}
        href={item.href}
        icon={item.icon}
        info={item.info}
        key={key}
        title={item.title}
      />
    );
  }

  return acc;
}

const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: 256,
    background: "#fff",
    backdropFilter: "blur(44px)",
  },
  desktopDrawer: {
    width: 256,
    top: 0,
    height: "100%",
    background: "#fff",
    backdropFilter: "blur(44px)",
    boxShadow: "rgb(90 114 123 / 11%) 0px 7px 30px 0px",
  },
  avatar: {
    cursor: "pointer",
    width: 64,
    height: 64,
  },
  socialIcon: {
    cursor: "pointer",
    marginRight: 5,
  },
  logoicon: {
    display: "flex",
    marginTop: "16px",
    alignItems: "center",
    marginLeft: "30px",
  },

  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  logoutButton: {
    textAlign: "left",
    display: "flex",
    justifyContent: "flex-start",
    color: "#000",

    "&:hover": {
      color: "#fff",
      background: " !important",
      borderRadius: "none !important",
    },
  },
  itemLeaf: {
    display: "flex",
    paddingTop: 0,
    paddingBottom: 0,
    marginTop: "2px",
  },
  buttonLeaf: {
    color: "#f5f7fac9",
    padding: "11px 8px",
    justifyContent: "flex-start",
    textTransform: "none",
    letterSpacing: 0,
    borderLeft: "solid 8px transparent",
    borderRadius: 0,
    fontSize: "13px",
    borderLeft: "3px solid transparent",
    "&:hover": {
      background: "rgb(90 134 255)",
      color: "#fff",
    },

    "&.depth-0": {
      "& $title": {
        fontWeight: theme.typography.fontWeightMedium,
        
      },
    },
  },
  active: {
    borderLeft: "3px solid #fff",

    fontWeight: theme.typography.fontWeightRegular,
    background: "#811dd2 ",
    "& $title": {
      fontWeight: theme.typography.fontWeightMedium,
    },
    "& $icon": {
      color: "00e0b0",
    },
  },
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const [colorbg, setColor] = useState();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const [open1, setOpen1] = React.useState(false);

  const handleClick = (event, index) => {
    setOpen1(!open1);
    setSelectedIndex(index);
  };
  const [isLogout, setIsLogout] = useState(false);
  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);
 

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      className="example"
    >
      <PerfectScrollbar options={{ suppressScrollX: true }}>
        <Box
          mt={2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Avatar
            onClick={() => history.push("/admin-management")}
            className={classes.large}
            src="https://picsum.photos/536/354"
          />
        </Box>
        <Box textAlign="center" pt={1}>
          <Typography variant="h6" style={{ color: "#000" }}>
            Admin
          </Typography>
        </Box>
        {/* <ListItem
          selected={selectedIndex === 0}
          className={classes.buttonLeaf}
          classes={{ selected: classes.active }}
          activeClassName={classes.active}
          disableGutters
          button
          onClick={(event) => handleClick(event, 0)}
        >
          <ListItemIcon style={{ minWidth: "34px" }}>
            <Group style={{ color: "#fff", minWidth: "50px" }} />
          </ListItemIcon>
          <span
            style={{ paddingTop: "4px", fontSize: "13px", fontWeight: 500 }}
          >
            User Management
          </span>
          &nbsp;&nbsp;
          {open1 ? (
            <ExpandLess style={{ color: "#fff" }} />
          ) : (
            <ExpandMore style={{ color: "#fff" }} />
          )}
        </ListItem>
        <Collapse in={open1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Button
              activeClassName={classes.active}
              onClick={() => history.push("/farmer-management")}
              style={{ width: "100%" }}
              className={classes.buttonLeaf}
              startIcon={
                <GiFarmer style={{ marginLeft: "13px", marginRight: "11px" }} />
              }
            >
              Farmer Management
            </Button>
            <Button
              activeClassName={classes.active}
              onClick={() => history.push("/delivery-anagement")}
              style={{ width: "100%" }}
              className={classes.buttonLeaf}
              startIcon={
                <LocalShipping
                  style={{ marginLeft: "13px", marginRight: "11px" }}
                />
              }
            >
              Farmserv Management
            </Button>
            <Button
              activeClassName={classes.active}
              onClick={() => history.push("/subadmin-management")}
              style={{ width: "100%" }}
              className={classes.buttonLeaf}
              startIcon={
                <LocalShipping
                  style={{ marginLeft: "13px", marginRight: "11px" }}
                />
              }
            >
              SubAdmin Management
            </Button>
          </List>
        </Collapse> */}
        <Box pt={1}>
          {sections.map((section, i) => (
            <List
              key={`menu${i}`}
              subheader={
                <ListSubheader disableGutters disableSticky>
                  {section.subheader}
                </ListSubheader>
              }
            >
              {renderNavItems({
                items: section.items,
                pathname: location.pathname,
              })}
            </List>
          ))}
        </Box>
        <Button
          fullWidth
          onClick={() => setIsLogout(true)}
          className={classes.logoutButton}
        >
          <ExitToAppIcon style={{ marginLeft: "13px" }} />
          &nbsp; &nbsp; Logout
        </Button>
      </PerfectScrollbar>

      {isLogout && (
        <Dialog
          open={isLogout}
          keepMounted
          onClose={() => setIsLogout(false)}
        >
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
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

export default NavBar;
