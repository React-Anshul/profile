import React from "react";
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
  Group,
  LocalShipping,
  EmojiPeople,
  ExpandLess,
  ExpandMore,
} from "@material-ui/icons";
import Collapse from "@material-ui/core/Collapse";
import Item from "./Item";
import { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  makeStyles,
  Avatar,
  Box,
  Button,
  Typography,
} from "@material-ui/core";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(0),
  },

  sidebarmain: {
    width: "15rem",
    marginTop: "4.5rem",
    display: "flex",
    justifyContent: "start",
    alignItems: "start",
    flexDirection: "column",
    padding: "10px 15px",
    background: "#0b3483",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    backdropFilter: "blur(5.5px)",
    borderRadius: "10px",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    // minHeight: '700px',
    overflowY: "auto",
    "@media(max-width:1538px)": {
      width: "14rem",
    },
    "@media(max-width:1448px)": {
      width: "13rem",
    },
    "@media(max-width:1354px)": {
      padding: "10px 7px",
    },
    "@media(max-width:1254px)": {
      padding: "10px 15px",
      width: "15rem",
    },
    "@media(max-width:960px)": {
      marginTop: "0rem",
      paddingBottom: "30px",
      height: "auto",
      overflowY: "scroll",
      width: "100%",
    },
  },

  linesicon: {
    display: "flex",
    alignSelf: "flex-end",
    borderRadius: "5px",
  },
  profile: {
    display: "flex",
    alignItems: "center",
    borderRadius: "50%",
    marginBottom: "1rem",
  },

  sidebar: {
    height: "100vh",
    position: "fixed",
    top: "0",
    left: "0",
    display: "flex",
    justifyContent: "flex-start",
    "@media(max-width:1200px)": {
      height: "0vh",
      minHeight: "100%",
    },
  },

  groups: {
    // backgroundColor:"#811dd2 !important",
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  list: {
    paddingLeft: "7px",
    "&:hover": {
      cursor: "pointer",
      borderRadius: "10px",
    },
    "&.active": {
      background: "green",
    },
  },
  large: {
    width: theme.spacing(22),
    height: theme.spacing(22),
  },
  logoutButton: {
    textAlign: "left",
    display: "flex",
    justifyContent: "flex-start",
    color: "#fff",
  },
}));

export default function Sidebar({
  tabview,
  setTabView,
  setIsLogout,
  handleDrawerClose,
}) {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [open1, setOpen1] = React.useState(false);

  const sideContainerVariants = {
    true: {
      width: "100%",
    },
    false: {},
  };

  const handleClick = () => {
    setOpen1(!open1);
  };

  return (
    <>
      <Box style={{ color: "#fff" }}>
        <Box
          data-Open={open}
          variants={sideContainerVariants}
          className={classes.sidebar}
        >
          <Box className={classes.sidebarmain}>
            <Box>
              <Typography variant="h4" style={{ fontSize: "30px" }}>
                Logo
              </Typography>
            </Box>
            <Box style={{ marginLeft: "25px", paddingBottom: "10px" }}>
              <Avatar
                className={classes.large}
                alt="Admin"
                src="https://picsum.photos/536/354"
              />
            </Box>
            <Box className={classes.groups}>
              <Item
                tabview={tabview}
                setTabView={(data) => {
                  setTabView("Dashboard");

                  if (handleDrawerClose) {
                    handleDrawerClose();
                  }
                }}
                // style={tabview === 'Dashboard' ? {
                //   background: 'green', color: '#fff'
                // } : {}}
                icon={<DashboardRounded />}
                name="Dashboard"
              />
            </Box>
            
            <Box className={classes.groups}>
              <ListItem className={classes.list} button onClick={handleClick}>
                <ListItemIcon style={{ minWidth: "34px" }}>
                  <Group style={{ color: "#fff", minWidth: "34px" }} />
                </ListItemIcon>
                <span>Recharge Report</span>&nbsp;&nbsp;
                {open1 ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
             
              <Collapse in={open1} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem className={classes.nested}>
                    <Item
                      tabview={tabview}
                      setTabView={(data) => {
                        setTabView("FarmerManagement");
                        if (handleDrawerClose) {
                          handleDrawerClose();
                        }
                      }}
                      icon={<EmojiPeople />}
                      name="Farmer Management"
                    />
                  </ListItem>
                  <ListItem className={classes.nested}>
                    <Item
                      tabview={tabview}
                      setTabView={(data) => {
                        setTabView("DeliveryManagement");
                        if (handleDrawerClose) {
                          handleDrawerClose();
                        }
                      }}
                      icon={<LocalShipping />}
                      name="Delivery Management"
                    />
                  </ListItem>
                </List>
              </Collapse>
            </Box>

            <Box>
              <Item
                tabview={tabview}
                setTabView={(data) => {
                  setTabView("CropManagement");
                  if (handleDrawerClose) {
                    handleDrawerClose();
                  }
                }}
                icon={<BarChartRounded />}
                name="Crop Management"
              />
              <Item
                tabview={tabview}
                setTabView={(data) => {
                  setTabView("ProductManagement");
                  if (handleDrawerClose) {
                    handleDrawerClose();
                  }
                }}
                icon={<AttachMoneyRounded />}
                name="Product Management"
              />

              <Item
                tabview={tabview}
                setTabView={(data) => {
                  setTabView("OrderManagement");
                  if (handleDrawerClose) {
                    handleDrawerClose();
                  }
                }}
                icon={<AssignmentTurnedInRounded />}
                name="Order Management"
              />
              <Item
                tabview={tabview}
                setTabView={(data) => {
                  setTabView("TransactionManagement");
                  if (handleDrawerClose) {
                    handleDrawerClose();
                  }
                }}
                icon={<Receipt />}
                name="Transaction Management"
              />

              <Item
                tabview={tabview}
                setTabView={(data) => {
                  setTabView("CategoryMangement");
                  if (handleDrawerClose) {
                    handleDrawerClose();
                  }
                }}
                icon={<Category />}
                name="Category Management"
              />
              <Item
                tabview={tabview}
                setTabView={(data) => {
                  setTabView("QueryManagement");
                  if (handleDrawerClose) {
                    handleDrawerClose();
                  }
                }}
                icon={<QuestionAnswer />}
                name="Query Management"
              />
              <Item
                tabview={tabview}
                setTabView={(data) => {
                  setTabView("ReportManagement");
                  if (handleDrawerClose) {
                    handleDrawerClose();
                  }
                }}
                icon={<Assessment />}
                name="Report Management"
              />
              <Item
                tabview={tabview}
                setTabView={(data) => {
                  setTabView("StaticManagement");
                  if (handleDrawerClose) {
                    handleDrawerClose();
                  }
                }}
                icon={<Comment />}
                name="Static Management"
              />
              <Item
                tabview={tabview}
                setTabView={(data) => {
                  setTabView("AdminManagement");
                  if (handleDrawerClose) {
                    handleDrawerClose();
                  }
                }}
                icon={<AccountCircle />}
                name="Admin Management"
              />
              <Button
                fullWidth
                onClick={() => setIsLogout(true)}
                className={classes.logoutButton}
              >
                <ExitToAppIcon />
                &nbsp; Logout
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
