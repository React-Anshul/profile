import {
    Box,
    makeStyles,
 
    Grid,
    Button,
    Typography,
   
  } from "@material-ui/core";
  import React from "react";
  import TopHeaderSection from "src/component/TopHeaderSection";
  import { useHistory } from "react-router-dom";
  
  const useStyles = makeStyles((theme) => ({
    btn: {
      marginTop: "30px",
      padding: "7px 35px",
    },
    viewbox: {
      marginTop:"40px",
      paddingLeft: "100px",
      [theme.breakpoints.down("xs")]: {
        paddingLeft: "0px",
      },
    },
  }));
  
  export default function FundView() {
    const history = useHistory();
    const classes = useStyles();
    return (
      <>
        <Box className="tophead">
          <TopHeaderSection heading="FUND TRANSFER MANAGEMENT/VIEW" />
        </Box>
        <Box style={{ display: "flex", justifyContent: "center" }}>
          <Box className="mainContainer1" style={{ maxWidth: "900px" }}>
            <Box className={classes.viewbox}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Typography variant="h6"> User Name:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2">Jatin Dutt</Typography>
                </Grid>
                <Grid item xs={6}>
                <Typography variant="h6">User ID:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2"> Jatindutt123</Typography>
              </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6"> Email:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2"> Jatindutt@gmail.com</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6"> Mobile Number:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2">+91 854586585</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6"> Transaction Amount:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2">₭ 10000</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6">Transaction ID:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2">3C73JD79SFHKL9</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6">Transaction Date & Time:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2">Jun 22, 2022, 9:37:45 PM</Typography>
                </Grid>
              </Grid>
            </Box>
            <Box align="center" className="btnbox" mt={2}>
              <Button
                variant="contained"
                color="primary"
                className={classes.btn}
                onClick={() => history.goBack("")}
              >
                Back
              </Button>
            </Box>
          </Box>
        </Box>
      </>
    );
  }
  