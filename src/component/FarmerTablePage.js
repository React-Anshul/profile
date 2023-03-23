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
import { FiCopy } from "react-icons/fi";
import { toast } from "react-toastify";
import { sortAddress } from "src/utils";
import { Cancel, Edit } from "@material-ui/icons";
import moment from "moment";
import { Tooltip } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import CopyToClipboard from "react-copy-to-clipboard";
import BlockIcon from "@material-ui/icons/Block";
import BlockModal from "src/component/BlockModal";

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "white",
    },
    "&:nth-of-type(even)": {
      backgroundColor: "#2222221a",
    },
  },
}))(TableRow);

export default function CollectionDataChild({
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

  return (
    <>
      <StyledTableRow key={data._id}>
        <TableCell component="th" scope="row">
          {index + 1}
        </TableCell>
        <TableCell align="left">{data.state ? data.state : "N/A"}</TableCell>

        <TableCell align="left">{data?.distric}</TableCell>
        <TableCell align="left">{data?.taluka}</TableCell>
        <TableCell align="left">{data?.taluka}</TableCell>
        <TableCell align="center">{data?.taluka}</TableCell>


       

      
      </StyledTableRow>
      {/* )} */}
    </>
  );
}
