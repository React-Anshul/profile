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
export default function ViewUtility() {
  const classes = useStyles();
  const [status, setStatus] = useState("10");
  const history = useHistory();
  return (
    <Box>
      <Box className="tophead">
        <TopHeaderSection heading="UTILITY MANAGEMENT/ADD" />
      </Box>
    <Box style={{display:"flex",justifyContent :"center"}}>
        <Box className="mainContainer1" style={{maxWidth:"900px"}}>
          <Box className={classes.Box}>
            <Grid container spacing={2}>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box>
                  <Typography variant="h6">Utility Service Name:</Typography>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box>
                  <TextField
                    placeholder="Enter service Name "
                    type="text"
                    variant="outlined"
                    smallWidth
                    size="small"
                  />
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box>
                  <Typography variant="h6">Select Attribute:</Typography>
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
                    <MenuItem value="10">Select Attribute</MenuItem>
                    <MenuItem value="20">Lebel</MenuItem>
                    <MenuItem value="30">Remark</MenuItem>
                    <MenuItem value="40">DropDowan</MenuItem>
                  </Select>
                </Box>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Box>
                  <Typography variant="h5">Fields Description:</Typography>
                </Box>
              </Grid>
              {/* <Grid item lg={12} md={12} sm={12} xs={12}>
              <Box>
                <Typography variant="h4">Text Field:</Typography>
              </Box>
  </Grid>*/}
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box>
                  <Typography variant="h6">Placeholder:</Typography>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box>
                  <TextField
                    placeholder="Enter Placeholder "
                    type="text"
                    variant="outlined"
                    smallWidth
                    size="small"
                  />
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box>
                  <Typography variant="h6">Keypad Type:</Typography>
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
                    <MenuItem value="10">Select type</MenuItem>
                    <MenuItem value="20">Number</MenuItem>
                    <MenuItem value="30">Qwerty</MenuItem>
                    <MenuItem value="40">Alpha</MenuItem>
                  </Select>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box>
                  <Typography variant="h6">Max Length:</Typography>
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
                  <Typography variant="h6">Min Length:</Typography>
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
                  <Typography variant="h6">Identification Name:</Typography>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box>
                  <TextField
                    placeholder="Enter Name e.g. Bill,  Credit "
                    type="text"
                    variant="outlined"
                    smallWidth
                    size="small"
                  />
                </Box>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Box>
                  <Typography variant="h5">Dropdown:</Typography>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box>
                  <Typography variant="h6">Placeholder:</Typography>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box>
                  <TextField
                    placeholder="Placeholder"
                    type="text"
                    variant="outlined"
                    smallWidth
                    size="small"
                  />
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box>
                  <Typography variant="h6">Identification Name:</Typography>
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
                  <Typography variant="h6">Add Lists:</Typography>
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
                  <Typography variant="h6">API Specification:</Typography>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box>
                  <TextField
                    placeholder="Enter URL"
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
                    placeholder="Enter Request Parameter"
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
                  <Select
                    variant="outlined"
                    fullWidth
                    onChange={(e) => setStatus(e.target.value)}
                    value={status}
                  >
                    <MenuItem value="10">Select Method</MenuItem>
                    <MenuItem value="20">Get</MenuItem>
                    <MenuItem value="30">Post</MenuItem>
                  </Select>
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
  );
}
