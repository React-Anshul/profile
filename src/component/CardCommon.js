import { Box, IconButton, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  cardBody: {
    // background: "rgb(24, 160, 136)",
    borderRadius: "5px",
    cursor: "pointer",
    padding: "10px 0px",
    boxShadow: "3px 3px 14px #1514187a",
  },
  cardChild: {
    display: "flex",
    alignItems: "center",
    "& h5": {
      color: "#fff",
      fontSize: "16px",
    },
  },
}));

export default function CardCommon({ data }) {
  const classes = useStyles();
  return (
    <Box
      className={classes.cardBody}
      style={
        data?.title === "All"
          ? { background: "#18A088" }
          : data?.title === "Pending"
          ? { background: "#3C80BA" }
          : data?.title === "Under Review"
          ? { background: "#EB1C24" }
          : data?.title === "Service"
          ? { background: "rgb(0, 191, 0)" }
          : data?.title === "Material"
          ? { background: "rgb(183,61,186)" }
          : data?.title === "Total Farmer"
          ? { background: "rgb(183,61,186)" }
          : data?.title === "Total Delivery"
          ? { background: "rgb(0, 191, 0)" }
          : data?.title === "Total Dispatch"
          ? { background: "rgb(254, 203, 24" }
          : data?.title === "Total Resolve Query"
          ? { background: "rgb(0, 191, 0)" }
          : data.title === "Active Warehouse"
          ? { background: "rgb(183,61,186)" }
          : { background: "rgb(226, 93, 114)" }
      }
    >
      <Box className={classes.cardChild}>
        <IconButton style={{ color: "#fff",marginLeft:"7px" }}>{data.icon}</IconButton>
        <Box style={{ marginLeft: "10px" }}>
          <Typography variant="h5">{data.count}</Typography>
          <Typography variant="h5">{data.title}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
