import { Box, Typography } from "@material-ui/core";
import React from "react";

export default function DataNotFound() {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        marginTop: "20px",
      }}
    >
      <Typography
        style={{ color: "#626262", fontSize: "16px", marginLeft: "13px" }}
      >
        No data found
      </Typography>
    </Box>
  );
}
