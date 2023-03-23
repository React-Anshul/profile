import React, { useState } from "react";
import {
  TableCell,
  TableRow,
  Avatar,
  Grid,
  Box,
  makeStyles,
  IconButton,
  withStyles,
} from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Cancel, Edit, Block } from "@material-ui/icons";
import { Tooltip } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import CopyToClipboard from "react-copy-to-clipboard";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import DeleteModal from "src/component/DeleteModal";
import ImageModal from "src/component/ImageModal";

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "white",
    },
    "&:nth-of-type(even)": {
      backgroundColor: "#2222221a",
    },
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
}))(TableRow);

export default function FarmerChildData({
  data,
  classes,
  index,
  setIsOpenView,
  setIsOpenEdit,
}) {
  const history = useHistory();
  const [idd1, setidd1] = useState([]);
  const [open, setOpen] = useState(false);
  // const [tabview, setTabView] = useState("");

  const OpenModal = (id) => {
    setidd1(id);
    setOpen(true);
  };

  const [openImage, setOpenImage] = useState(false);
  const [openImageData, setOpenImageData] = useState();
  console.log("-0-0-0-0-0-", openImageData);
  const setDataImage = (data) => {
    setOpenImage(true);
    setOpenImageData(data);
  };

  return (
    <>
      <StyledTableRow key={data._id}>
        <TableCell component="th" scope="row">
          {index + 1}
        </TableCell>

        <TableCell align="left">{data.CategoryName}</TableCell>
        <TableCell align="left">Active</TableCell>
        <TableCell align="left">{data.CreatedDate}</TableCell>
        <TableCell align="left">Jun 22, 2022, 9:37:45 PM</TableCell>

        <TableCell align="left">
          <Box display="flex">
            <Grid container justify="center">
              <Box item display="flex">
                <Tooltip title="View Category Details">
                  <IconButton style={{ padding: "6px 12px" }}>
                    <VisibilityIcon
                      onClick={() => setIsOpenView(true)}
                      style={{
                        fontSize: "25px",
                        cursor: "pointer",
                        marginRight: "5px",
                      }}
                    />
                  </IconButton>
                </Tooltip>
              </Box>
              {open && (
                <DeleteModal
                  open={open}
                  setOpen={(data) => setOpen(data)}
                  idd1={idd1}
                />
              )}
            </Grid>
          </Box>
        </TableCell>
        {openImage && (
          <ImageModal
            openImageData={openImageData}
            openImage={openImage}
            setOpenImage={(data) => setOpenImage(data)}
          />
        )}
      </StyledTableRow>
    </>
  );
}
