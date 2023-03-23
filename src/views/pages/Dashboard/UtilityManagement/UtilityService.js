import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Button,
  Container,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import TopHeaderSection from "src/component/TopHeaderSection";
const useStyles = makeStyles((theme) => ({
  Box: {
    padding: "0px 150px",
    marginTop: "40px",

    [theme.breakpoints.down("sm")]: {
      padding: "10px",
    },
  },
  btn: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    // padding: "5px 12px",
  },
}));
export default function UtilityService() {
    const classes = useStyles();
  const [status, setStatus] = useState("10");
  const history = useHistory();
  return (
    <Box>
      <Box className="tophead">
        <TopHeaderSection heading="UTILITY MANAGEMENT / ADD" />
      </Box>
    <Box style={{display:"flex",justifyContent :"center"}}>
        <Box className="mainContainer1" style={{maxWidth:"900px"}}>
          <Box className={classes.Box}>
            <Grid container spacing={2}>
              <Grid item lg={6} md={6} sm={6} xs={6}>
                <Box>
                  <Typography variant="h6">Utility Service Name:</Typography>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={6}>
                <Box>
                 <Typography variant="h6">Pay Electricity Bill</Typography>
                </Box>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
              <Box>
                <Typography variant="h5">Dropdown:</Typography>
              </Box>
            </Grid>


              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box>
                  <Typography variant="h6">State:</Typography>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box>
                  <Select
                    variant="outlined"
                    fullWidth
                    onChange={(e) => setStatus(e.target.value)}
                    value={status}
                  >
                    <MenuItem value="10">Select State</MenuItem>
                    <MenuItem value="20">New Delhi</MenuItem>
                    <MenuItem value="30">Bihar</MenuItem>
                    <MenuItem value="40">Pune</MenuItem>
                  </Select>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box>
                  <Typography variant="h6">Electricity Board:</Typography>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box>
                  <Select
                    variant="outlined"
                    fullWidth
                    onChange={(e) => setStatus(e.target.value)}
                    value={status}
                  >
                    <MenuItem value="10">Select Electricity Board</MenuItem>
                    <MenuItem value="20">New Delhi</MenuItem>
                    <MenuItem value="30">Bihar</MenuItem>
                    <MenuItem value="40">Pune</MenuItem>
                  </Select>
                </Box>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
              <Box>
                <Typography variant="h5">Text Field:</Typography>
              </Box>
            </Grid>
              {/* <Grid item lg={12} md={12} sm={12} xs={12}>
              <Box>
                <Typography variant="h4">Text Field:</Typography>
              </Box>
  </Grid>*/}
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box>
                  <Typography variant="h6">Account Number:</Typography>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box>
                  <TextField
                    placeholder="Enter Account Number "
                    type="text"
                    variant="outlined"
                    smallWidth
                    size="small"
                  />
                </Box>
              </Grid>
           
             
              
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box>
                  <Typography variant="h6">API Specification:</Typography>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box>
                  <TextField
                    placeholder="Google.com"
                    type="text"
                    variant="outlined"
                    smallWidth
                    size="small"
                  />
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box>
                  <Typography variant="h6">Request Parameter:</Typography>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box>
                  <TextField
                    placeholder=""
                    type="text"
                    variant="outlined"
                    smallWidth
                    size="small"
                  />
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box>
                  <Typography variant="h6">API Method Type:</Typography>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box>
                <Box>
                <TextField
                  placeholder="Post"
                  type="text"
                  variant="outlined"
                  smallWidth
                  size="small"
                />
              </Box>
                </Box>
              </Grid>
              </Grid>
              <Grid item lg={12}>
                <Box className={classes.btn} mt={2}>
                  <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    smallWidth
                    size="large"
                    onClick={() => history.push("/utility-management")}
                  >
                    Back
                  </Button>
                </Box>
              </Grid>
          </Box>
        </Box>
        </Box>
    
    </Box>
  )
}
