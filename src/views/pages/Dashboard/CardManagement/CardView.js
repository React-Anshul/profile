import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  makeStyles,
  MenuItem,
  Select,
  Button,
  Container,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import TopHeaderSection from "src/component/TopHeaderSection";

import { GrAddCircle } from "react-icons/gr";

const useStyles = makeStyles((theme) => ({
  Box: {
    padding: "0px 150px",
    marginTop: "40px",

    [theme.breakpoints.down("sm")]: {
      padding: "10px",
    },
  },
}));

export default function CardView() {
  const classes = useStyles();
  const [status, setStatus] = useState("10");
  const history = useHistory();

  return (
    <Box>
    <Box className="tophead">
        <TopHeaderSection heading="Card Management" />
      </Box>
     <Container maxWidth="md">
     <Box className="mainContainer1">
     
     <Box className={classes.Box}>
       <Grid item lg={6} md={6} sm={6} xs={6}>
         <Typography variant="h6">Card Name</Typography>
         <Box>
           <Select
             variant="outlined"
             fullWidth
             onChange={(e) => setStatus(e.target.value)}
             value={status}
           >
             <MenuItem value="10">Select Card</MenuItem>
             <MenuItem value="20">Credit card</MenuItem>
             <MenuItem value="30">Debit Card</MenuItem>
           </Select>
         </Box>
       </Grid>
       <Box mt={4}>
         <Typography variant="h5">Card Image</Typography>
       </Box>

       <Box mt={1}>
         <input type="file" />
       </Box>

       <Box align="center" className="btnbox" style={{}} mt={4}>
         <Button
           variant="contained"
           color="primary"
           className="btn"
           onClick={() => history.push("/card-management")}
         >
           Add
         </Button>
         &nbsp;
         <Button
           variant="contained"
           color="primary"
           onClick={() => history.push("/card-management")}
         >
           Cancel
         </Button>
       </Box>
     </Box>
  
 </Box>
     </Container>
   
    </Box>
  );
}
