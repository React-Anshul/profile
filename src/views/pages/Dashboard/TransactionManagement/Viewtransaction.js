import {
  Box,
  makeStyles,
  Avatar,
  Grid,
  Button,
  Container,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import TopHeaderSection from "src/component/TopHeaderSection";

const useStyles = makeStyles((theme) => ({
  imgSection: {
    paddingBottom: "20px",
    "& .MuiAvatar-root": {
      width: "150px",
      height: "150px",
    },
    "& img": {
      objectFit: "cover",
      borderRadius: "10px",
    },
  },
}));

function Viewtransaction() {
  const classes = useStyles();
  return (
    <>
    <Box className="tophead">
    <TopHeaderSection heading="Transaction View" />
  </Box>
    <Container maxWidth="md">
      
      <Box className="mainContainer1">
       
        <Box style={{ display: "flex", justifyContent: "center",paddingTop:"3rem" }}>
          <Grid container spacing={4} style={{ maxWidth: "600px" }}>
            <Grid item xs={7}>
              Transaction ID:
            </Grid>
            <Grid item xs={5}>
              ch3LZzHcT
            </Grid>
            <Grid item xs={7}>
              Transaction Type:
            </Grid>
            <Grid item xs={5}>
              Card Payment
            </Grid>
            <Grid item xs={7}>
              Transaction Date & Time:
            </Grid>
            <Grid item xs={5}>
              Jun 22, 2022, 9:37:45 PM
            </Grid>
            <Grid item xs={7}>
              Transaction Status:
            </Grid>
            <Grid item xs={5}>
              Paid
            </Grid>
            <Grid item xs={7}>
              Transaction Amount:
            </Grid>
            <Grid item xs={5}>
              1,000
            </Grid>
          </Grid>
        </Box>
        <Box align="center" className="btnbox" mt={4}>
          <Button variant="contained" color="primary" 
         component={Link}
            to="/transaction-management"
          className="btn">
            Back
          </Button>
        </Box>
      </Box>
    </Container>
    </>
  );
}

export default Viewtransaction;
