import React, { useState, useEffect, useContext } from "react";
import "src/scss/main.css";

import {
  Box,
  Typography,
  Grid,
  makeStyles,
  Divider,

} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import TopHeaderSection from "src/component/TopHeaderSection";

import { GrAddCircle } from "react-icons/gr";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "100px",
  },

  Box: {
    padding: "0px 150px",
    [theme.breakpoints.down("md")]: {
      padding: "15px",
    },
  },
  mainBox: {
    border: "1px solid black",
    borderRadius: "20px",
    paddingBottom: "180px",
    paddingTop: "20px",
    marginTop: "40px",
    paddingLeft: "30px",
    background: "#F2F2F2",
    [theme.breakpoints.down("sm")]:{
      marginTop: "0px",

    },
  },
  addCard: {
    border: "1px solid black",
    borderRadius: "20px",
     cursor: "pointer",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50px",

    paddingTop: "20px",

    background: "#F2F2F2",
    textAlign: "center",
    padding: "30px",
    [theme.breakpoints.down("sm")]:{
      marginTop: "0px",

    },
  },
  divider: {
    border: "1px solid #000",
    left: "50%",
    position: "absolute",
    height: "50%",
  },
  cardbox:{
    padding:"0px 100px",
    [theme.breakpoints.down("sm")]:{
      padding:"0px 0px",

    },
    "& .grid":{
      display: "flex",
      justifyContent:"center"
    }
  }
}));
export default function Card() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Box>
      <Box className="tophead">
        <TopHeaderSection heading="Card Management" />
      </Box>
      <Box className="mainContainer1">
        <Box className={classes.cardbox}>
          <Grid container spacing={3} className="grid">
            <Grid item lg={5} md={6} sm={6} xs={12}>
              <Box className={classes.mainBox}>
                <Typography variant="h3">Credit Card</Typography>
              </Box>
            </Grid>
            {/* <Divider orientation="vertical" className={classes.divider} /> */}
            <Grid item lg={5} md={6} sm={6} xs={12}>
              <Box className={classes.mainBox}>
                <Typography variant="h3">Debit Card</Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={3} className="grid">
            
            <Grid item lg={5} md={6} sm={6} xs={12}>
              <Box
                className={classes.addCard}
                onClick={() => history.push("/card-view")}
              >
                <Typography variant="h3">Add New Card</Typography>

                <Box
                  fontSize="100px"
                  onClick={() => history.push("/card-view")}
                >
                  <GrAddCircle />
                </Box>
              </Box>
            </Grid>
            
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
