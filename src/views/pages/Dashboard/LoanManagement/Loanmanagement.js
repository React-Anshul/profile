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
import { Pagination } from "@material-ui/lab";


const data = [
  {
    username: "Ali",
    email: "ali@gmail.com",
    mobile:"8750825220",
    nationality: "Indian",
    applyfor: "Personal Loan",
    status: "Pending",
    date:"",
  },
  {
    username: "Ali",
    email: "ali@gmail.com",
    mobile:"8750825220",
    nationality: "Indian",
    applyfor: "Personal Loan",
    status: "Pending",
    date:"",
  },
  {
    username: "Ali",
    email: "ali@gmail.com",
    mobile:"8750825220",
    nationality: "Indian",
    applyfor: "Personal Loan",
    status: "Pending",
    date:"",
  },
  {
    username: "Ali",
    email: "ali@gmail.com",
    mobile:"8750825220",
    nationality: "Indian",
    applyfor: "Personal Loan",
    status: "Pending",
    date:"",
  },
  {
    username: "Ali",
    email: "ali@gmail.com",
    mobile:"8750825220",
    nationality: "Indian",
    applyfor: "Personal Loan",
    status: "Pending",
    date:"",
  },
  {
    username: "Ali",
    email: "ali@gmail.com",
    mobile:"8750825220",
    nationality: "Indian",
    applyfor: "Personal Loan",
    status: "Pending",
    date:"",
  },
  {
    username: "Ali",
    email: "ali@gmail.com",
    mobile:"8750825220",
    nationality: "Indian",
    applyfor: "Personal Loan",
    status: "Pending",
    date:"",
  },
  {
    username: "Ali",
    email: "ali@gmail.com",
    mobile:"8750825220",
    nationality: "Indian",
    applyfor: "Personal Loan",
    status: "Pending",
    date:"",
  },
  {
    username: "Ali",
    email: "ali@gmail.com",
    mobile:"8750825220",
    nationality: "Indian",
    applyfor: "Personal Loan",
    status: "Pending",
    date:"",
  },
  {
    username: "Ali",
    email: "ali@gmail.com",
    mobile:"8750825220",
    nationality: "Indian",
    applyfor: "Personal Loan",
    status: "Pending",
    date:"",
  },

];

export default function Loanmanagement() {

  return (
    <Box>
       <Box className="tophead">
          <TopHeaderSection heading="Loan Management" />
        </Box>
      <Box className="mainContainer1">
        <MainFiltter  type="loanfiltter"/>
      </Box>
      <Box className="mainContainer1">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>SR NO.</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Mobile Number</TableCell>
                <TableCell>Nationality</TableCell>
                <TableCell>Apply For</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Loan Apply Date</TableCell>
                <TableCell>Action </TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((value, i) => (
                <MainTable2 value={value} i={i} type="loan" />
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
