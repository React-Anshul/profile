import {
  Box,
  makeStyles,
  Avatar,
  Grid,
  Button,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

import TopHeaderSection from "src/component/TopHeaderSection";
import { useHistory } from "react-router-dom";
import ApproveLoan from "src/component/ApproveLoan";


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
  avatarsection: {
    width: "100%",
    "& .MuiAvatar-root": {
      borderRadius: "10px !important",
    },
    "& .MuiAvatar-img": {
      width: "100% !important",
      borderRadius: "10px",
    },
  },
  avatar: {
    width: "100%",
    minHeight: "200px",
    background: "#b7b7b7",
  },
  btn: {
    marginTop: "30px",
    padding: "7px 35px",
  },
  viewbox: {
    paddingLeft: "100px",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "0px",
    },
  },
  btnbox: {
    display: "flex",
    justifyContent: "space-evenly",
  },
}));

function ViewLoan() {
  const history = useHistory();
  const classes = useStyles();
  const [approveOpen, setApproveOpen] = React.useState(false);
  const [state, setState] = useState();
  const rejectloanhandler = () => {
    setApproveOpen(true);
    setState("reject");
  };
  const acceptloanhandler = () => {
    setApproveOpen(true);
    setState("accept");
  };

  return (
    <>
      <Box className="tophead">
        <TopHeaderSection heading="LOAN MANAGEMENT / DETAIL" />
      </Box>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <Box className="mainContainer1" style={{ maxWidth: "900px" }}>
          <Box className={classes.viewbox}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Typography variant="h6">Name:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2"> Ali</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6"> Email:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2"> Ali@gmail.com</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6"> Mobile Number:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">+91 854586585</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6"> Whatsapp Number:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">+91 854586585</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6"> Gender:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2"> Male</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6"> DOB:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2"> 15-11-2000</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6"> Nationality:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2"> Laos</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6"> Address:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">Vientiane</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">
                  {" "}
                  KYC Doc ID Card/ Passport:
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} style={{ width: "100%" }}>
                <Box className={classes.avatarsection}>
                  <Avatar
                    src="/images/addhar.jpeg"
                    className={classes.avatar}
                  />
                </Box>
                <Typography variant="body2"> Frontside Image</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6"> Document Expiry Date:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">22-11-2050</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">Loan Apply For :</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">Personal Loan</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">Status:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2"> Active</Typography>
              </Grid>
            </Grid>
          </Box>
          <Box className={classes.btnbox} mt={2} mb={2}>
            <Button
              variant="contained"
              color="primary"
              className={classes.btn}
              onClick={acceptloanhandler}
            >
              Approve
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.btn}
              onClick={rejectloanhandler}
            >
              Reject
            </Button>
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
        <ApproveLoan
          setApproveOpen={setApproveOpen}
          approveOpen={approveOpen}
          state={state}
        />
      </Box>
    </>
  );
}

export default ViewLoan;
