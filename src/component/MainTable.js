import React, { useState } from "react";
import {
  makeStyles,
  TableCell,
  TableRow,
  Box,
  Button,
  IconButton,
  Avatar,
  MenuItem,
  withStyles,
  Menu,
  Typography,
} from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { useHistory } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import BlockIcon from "@material-ui/icons/Block";
import moment from "moment";
import Axios from "axios";

import { toast } from "react-toastify";
import DeleteModal from "./DeleteModal";
import BlockModal from "./BlockModal";
const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      // backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);
const StyledMenu = withStyles({
  paper: {
    backgroundColor: "#FFFFFF !important",
    minWidth: "120px !important",
    boxShadow: "0px 0px 11px rgba(0, 0, 0, 0.16)",
    borderRadius: "5px",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const useStyles = makeStyles((theme) => ({
  NameBox: {
    display: "flex",
    alignItems: "center",
    "& .MuiAvatar-root": {
      paddingRight: "20px",
    },
  },
  winBox: {
    display: "flex",
    alignItems: "center",
    "& img": {
      paddingRight: "10px",
    },
  },

  addStoryMenu: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    padding: "5px 0px",
    "& figure": {
      margin: "0px",
      width: "15px",
      height: "15px",
      "& img": {
        width: "100%",
      },
    },
    "& p": {
      marginLeft: "10px",
    },
  },
  tablespace: {
    whiteSpace: "pre",
  },
}));
export default function MainTable({
  value,
  i,
  type,
  OpenModal,
  listProuctHandler,
}) {
  const classes = useStyles();
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = useState(false);
  const [productData, setProductData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [productName, setProductName] = useState("");
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
  const [openBlockModal, setOpenBlockModal] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const productdata = (data) => {
    setProductData(data);
    setProductName("Product");
  };
  const productdata1 = (data) => {
    setProductData(data);
    setProductName("Service");
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <TableRow>
        <>
          <TableCell>{i + 1}</TableCell>

          {type === "user" && (
            <>
              <TableCell>{value?.firstname}</TableCell>
              <TableCell>{value?.lastname}</TableCell>
              <TableCell>{value?.email}</TableCell>
              <TableCell>{value?.numder}</TableCell>
              <TableCell>{value?.Nationality}</TableCell>
              <TableCell>{value?.Status}</TableCell>
              <TableCell>{moment(value?.createdAt).format("lll")}</TableCell>
              <TableCell>
                <IconButton onClick={() => history.push("/user-view")}>
                  <VisibilityIcon />
                </IconButton>
                &nbsp;
                <IconButton onClick={() => setOpenDeleteModal(true)}>
                  <DeleteIcon />
                </IconButton>{" "}
                &nbsp;
                <IconButton onClick={() => history.push("/user-view")}>
                  <EditIcon />
                </IconButton>
                &nbsp;
                <IconButton onClick={() => setOpenBlockModal(true)}>
                  &nbsp;
                  <BlockIcon />
                </IconButton>
              </TableCell>
            </>
          )}
          {type === "qrcodemanagement" && (
            <>
              <TableCell>{value?.username}</TableCell>
              <TableCell>{value?.email}</TableCell>
              <TableCell>{value?.scan}</TableCell>
              <TableCell>{moment(value?.createdAt).format("lll")}</TableCell>
              <TableCell>
                <IconButton>
                  <VisibilityIcon />
                </IconButton>
              </TableCell>
            </>
          )}
          {type === "fundmanagement" && (
            <>
              <TableCell>{value?.username}</TableCell>
              <TableCell>{value?.userid}</TableCell>
              <TableCell>{value?.email}</TableCell>
              <TableCell>{value?.amount}</TableCell>
              <TableCell>{value?.date}</TableCell>
              {/* <TableCell>{moment(value?.createdAt).format("lll")}</TableCell> */}
              <TableCell>
               
                <IconButton onClick={()=> history.push("/fund-view")}>
                  <VisibilityIcon />
                </IconButton>
                &nbsp;
                <IconButton onClick={() => setOpenDeleteModal(true)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </>
          )}
          {type === "agencymanagement" && (
            <>
              <TableCell>{value?.agencyname}</TableCell>
              <TableCell>{value?.email}</TableCell>
              <TableCell>{value?.service}</TableCell>
              <TableCell>{value?.servicetype}</TableCell>

              <TableCell>
                <IconButton onClick={()=> history.push("/agency-view")}>
                  <VisibilityIcon />
                </IconButton>
              </TableCell>
            </>
          )}
          {type === "userdata" && (
            <>
              <TableCell>{value?.name}</TableCell>
              <TableCell>{value?.id}</TableCell>
              <TableCell>{value?.amount}</TableCell>
              <TableCell>{value?.status}</TableCell>
              <TableCell>{value?.date}</TableCell>
            </>
          )}
          {type === "utilitymanagement" && (
            <>
              <TableCell>{value?.title}</TableCell>
              <TableCell>{value?.createdate}</TableCell>
              <TableCell>{value?.updatedate}</TableCell>
              <TableCell>
                <IconButton onClick={() => history.push("/utility-service")}>
                  <VisibilityIcon />
                </IconButton>
                &nbsp;
                <IconButton onClick={() => setOpenDeleteModal(true)}>
                  <DeleteIcon />
                </IconButton>
                <IconButton onClick={() => setOpenBlockModal(true)}>
                  &nbsp;
                  <BlockIcon />
                </IconButton>
              </TableCell>
            </>
          )}
        </>
      </TableRow>

      <DeleteModal
        openDeleteModal={openDeleteModal}
        setOpenDeleteModal={setOpenDeleteModal}
      />
      <BlockModal
        openBlockModal={openBlockModal}
        setOpenBlockModal={setOpenBlockModal}
      />
    </>
  );
}
