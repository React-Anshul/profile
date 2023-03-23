import React from "react";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: "0.5rem",
    marginTop: "6px",
  },
}));

export default function Item({ icon, name, tabview, setTabView }) {
  const classes = useStyles();
  const subheading = {
    true: {
      opacity: 1,
    },
    false: {
      opacity: 0,
      display: "none",
    },
  };
  const tabTruncatedName = tabview.split("M")[0];
  const selectedName = name.split(" ")[0];
  return (
    <Box
      className="item"
      style={
        selectedName === tabTruncatedName
          ? { background: "#15992e ", color: "#fff" }
          : {}
      }
      onClick={() => setTabView()}
    >
      <Box className={classes.icon}>{icon}</Box>
      <span variants={subheading}>{name}</span>
    </Box>
  );
}
