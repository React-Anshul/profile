import { blockHandler, getUserDataList } from "src/constants/Services/APICall";
import {
  Button,
  Dialog,
  DialogContent,
  MenuItem,
  Select,
  Typography,
  Box,
  makeStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import { toast } from "react-toastify";
import ButtonCircularProgress from "./ButtonCircularProgress";

const useStyles = makeStyles((theme) => ({
  dailogOpen: {
    borderRadius: "25px",
    padding: "20px",
    "& h5": {
      color: "black",
      fontSize: "17px",
      paddingBottom: "1rem",
    },
    "& .MuiDialog-paperWidthSm": {
      padding: "20px",
    },
  },
}));

export default function AcceptModal({ open, setOpen, idd1, type }) {
  const classes = useStyles();
  console.log("idd1--", idd1);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  console.log("status---", status);
  const blockParticularHandler = async (id) => {
    const dataObj = {
      _id: id,
      status: status,
    };
    try {
      setLoading(true);
      const response = await blockHandler("blockUnblockUser", dataObj);
      if (response) {
        toast.success(response.responseMessage);
        getUserDataList();
        setOpen(false);
        setLoading(false);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <Dialog
      className={classes.dailogOpen}
      open={open}
      maxWidth="sm"
      fullWidth
      onClose={() => setOpen(false)}
    >
      <DialogContent>
        <Typography align="center" variant="h5">
          Are you sure want to {type === "request" ? "Accept" : "Reject"} this
          user ?
        </Typography>
      </DialogContent>
      <Box align="center" style={{ marginLeft: "10px", padding: "20px" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            if (!loading) {
              setOpen(false);
            }
          }}
          disabled={loading}
        >
          Close
        </Button>
        <Button
          style={{ marginLeft: "10px" }}
          variant="contained"
          color="primary"
          disabled={loading}
          onClick={() => blockParticularHandler(idd1?._id)}
        >
          Submit
          {loading && <ButtonCircularProgress />}
        </Button>
      </Box>
    </Dialog>
  );
}
