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
import FiltterSection from "src/component/FiltterSection";
import MainTable from "src/component/MainTable";
import TopHeaderSection from "src/component/TopHeaderSection";
import  {Pagination } from "@material-ui/lab";

const fundData = [
  {
    username: "jatin",
    userid: "234234",
    email: "jatin@mailinator.com",
    amount: "₭ 10000",

    date: "Jun 22, 2022, 9:37:45 PM",
  },
  {
    username: "jatin",
    userid: "234234",
    email: "jatin@mailinator.com",
    amount: "₭ 10000",

    date: "Jun 22, 2022, 9:37:45 PM",
  },
  {
    username: "jatin",
    userid: "234234",
    email: "jatin@mailinator.com",
    amount: "₭ 10000",

    date: "Jun 22, 2022, 9:37:45 PM",
  },
  {
    username: "jatin",
    userid: "234234",
    email: "jatin@mailinator.com",
    amount: "₭ 10000",

    date: "Jun 22, 2022, 9:37:45 PM",
  },
  {
    username: "jatin",
    userid: "234234",
    email: "jatin@mailinator.com",
    amount: "₭ 10000",

    date: "Jun 22, 2022, 9:37:45 PM",
  },
  {
    username: "jatin",
    userid: "234234",
    email: "jatin@mailinator.com",
    amount: "₭ 10000",

    date: "Jun 22, 2022, 9:37:45 PM",
  },
  {
    username: "jatin",
    userid: "234234",
    email: "jatin@mailinator.com",
    amount: "₭ 10000",

    date: "Jun 22, 2022, 9:37:45 PM",
  },
  {
    username: "jatin",
    userid: "234234",
    email: "jatin@mailinator.com",
    amount: "₭ 10000",

    date: "Jun 22, 2022, 9:37:45 PM",
  },
  {
    username: "jatin",
    userid: "234234",
    email: "jatin@mailinator.com",
    amount: "₭ 10000",

    date: "Jun 22, 2022, 9:37:45 PM",
  },
];

export default function CropManagement() {
  return (
    <Box>
      <Box className="tophead">
        <TopHeaderSection heading="Fund Transfer Management" />
      </Box>
      <Box className="mainContainer1">
        <FiltterSection />
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
                <TableCell>Transaction Amount</TableCell>
                <TableCell>Transaction Date & Time</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {fundData.map((value, i) => (
                <MainTable value={value} i={i} type="fundmanagement" />
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
