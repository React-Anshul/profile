import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Grid,
  Typography,
} from "@material-ui/core";
import { TextField } from "@material-ui/core";

export default function ApproveLoan({ approveOpen, setApproveOpen, state }) {
  return (
    <Box>
      <Dialog
        open={approveOpen}
        onClose={() => setApproveOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogContent>
          <Box align="center">
            <Box mb={1}>
              <Typography variant="h4">Approve Loan</Typography>
            </Box>
            <Box mb={1}>
              <Typography variant="body2">
                Are you sure you want to approve loan of this user?
              </Typography>
            </Box>
            
              {state === "reject" && (
                
                <Grid container spacing={2} style={{margin:"20px 0px"}} >
                  <Grid item xs={12} sm={2}>
                    <Typography variant="body2">Reason: </Typography>
                  </Grid>
                  <Grid xs={12} sm={10}>
                    <TextField
                      fullWidth
                      placeholder="Enter reason here..."
                      variant="outlined"
                      multiline
                      rows={5}
                    />
                  </Grid>
                </Grid>
               
              )}
           
            <Box style={{ display: "flex", justifyContent: "center" }} mt={2} mb={2}>
              <Button variant="contained" color="primary">
                Yes
              </Button>
              <Box ml={3}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setApproveOpen(false)}
                >
                  No
                </Button>
              </Box>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
