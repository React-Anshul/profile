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
import { useHistory } from "react-router-dom";

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

function AddSocial() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <Box className="tophead">
        <TopHeaderSection heading="SOCIAL LINKS / ADD" />
      </Box>
      <Container maxWidth="md">
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
                Social Name:
              </Grid>
              <Grid item xs={7}>
                <FormControl fullWidth>
                  <TextField
                    type="text"
                    variant="outlined"
                    size="small"
                    name="email"
                    placeholder="Enter Social Name"
                    fullWidth
                  />
                </FormControl>
              </Grid>

              <Grid item xs={5}>
                Social Link:
              </Grid>
              <Grid item xs={7}>
                <FormControl fullWidth>
                  <TextField
                    type="text"
                    variant="outlined"
                    size="small"
                    name="password"
                    placeholder="Enter Social Link"
                    fullWidth
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Box>
          <Box align="center" className="btnbox" style={{}} mt={4}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => history.goBack("")}
              className="btn"
            >
              Add
            </Button>
            &nbsp;
            <Button
              variant="contained"
              color="primary"
              onClick={() => history.goBack("")}
              className="btn"
            >
              Back
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default AddSocial;
