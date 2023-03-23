import {
  Box,
  TableCell,
  TableBody,
  TableContainer,
  Table,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";
import MainFiltter from "src/component/MainFiltter";
import MainTable2 from "src/component/MainTable2";
import TopHeaderSection from "src/component/TopHeaderSection";
import  Pagination from '@material-ui/lab/Pagination';

const data = [
  {
    username: "Ali",
    userid: "110",
    email: "ali@mailinator.com",
    request: "Email Id Updation",

    date: "",
  },
  {
    username: "Ali",
    userid: "110",
    email: "ali@mailinator.com",
    request: "Name Change",

    date: "",
  },
  {
    username: "Ali",
    userid: "110",
    email: "ali@mailinator.com",
    request: "Email Id Updation",

    date: "",
  },
  {
    username: "Ali",
    userid: "110",
    email: "ali@mailinator.com",
    request: "Email Id Updation",

    date: "",
  },
  {
    username: "Ali",
    userid: "110",
    email: "ali@mailinator.com",
    request: "Email Id Updation",

    date: "",
  },
  {
    username: "Ali",
    userid: "110",
    email: "ali@mailinator.com",
    request: "Email Id Updation",

    date: "",
  },
  {
    username: "Ali",
    userid: "110",
    email: "ali@mailinator.com",
    request: "Email Id Updation",

    date: "",
  },
  {
    username: "Ali",
    userid: "110",
    email: "ali@mailinator.com",
    request: "Passbook Request",

    date: "",
  },
  {
    username: "Ali",
    userid: "110",
    email: "ali@mailinator.com",
    request: "Email Id Updation",

    date: "",
  },
  {
    username: "Ali",
    userid: "110",
    email: "ali@mailinator.com",
    request: "Email Id Updation",

    date: "", 
  },
];

export default function ServiceManagement() {
  return (
    <>
      <Box>
        <Box className="tophead">
          <TopHeaderSection heading="SERVICE REQUEST MANAGEMENT" />
        </Box>
        <Box className="mainContainer1">
          <MainFiltter type="servicefiltter"/>
        </Box>
        <Box className="mainContainer1">
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>SR NO.</TableCell>
                  <TableCell>Username</TableCell>
                  <TableCell>User ID</TableCell>
                  <TableCell>Email ID</TableCell>
                  <TableCell>Service Requests Type</TableCell>
                  <TableCell>Request Date & Time</TableCell>

                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((value, i) => (
                  <MainTable2 value={value} i={i} type="service" />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box mt={1} display="flex" justifyContent="end">
          <Pagination count={10} variant="outlined" shape="rounded" />
          </Box>
        </Box>
      </Box>
    </>
  );
}
