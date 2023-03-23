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

export default function DeleteModal({ openDeleteModal, setOpenDeleteModal, idd1 }) {
  const classes = useStyles();
  console.log("idd1--", idd1);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  console.log("status---", status);
  const deleteParticularHandler = async (id) => {
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
        setOpenDeleteModal(false);
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
      open={openDeleteModal}
      maxWidth="sm"
      fullWidth
      onClose={() => setOpenDeleteModal(false)}
    >
      <DialogContent>
        <Typography align="center" variant="h5">
          Are you sure want to delete ?
        </Typography>
      </DialogContent>
      <Box align="center" style={{ marginLeft: "10px", padding: "5px 20px" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            if (!loading) {
              setOpenDeleteModal(false);
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
          onClick={() => deleteParticularHandler(idd1?._id)}
        >
          Submit
          {loading && <ButtonCircularProgress />}
        </Button>
      </Box>
    </Dialog>
  );
}
