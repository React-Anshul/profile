import React from "react";
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import Wave from "src/component/Wave"

import TextField from "@material-ui/core/TextField";
import {} from "react-feather";
const useStyles = makeStyles((theme) => ({
  footerSection: {
    // background: "#E41D28",
    position: "relative",
    padding: "15px 0px",
    backgroundPosition: " bottom left",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    
   
    
    
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(4),
    },
    "& h4":{
      color:"#fff"
     }
    
  },
  
}));

export default function Liquidity() {
  const classes = useStyles();
  return (
    <>
    <Box>
    <Wave  />
    </Box>
    
      <Box className={classes.footerSection}>
     
        <Typography variant="h5" align="center">
        Copyright @ 2020 All Rights Reserved
        </Typography>
      </Box>
    </>
  );
}
