import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";

export default function NoDataFound() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      style={{ marginTop: "-10px", marginLeft: "13px" }}
    >
      <Typography style={{ color: "#fff" }}>No Data Found</Typography>
    </Box>
  );
}
