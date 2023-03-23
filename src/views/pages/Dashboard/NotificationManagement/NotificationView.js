import {
  Box,
  Container,
  makeStyles,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";

import React, { useState } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { Link } from "react-router-dom";
import TopHeaderSection from "src/component/TopHeaderSection";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    paddingBottom: "8px",
    marginTop: "100px",
  },

  mainBox: {
    padding: "0px 150px",
    [theme.breakpoints.down("xs")]: {
      padding: "10px",
    },
  },
}));

export default function ViewCrop({ setIsOpenView }) {
  const classes = useStyles();
  const [fromData1, setFromData1] = useState();
  return (
    <Container maxWidth="md">
      <Box className="tophead">
        <TopHeaderSection heading="NOTIFICATION MANAGEMENT/ADD" />
      </Box>
      <Box className="mainContainer1">
        <Box className={classes.mainBox}>
          <Box mt={5}>
            <Typography variant="h5">Notification Title</Typography>
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

          <Box mt={5}>
            <Typography variant="h5">Message</Typography>
            <Box mt={1}>
              <TextField
                placeholder="Lorem Ipsum is simply dummy text of the printing and
                 
                typesetting industry.   "
                type="text"
                variant="outlined"
                multiline
                rows={8}
                smallWidth
                size="small"
              />
            </Box>
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
              to="/notification-management"
              className="btn"
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
