import { Box, makeStyles, Grid, Button, Typography } from "@material-ui/core";
import React from "react";
import MainTable from "src/component/MainTable";
import TopHeaderSection from "src/component/TopHeaderSection";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    btn: {
      marginTop: "30px",
      padding: "7px 35px",
    },
    viewbox: {
      marginTop: "40px",
      paddingLeft: "100px",
      [theme.breakpoints.down("xs")]: {
        paddingLeft: "0px",
      },
    },
    
  }));


export default function Qrcodeview() {
    const history = useHistory();
  const classes = useStyles();
    
  return (
    <div>
    <Box className="tophead">
    <TopHeaderSection heading="QR Code /View" />
  </Box>
  <Box style={{ display: "flex", justifyContent: "center" }}>
    <Box className="mainContainer1" style={{ maxWidth: "900px" }}>
      <Box className={classes.viewbox}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Typography variant="h5"> UserName:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2"> sheikh Aman</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5"> User ID:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">  123</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5"> Email:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">Aman@gmail.com</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5"> Mobile Number:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">+856-2345675289</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5">QR Code:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Box className={classes.Qrcode}>
            <img src="images/Qr1.png" alt="images" width="100px" />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5"> Registration Date & Time:</Typography>
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
    </div>
  )
}
