import {
  Box,
  makeStyles,
  Avatar,
  Grid,
  Button,
  Container,
  Typography,
  FormControl,
  TextField,
  FormHelperText,
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

function Changepassword() {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Box className="tophead">
        <TopHeaderSection heading="Change Password" />
      </Box>
      <Box className="mainContainer1">
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "4rem",
          }}
        >
          <Grid container spacing={4} style={{ maxWidth: "600px" }}>
            <Grid item xs={5}>
              Old Password:
            </Grid>
            <Grid item xs={7}>
              <FormControl fullWidth>
                <TextField
                  type="text"
                  variant="outlined"
                  size="small"
                  name="email"
                  placeholder="Old Password"
                  fullWidth
                />
              </FormControl>
            </Grid>
            <Grid item xs={5}>
              New Password:
            </Grid>
            <Grid item xs={7}>
              <FormControl fullWidth>
                <TextField
                  type="text"
                  variant="outlined"
                  size="small"
                  name="password"
                  placeholder="New Password"
                  fullWidth
                />
              </FormControl>
            </Grid>
            <Grid item xs={5}>
              Confirm Password:
            </Grid>
            <Grid item xs={7}>
              <FormControl fullWidth>
                <TextField
                  type="text"
                  variant="outlined"
                  size="small"
                  name="confirm"
                  placeholder="Confirm Password"
                  fullWidth
                />
              </FormControl>
            </Grid>
          </Grid>
        </Box>
        <Box align="center" className="btnbox" style={{}} mt={4}>
          <Button variant="contained" color="primary" className="btn">
            Update Password
          </Button>
          &nbsp;
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/settings"
            className="btn"
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Changepassword;
