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
import Pagination from '@material-ui/lab/Pagination';
import MainFiltter from "src/component/MainFiltter";
import MainTable from "src/component/MainTable";
import TopHeaderSection from "src/component/TopHeaderSection";

const data = [
  {
    firstname: "jatin",
    lastname: "Dutt",
    email: "jatin@mailinator.com",
    numder: "+91844512305",
    Nationality: "Indian",
    Status: "Active",
    date: "",
  },
  {
    firstname: "jatin",
    lastname: "Dutt",
    email: "jatin@mailinator.com",
    numder: "+91844512305",
    Nationality: "Indian",
    Status: "Active",
    date: "",
  },
  {
    firstname: "jatin",
    lastname: "Dutt",
    email: "jatin@mailinator.com",
    numder: "+91844512305",
    Nationality: "Indian",
    Status: "Active",
    date: "",
  },
  {
    firstname: "jatin",
    lastname: "Dutt",
    email: "jatin@mailinator.com",
    numder: "+91844512305",
    Nationality: "Indian",
    Status: "Active",
    date: "",
  },
  {
    firstname: "jatin",
    lastname: "Dutt",
    email: "jatin@mailinator.com",
    numder: "+91844512305",
    Nationality: "Indian",
    Status: "Active",
    date: "",
  },
  {
    firstname: "jatin",
    lastname: "Dutt",
    email: "jatin@mailinator.com",
    numder: "+91844512305",
    Nationality: "Indian",
    Status: "Active",
    date: "",
  },
  {
    firstname: "jatin",
    lastname: "Dutt",
    email: "jatin@mailinator.com",
    numder: "+91844512305",
    Nationality: "Indian",
    Status: "Active",
    date: "",
  },
  {
    firstname: "jatin",
    lastname: "Dutt",
    email: "jatin@mailinator.com",
    numder: "+91844512305",
    Nationality: "Indian",
    Status: "Active",
    date: "",
  },
  {
    firstname: "jatin",
    lastname: "Dutt",
    email: "jatin@mailinator.com",
    numder: "+91844512305",
    Nationality: "Indian",
    Status: "Active",
    date: "",
  },
  {
    firstname: "jatin",
    lastname: "Dutt",
    email: "jatin@mailinator.com",
    numder: "+91844512305",
    Nationality: "Indian",
    Status: "Active",
    date: "",
  },
];

export default function usermanagement() {
  return (
    <>
      <Box>
        <Box className="tophead">
          <TopHeaderSection heading="Recharge Report" />
        </Box>
        <Box className="mainContainer1">
          <MainFiltter />
        </Box>
        <Box className="mainContainer1">
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>SR NO.</TableCell>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Mobile Number</TableCell>
                  <TableCell>Nationality</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Registration Date & Time</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((value, i) => (
                  <MainTable value={value} i={i} type="user" />
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
