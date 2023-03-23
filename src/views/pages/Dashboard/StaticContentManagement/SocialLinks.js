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
import { useHistory } from "react-router-dom";
import TopHeaderSection from "src/component/TopHeaderSection";
import Pagination from "@material-ui/lab/Pagination";
import MainTable2 from "src/component/MainTable2";

const data = [
  {
    socialname: "Facebook",
    sociallinks:"https://www.facebook.com/login/",
  },
  {
    socialname: "Facebook",
    sociallinks:"https://www.facebook.com/login/",
  },
  {
    socialname: "Facebook",
    sociallinks:"https://www.facebook.com/login/",
  },
 
];

export default function SocialLinks() {
  const history = useHistory();

  return (
    <>
      <Box>
        <Box className="tophead">
          <TopHeaderSection heading="STATIC CONTENT MANAGEMENT" />
        </Box>
        <Box align="right" className="btnbox" p={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push("/add-social")}
          className="btn"
        >   
          Add Social Link
        </Button>
      </Box>
        <Box className="mainContainer1">
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>SR NO.</TableCell>
                  <TableCell>Social Name</TableCell>
                  <TableCell>Social Links</TableCell>
                  <TableCell>Action </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((value, i) => (
                  <MainTable2 value={value} i={i} type="social" />
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
