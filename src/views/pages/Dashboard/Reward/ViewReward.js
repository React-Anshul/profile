import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  makeStyles,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import React, { useState } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { Link } from "react-router-dom";
import TopHeaderSection from "src/component/TopHeaderSection";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    paddingBottom: "8px",
    marginTop: "100px",
  },
  btn: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    padding: "11px 12px",
    marginTop: "40px",
  },
  mainBox: {
    padding: "0px 150px",
    [theme.breakpoints.down("xs")]: {
      padding: "10px",
    },
  },
  date: {
    [theme.breakpoints.down("xs")]: {},
  },
}));

export default function ViewCrop({ setIsOpenView }) {
  const classes = useStyles();
  const [fromData1, setFromData1] = useState();
  return (
    <>
      <Box className="tophead">
        <TopHeaderSection heading="Reward Management/Add" />
      </Box>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <Box className="mainContainer1" style={{ maxWidth: "fit-content" }}>
          <Box className={classes.mainBox}>
            <Box mt={5}>
              <Typography variant="h5">Reward Title</Typography>
              <Box mt={1}>
                <TextField
                  placeholder="New Reward "
                  type="text"
                  variant="outlined"
                  smallWidth
                  size="small"
                />
              </Box>
            </Box>

            <Box mt={2}>
              <Typography variant="h5">Discription</Typography>
              <Box mt={1}>
                <TextField
                  placeholder="Lorem Ipsum is simply dummy text of the printing and
               
              typesetting industry.   "
                  type="text"
                  variant="outlined"
                  multiline
                  rows={4}
                  smallWidth
                  size="small"
                />
              </Box>
            </Box>
            <Box mt={1}>
              <Typography variant="h5">Reward Points</Typography>
              <Box mt={1}>
                <TextField
                  placeholder="100 "
                  type="text"
                  variant="outlined"
                  smallWidth
                  size="small"
                />
              </Box>
            </Box>
            <Grid container spacing={2}>
              <Grid item lg={6} md={12} sm={12} xs={12}>
             
                <Box mt={2}>
                  <Typography variant="h5">Validity</Typography>
                </Box>
                <Box mt={1}>
                  <Typography variant="body2">From Date:</Typography>
                  <KeyboardDatePicker
                    className={classes.date}
                    style={{ width: "100%", height: "40px" }}
                    placeholder="DD/MM/YYYY"
                    format="DD/MM/YYYY"
                    inputVariant="outlined"
                    disableFuture
                    name="dateOfBirth"
                    value={fromData1}
                    onChange={(date) => setFromData1(date)}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <Box mt={6}>
                  <Typography variant="body2">To Date:</Typography>
                  <KeyboardDatePicker
                    className={classes.date}
                    style={{ width: "100%", height: "40px" }}
                    placeholder="DD/MM/YYYY"
                    format="DD/MM/YYYY"
                    inputVariant="outlined"
                    disableFuture
                    name="dateOfBirth"
                    value={fromData1}
                    onChange={(date) => setFromData1(date)}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
            <Box className={classes.btn}>
              <Button
                variant="contained"
                type="submit"
                color="primary"
                smallWidth
                component={Link}
                to="/reward-management"
              >
                Back
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
