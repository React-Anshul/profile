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
    transactionid: "ch3LZzHcT",
    transactiontype: "Card Payment",
    date: "",
    amount: "1,000",
    status: "Completed",
  },
  {
    transactionid: "ch3LZzHcT",
    transactiontype: "Card Payment",
    date: "",
    amount: "1,000",
    status: "Completed",
  },
  {
    transactionid: "ch3LZzHcT",
    transactiontype: "Card Payment",
    date: "",
    amount: "1,000",
    status: "Completed",
  },
  {
    transactionid: "ch3LZzHcT",
    transactiontype: "Card Payment",
    date: "",
    amount: "1,000",
    status: "Completed",
  },
  {
    transactionid: "ch3LZzHcT",
    transactiontype: "Card Payment",
    date: "",
    amount: "1,000",
    status: "Completed",
  },
  {
    transactionid: "ch3LZzHcT",
    transactiontype: "Card Payment",
    date: "",
    amount: "1,000",
    status: "Completed",
  },
  {
    transactionid: "ch3LZzHcT",
    transactiontype: "Card Payment",
    date: "",
    amount: "1,000",
    status: "Completed",
  },
  {
    transactionid: "ch3LZzHcT",
    transactiontype: "Card Payment",
    date: "",
    amount: "1,000",
    status: "Completed",
  },
  {
    transactionid: "ch3LZzHcT",
    transactiontype: "Card Payment",
    date: "",
    amount: "1,000",
    status: "Completed",
  },
  {
    transactionid: "ch3LZzHcT",
    transactiontype: "Card Payment",
    date: "",
    amount: "1,000",
    status: "Completed",
  },
];

export default function Transactionmanagement() {
  return (
    <Box>
       <Box className="tophead">
          <TopHeaderSection heading="Transaction Management" />
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
                <TableCell>Transaction ID</TableCell>
                <TableCell>Transaction Type</TableCell>
                <TableCell>Transaction Date & Time</TableCell>
                <TableCell>Transaction Amount</TableCell>
                <TableCell>Transaction Status</TableCell>
                <TableCell>Action </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((value, i) => (
                <MainTable2 value={value} i={i} type="transaction" />
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
