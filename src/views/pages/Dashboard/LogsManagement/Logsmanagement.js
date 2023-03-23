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
import Pagination  from '@material-ui/lab/Pagination';

const data = [
  {
    email: "Convenient",
    date: "",
    ipaddress: "172.165.10",
    browser: "Chrome",
  },
  {
    email: "Convenient",
    date: "",
    ipaddress: "172.165.10",
    browser: "Chrome",
  },
  {
    email: "Convenient",
    date: "",
    ipaddress: "172.165.10",
    browser: "Chrome",
  },
  {
    email: "Convenient",
    date: "",
    ipaddress: "172.165.10",
    browser: "Chrome",
  },
  {
    email: "Convenient",
    date: "",
    ipaddress: "172.165.10",
    browser: "Chrome",
  },
  {
    email: "Convenient",
    date: "",
    ipaddress: "172.165.10",
    browser: "Chrome",
  },
  {
    email: "Convenient",
    date: "",
    ipaddress: "172.165.10",
    browser: "Chrome",
  },
  {
    email: "Convenient",
    date: "",
    ipaddress: "172.165.10",
    browser: "Chrome",
  },
  {
    email: "Convenient",
    date: "",
    ipaddress: "172.165.10",
    browser: "Chrome",
  },
  {
    email: "Convenient",
    date: "",
    ipaddress: "172.165.10",
    browser: "Chrome",
  },
];

export default function Logsmanagement() {
  return (
    <Box>
      <Box className="tophead"> 
          <TopHeaderSection heading="ACTIVITY LOGS ADMIN" />
        </Box>
      <Box className="mainContainer1">
        <MainFiltter />
      </Box>  
      <Box className="mainContainer1">
        <TableContainer>
          <Table>
            <TableHead> 
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Date and Time</TableCell>
                <TableCell>IP Address</TableCell>
                <TableCell>Browser Agent</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((value, i) => (
                <MainTable2 value={value} i={i} type="logs" />
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
