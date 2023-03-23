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
import DeleteModal from "./DeleteModal";
import BlockModal from "./BlockModal";
import { Link } from "react-router-dom";

import Axios from "axios";

import { toast } from "react-toastify";
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
export default function MainTable2({
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

          {type === "transaction" && (
            <>
              <TableCell>{value?.transactionid}</TableCell>
              <TableCell>{value?.transactiontype}</TableCell>
              <TableCell>
                {moment(value?.createdAt).format("lll")}
              </TableCell>{" "}
              <TableCell>{value?.amount}</TableCell>
              <TableCell>{value?.status}</TableCell>
              <TableCell>
                <IconButton onClick={() => history.push("/transaction-view")}>
                  <VisibilityIcon />
                </IconButton>
              </TableCell>
            </>
          )}
          {type === "reward" && (
            <>
              <TableCell>{value?.reward}</TableCell>
              <TableCell>{value?.period}</TableCell>
              <TableCell>{value?.description}</TableCell>
              <TableCell>
                {moment(value?.createdAt).format("lll")}
              </TableCell>{" "}
              <TableCell>{value?.status}</TableCell>
              <TableCell>
                <IconButton onClick={() => history.push("/reward-view")}>
                  <VisibilityIcon />
                </IconButton>
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
          {type === "loan" && (
            <>
              <TableCell>{value?.username}</TableCell>
              <TableCell>{value?.email}</TableCell>
              <TableCell>{value?.mobile}</TableCell>
              <TableCell>{value?.nationality}</TableCell>
              <TableCell>{value?.applyfor}</TableCell>
              <TableCell>{value?.status}</TableCell>
              <TableCell>
                {moment(value?.createdAt).format("lll")}
              </TableCell>{" "}
              <TableCell>
                <IconButton onClick={()=> history.push("/view-loan")}>
                  <VisibilityIcon />
                </IconButton>&nbsp;
                <IconButton onClick={() => setOpenDeleteModal(true)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </>
          )}
          {type === "notification" && (
            <>
              <TableCell>{value?.title}</TableCell>
              <TableCell>{value?.msg}</TableCell>
              <TableCell>
                {moment(value?.createdAt).format("lll")}
              </TableCell>{" "}
              <TableCell>{value?.status}</TableCell>
              <TableCell>
                <IconButton component={Link} to="/notification-view">
                  <VisibilityIcon />
                </IconButton>
                &nbsp;
                <IconButton component={Link} to="/notification-edit">
                  <EditIcon />
                </IconButton>
                &nbsp;
                <IconButton onClick={() => setOpenDeleteModal(true)}>
                  <DeleteIcon />
                </IconButton>
                &nbsp;
                <IconButton onClick={() => setOpenBlockModal(true)}>
                  &nbsp;
                  <BlockIcon />
                </IconButton>
              </TableCell>
            </>
          )}
          {type === "static" && (
            <>
              <TableCell>{value?.title}</TableCell>
              <TableCell>{value?.description}</TableCell>

              <TableCell>
                <IconButton onClick={() => history.push("/tutorial-view")} >
                  <VisibilityIcon />
                </IconButton>
                &nbsp;
                <IconButton>
                  <EditIcon />
                </IconButton>
                &nbsp;
                <IconButton onClick={() => setOpenDeleteModal(true)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </>
          )}
          {type === "logs" && (
            <>
              <TableCell>{value?.email}</TableCell>
              <TableCell>
                {moment(value?.createdAt).format("lll")}
              </TableCell>{" "}
              <TableCell>{value?.ipaddress}</TableCell>
              <TableCell>{value?.browser}</TableCell>
            </>
          )}
          {type === "banner" && (
            <>
              <TableCell>{i + 1}</TableCell>
              <TableCell>{value?.title}</TableCell>
              {/* <TableCell><img src={value?.image}/></TableCell> */}
              <Avatar src={value?.image} />
              <TableCell>
                {moment(value?.createdAt).format("lll")}
              </TableCell>{" "}
              <TableCell>
                <IconButton onClick={()=> history.push("/banner-view")}>
                  <VisibilityIcon />
                </IconButton>&nbsp;
                <IconButton onClick={()=> history.push("/banner-update")}>
                  <EditIcon />
                </IconButton>
                &nbsp;
                <IconButton onClick={() => setOpenDeleteModal(true)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </>
          )}
          {type === "service" && (
            <>
             
              <TableCell>{value?.username}</TableCell>
              <TableCell>{value?.userid}</TableCell>
              <TableCell>{value?.email}</TableCell>
              <TableCell>{value?.request}</TableCell>
              <TableCell>
                {moment(value?.createdAt).format("lll")}
              </TableCell>{" "}
              <TableCell>
                <IconButton onClick={() => history.push("/service-view")}>
                  <VisibilityIcon />
                </IconButton>
              </TableCell>
            </>
          )}
          {type === "staticmain" && (
            <>
             
              <TableCell>{value?.content}</TableCell>
              
           
              <TableCell>
              {value?.content === "Tutorial Management" ? (<IconButton onClick={() => history.push("/tutorial-management")}>
                  <VisibilityIcon />
                </IconButton>):value?.content === "Terms & Conditions"?(<IconButton onClick={() => history.push("/terms-condition")}>
                  <VisibilityIcon />
                </IconButton>):value?.content === "Privacy Policy"?(<IconButton onClick={() => history.push("/tutorial-view")}>
                  <VisibilityIcon />
                </IconButton>):value?.content === "Social Links"?(<IconButton onClick={() => history.push("/social-links")}>
                  <VisibilityIcon />
                </IconButton>):("")}
                
              </TableCell>
            </>
          )}
          {type === "social" && (
            <>
             
              <TableCell>{value?.socialname}</TableCell>
              <TableCell>{value?.sociallinks}</TableCell>
              
             
              <TableCell>
              <IconButton onClick={()=> history.push("/add-social")}>
                  <EditIcon />
                </IconButton>
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
        <DeleteModal
          openDeleteModal={openDeleteModal}
          setOpenDeleteModal={setOpenDeleteModal}
        />
        <BlockModal
          openBlockModal={openBlockModal}
          setOpenBlockModal={setOpenBlockModal}
        />
      </TableRow>
    </>
  );
}
