import {
  Box,
  TableCell,
  TableBody,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  Button,
  makeStyles,

} from "@material-ui/core";
import React from "react";
import MainFiltter from "src/component/MainFiltter";
import MainTable2 from "src/component/MainTable2";
import { Link } from "react-router-dom";
import TopHeaderSection from "src/component/TopHeaderSection";
import Pagination  from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({

avatar: {
  width: "100%",
  minHeight: "200px",
  background: "#b7b7b7",
},
}));

const data = [
  {
    title: "1st Banner",
   
    date: "",
   
  },
  {
    title: "1st Banner",
    date: "",
  },
  {
    title: "1st Banner",
    date: "",
  },
  {
    title: "1st Banner",
    date: "",
  },
  {
    title: "1st Banner",
    date: "",
  },
  {
    title: "1st Banner",
    date: "",
  },
  {
    title: "1st Banner",
    date: "",
  },
  {
    title: "1st Banner",
    date: "",
  },
  {
    title: "1st Banner",
    date: "",
  },
  {
    title: "1st Banner",
    date: "",
  },
];

export default function BannerManagement() {
  const classes = useStyles();

  return (
    <Box>
      <Box className="tophead">
        <TopHeaderSection heading="BANNER MANAGEMENT" />
      </Box>
      <Box className="mainContainer1">
        <MainFiltter />
      </Box>
      <Box align="right" className="btnbox" p={2}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/add-banner"
          className="btn"
        >
          Add Banner
        </Button>
      </Box>
      <Box className="mainContainer1">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>SR NO.</TableCell>
                <TableCell>Banner ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Date & Time</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((value, i) => (
                <MainTable2 value={value} i={i} type="banner" />
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
