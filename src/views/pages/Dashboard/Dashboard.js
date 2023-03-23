import React from "react";
import {
  makeStyles,
  Box,
  Grid,
  Typography,
  Divider,
  IconButton,
} from "@material-ui/core";

import { useHistory } from "react-router-dom";
import TopHeaderSection from "src/component/TopHeaderSection";


const useStyles = makeStyles((theme) => ({
  dashboardBox: {
    border: "none",
    textAlign: "center",
    height: "120px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "rgb(11, 52, 131)",
    boxShadow: "0px 1px 5px #1514187a",
    padding: "20px",
    cursor: "pointer",
    color:"#fff",
    "transition": "0.5s",
    "&:hover":{

      "transform": "translatey(-5px)"
    },

    "& h6": {
      color: theme.palette.text.secondary,
      fontSize: "20px",
      fontWeight: "600",
    },
    "& h5": {
      color: theme.palette.text.secondary,
      fontSize: "16px",
      fontWeight: "600",
      width: "100%",
    },
  },
}));

const dataList = [
  {
    title: "Recharge Report",
    count: "200",
  },
  {
    title: "Transiction Report",
    count: "198 ",
  },
  {
    title: "YES AEPS Report",
    count: "2",
  },
  {
    title: "Earning Report",
    count: "200",
  },
  {
    title: "Total Loan Approve",
    count: "10",
  },
  {
    title: "Total Credit Card Requests",
    count: "10",
  },
  {
    title: "Total Credit Card Requests Approve",
    count: "10",
  },
  {
    title: "Total Registered Users",
    count: "200",
  },
  {
    title: "Total Active Users",
    count: "198 ",
  },
];

function Dashboard() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <Box className="tophead">
        <TopHeaderSection heading="Dashboard" />
      </Box>
      <Box>
    
      </Box>
      <Box className="mainContainer1">
        <Box mt={1} pb={10}>
          <Grid container spacing={3}>
            {dataList &&
              dataList.map((data, i) => {
                return (
                  <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Box
                      
                      className={classes.dashboardBox}
                      style={
                        data?.title === "Total Registered Users"
                          ? { background:"linear-gradient(45deg,#FF5370,#ff869a)" }
                          : data?.title === "Transiction Report"
                          ? {background: "linear-gradient(45deg,#4099ff,#73b4ff)" }
                          : data?.title === "YES AEPS Report"
                          ? { background:"linear-gradient(45deg,#2ed8b6,#59e0c5)" }
                          : data?.title === "Earning Report"
                          ? { background:"linear-gradient(45deg,#FFB64D,#ffcb80)" }
                          : data?.title === "Total Crops"
                          ? {  background:"linear-gradient(45deg,#2ed8b6,#59e0c5)" }
                          : data?.title === "Total Products"
                          ? { background: "linear-gradient(45deg,#4099ff,#73b4ff)" }
                          : data?.title === "Total Categories"
                          ? { background:"linear-gradient(45deg,#2ed8b6,#59e0c5)" }
                          : data?.title === "Total Registered Users"
                          ? { background:"linear-gradient(45deg,#FFB64D,#ffcb80)" }
                          : data?.title === "Total Active Users"
                          ? { background:"linear-gradient(45deg,#FFB64D,#ffcb80)" }
                         
                          : { background: "rgb(226, 93, 114)" }
                      }
                    >
                      <IconButton style={{ color: "#fff" }}>
                        {data?.icon}
                      </IconButton>
                      <Typography variant="h4">{data.title}</Typography>
                      <Box mt={3}>
                        <Typography variant="h2">{data.count}</Typography>
                      </Box>
                    </Box>
                  </Grid>
                );
              })}
          </Grid>
        </Box>
      </Box>
     
    </>
  );
}

export default Dashboard;
