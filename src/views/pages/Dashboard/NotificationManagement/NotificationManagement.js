import {
  Box,
  TableCell,
  TableBody,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  Button,
} from "@material-ui/core";
import React from "react";
import MainFiltter from "src/component/MainFiltter";
import MainTable2 from "src/component/MainTable2";
import TopHeaderSection from "src/component/TopHeaderSection";
import { useHistory } from "react-router-dom";
import { Pagination } from "@material-ui/lab";

const data = [
  {
    title: "Latest Notification",
    msg: "Lorem Ipsum is simply dummy text of the printing",
    date: "",
    status: "Active",
  },
  {
    title: "Latest Notification",
    msg: "Lorem Ipsum is simply dummy text of the printing",
    date: "",
    status: "Active",
  },
  {
    title: "Latest Notification",
    msg: "Lorem Ipsum is simply dummy text of the printing",
    date: "",
    status: "Block",
  },
  {
    title: "Latest Notification",
    msg: "Lorem Ipsum is simply dummy text of the printing",
    date: "",
    status: "Active",
  },
  {
    title: "Latest Notification",
    msg: "Lorem Ipsum is simply dummy text of the printing",
    date: "",
    status: "Active",
  },
  {
    title: "Latest Notification",
    msg: "Lorem Ipsum is simply dummy text of the printing",
    date: "",
    status: "Block",
  },
  {
    title: "Latest Notification",
    msg: "Lorem Ipsum is simply dummy text of the printing",
    date: "",
    status: "Active",
  },
  {
    title: "Latest Notification",
    msg: "Lorem Ipsum is simply dummy text of the printing",
    date: "",
    status: "Active",
  },
  {
    title: "Latest Notification",
    msg: "Lorem Ipsum is simply dummy text of the printing",
    date: "",
    status: "Active",
  },
  {
    title: "Latest Notification",
    msg: "Lorem Ipsum is simply dummy text of the printing",
    date: "",
    status: "Active",
  },
];

export default function NotificationManagement() {
  const history = useHistory();

  return (
    <Box>
      <Box
        style={{ display: "flex", justifyContent: "space-between" }}
        className="tophead"
      >
        <TopHeaderSection heading="Notification Management" />
        <Box align="right" className="btnbox">
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push("/notification-view")}
            className="btn"
          >
            Add Notification
          </Button>
        </Box>
      </Box>

      <Box className="mainContainer1">
        <MainFiltter type="notificationfiltter"/>
      </Box>
      <Box className="mainContainer1">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>SR NO.</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Message</TableCell>
                <TableCell>Created Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((value, i) => (
                <MainTable2 value={value} i={i} type="notification" />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box mt={1} display="flex" justifyContent="end">
          <Pagination count={10} variant="outlined" shape="rounded" />
          </Box>
      </Box>
    </Box>
  );
}
