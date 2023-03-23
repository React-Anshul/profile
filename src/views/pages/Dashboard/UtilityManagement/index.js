import {
  Box,
  TableCell,
  TableBody,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  Button
} from "@material-ui/core";
import React from "react";
import FiltterSection from "src/component/FiltterSection";
import MainTable from "src/component/MainTable";
import TopHeaderSection from "src/component/TopHeaderSection";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Pagination } from "@material-ui/lab";

const utilitydata = [
  {
    title: "Bill Payment",

    createdate: "Jun 22, 2022, 9:37:45 PM",
    updatedate: "Jun 22, 2022, 9:37:45 PM",
  },
  {
    title: "Fees Payment",

    createdate: "Jun 22, 2022, 9:37:45 PM",
    updatedate: "Jun 22, 2022, 9:37:45 PM",
  },
  {
    title: "Wallet Bill Payment",

    createdate: "Jun 22, 2022, 9:37:45 PM",
    updatedate: "Jun 22, 2022, 9:37:45 PM",
  },
  
];

export default function indexx() 
{


  
  return (
    <Box>
      <Box className="tophead">
        <TopHeaderSection heading="Utility Management" />
      </Box>
      <Box className="mainContainer1">
        <FiltterSection type="utilityFiltter"/>
      </Box>
      <Box mt={2} textAlign="right">
        <Button variant="contained" color="primary" component={Link}
        to="/viewUtility"
       >
        Add New Utility Service
        </Button>
      </Box>
      <Box className="mainContainer1">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>SR NO.</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Created Date and Time</TableCell>
                <TableCell>Updated Date and Time</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {utilitydata.map((value, i) => (
                <MainTable value={value} i={i} type="utilitymanagement" />
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
