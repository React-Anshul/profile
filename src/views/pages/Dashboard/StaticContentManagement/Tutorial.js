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

function Tutorial() {
  const classes = useStyles();
  return (
    <>
      <Box className="tophead">
        <TopHeaderSection heading="Add Tutorial" />
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
                Title:
              </Grid>
              <Grid item xs={7}>
                <FormControl fullWidth>
                  <TextField
                    type="text"
                    variant="outlined"
                    size="small"
                    name="email"
                    placeholder="Enter Title"
                    fullWidth
                  />
                </FormControl>
              </Grid>
              <Grid item xs={5}>
                Description:
              </Grid>
              <Grid item xs={7}>
                <FormControl fullWidth>
                  <TextField
                    id="outlined-multiline-static"
                    type="text"
                    multiline
                    rows={4}
                    fullWidth
                    placeholder="Enter Description"
                    variant="outlined"
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Box>
          <Box align="center" className="btnbox" style={{}} mt={4}>
            <Button variant="contained" color="primary" className="btn">
              Add
            </Button>
            &nbsp;
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/content-management"
              className="btn"
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Tutorial;
