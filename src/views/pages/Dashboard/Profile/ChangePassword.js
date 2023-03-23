import React from "react";
import { Box, Button, makeStyles, TextField } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  textClass: {
    marginTop: "6px",
  },
}));

export default function ChangePassword() {
  const classes = useStyles();
  return (
    <Box>
      <Box>
        <label>Current Password:</label>
        <TextField
          type="text"
          name="cuurentPassword"
          variant="outlined"
          placeholder="Enter your current password"
          className={classes.textClass}
        />
      </Box>
      <Box mt={2}>
        <label>New Password:</label>
        <TextField
          type="text"
          name="newPassword"
          variant="outlined"
          placeholder="Enter your new password"
          className={classes.textClass}
        />
      </Box>
      <Box mt={2}>
        <label>Confirm Password:</label>
        <TextField
          type="text"
          name="confirmPassword"
          variant="outlined"
          placeholder="Confirm your password"
          className={classes.textClass}
        />
      </Box>

      <Box mt={2}>
        <Button color="primary" variant="contained">
          Update
        </Button>
      </Box>
    </Box>
  );
}
