import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    border: "1px solid #332262",
    // padding: 20px 25px 40px;
    background: "rgba(23, 12, 65, 0.4)",
    boxSizing: "border-box",
    padding: "20px",
    "& h2": {
      fontSize: "22px",
      fontWeight: "400",

      color: "#fff",
    },
  },
}));

function DashboardAccount() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Typography variant="h2">DashboardAccount</Typography>
      </Box>
    </>
  );
}

export default DashboardAccount;
