import {
  Box,
  TableCell,
  TableBody,
  TableContainer,
  Table,
  TableHead,
  Button,
  TableRow,
} from "@material-ui/core";
import React from "react";
import StaticFilter from "./StaticFilter";
import MainTable2 from "src/component/MainTable2";
import { useHistory } from "react-router-dom";
import TopHeaderSection from "src/component/TopHeaderSection";
import Pagination from "@material-ui/lab/Pagination";

const data = [
  {
    title: "Convenient",
    description:
      " Open Bank Account, Open Demat Account, Statement Request, Check Balance... ",
  },
  {
    title: "Convenient",
    description:
      " Open Bank Account, Open Demat Account, Statement Request, Check Balance... ",
  },
  {
    title: "Convenient",
    description:
      " Open Bank Account, Open Demat Account, Statement Request, Check Balance... ",
  },
];

export default function StaticView() {
  const history = useHistory();

  return (
    <Box>
      <Box className="tophead">
        <TopHeaderSection heading="STATIC CONTENT MANAGEMENT" />
      </Box>
      <Box className="mainContainer1">
        <StaticFilter />
      </Box>
      <Box align="right" className="btnbox" p={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push("/add-tutorial")}
          className="btn"
        >
          Add Tutorial
        </Button>
      </Box>
      <Box className="mainContainer1">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>SR NO.</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Action </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((value, i) => (
                <MainTable2 value={value} i={i} type="static" />
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
