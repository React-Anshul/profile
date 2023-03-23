import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  imgSection: {
    display: "flex",
    paddingBottom: "1rem",
    "@media(max-width:565px)": {
      display: "block",
    },

    "& img": {
      width: "250px",
      "@media(max-width:565px)": {
        width: "100%",
      },
    },
  },
  mainBody: {
    "& h5": {
      fontSize: "13px",
      paddingBottom: "8px",
    },
  },
}));

export default function ViewCrop({ setIsOpenView }) {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.mainBody} maxWidth="xxl">
        <Box className="mainContainer">
          <Box className="arrowSection">
            <IconButton onClick={() => setIsOpenView(false)}>
              <ArrowBack />
            </IconButton>
            <Typography variant="h3">View Crop</Typography>
          </Box>

          <Box pt={2} pb={2}>
            <Divider />
          </Box>
          <Grid container>
            <Grid item lg={12} sm={12} md={12} xs={12}>
              <Box className={classes.imgSection}>
                <img src="images/onion.jpeg" />
                <img src="images/potato.png" />
              </Box>
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={3}>
              <Typography variant="h5">Crop Name</Typography>
            </Grid>
            <Grid item lg={1} md={1} sm={1} xs={1}>
              <Typography variant="h5">:</Typography>
            </Grid>
            <Grid item lg={8} md={8} sm={8} xs={8}>
              <Typography variant="h5">Onion</Typography>
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={3}>
              <Typography variant="h5">Crop Description</Typography>
            </Grid>
            <Grid item lg={1} md={1} sm={1} xs={1}>
              <Typography variant="h5">:</Typography>
            </Grid>
            <Grid item lg={8} md={8} sm={8} xs={8}>
              <Typography variant="h5">
                When the plants of the same kind are cultivated at the one place
                on a large scale
              </Typography>
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={3}>
              <Typography variant="h5">Created Date</Typography>
            </Grid>
            <Grid item lg={1} md={1} sm={1} xs={1}>
              <Typography variant="h5">:</Typography>
            </Grid>
            <Grid item lg={8} md={8} sm={8} xs={8}>
              <Typography variant="h5">15/06/2022 13:09</Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
