import {
  Box,
  TableCell,
  TableBody,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  Button,
} from "@material-ui/core";
import React from "react";
import MainFiltter from "src/component/MainFiltter";
import MainTable2 from "src/component/MainTable2";
import TopHeaderSection from "src/component/TopHeaderSection";
import { useHistory } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";

const data = [
  {
    reward: "New Reward",
    period: "Jun 22, 2022 - Jun 30, 2022",
    description: "Lorem Ipsum is simply dummy text",
    date: "",
    status: "Active",
  },
  {
    reward: "New Reward",
    period: "Jun 22, 2022 - Jun 30, 2022",
    description: "Lorem Ipsum is simply dummy text",
    date: "",
    status: "Active",
  },
  {
    reward: "New Reward",
    period: "Jun 22, 2022 - Jun 30, 2022",
    description: "Lorem Ipsum is simply dummy text",
    date: "",
    status: "Active",
  },
  {
    reward: "New Reward",
    period: "Jun 22, 2022 - Jun 30, 2022",
    description: "Lorem Ipsum is simply dummy text",
    date: "",
    status: "Active",
  },
  {
    reward: "New Reward",
    period: "Jun 22, 2022 - Jun 30, 2022",
    description: "Lorem Ipsum is simply dummy text",
    date: "",
    status: "Active",
  },
  {
    reward: "New Reward",
    period: "Jun 22, 2022 - Jun 30, 2022",
    description: "Lorem Ipsum is simply dummy text",
    date: "",
    status: "Active",
  },
  {
    reward: "New Reward",
    period: "Jun 22, 2022 - Jun 30, 2022",
    description: "Lorem Ipsum is simply dummy text",
    date: "",
    status: "Active",
  },
  {
    reward: "New Reward",
    period: "Jun 22, 2022 - Jun 30, 2022",
    description: "Lorem Ipsum is simply dummy text",
    date: "",
    status: "Active",
  },
  {
    reward: "New Reward",
    period: "Jun 22, 2022 - Jun 30, 2022",
    description: "Lorem Ipsum is simply dummy text",
    date: "",
    status: "Active",
  },
  {
    reward: "New Reward",
    period: "Jun 22, 2022 - Jun 30, 2022",
    description: "Lorem Ipsum is simply dummy text",
    date: "",
    status: "Active",
  },
];

export default function Reward() {
  const history = useHistory();
  return (
    <Box>
      <Box className="tophead" display="flex" justifyContent="space-between">
        <TopHeaderSection heading="Reward Management" />
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push("/reward-view")}
        >
          Add Reward
        </Button>
      </Box>
      <Box className="mainContainer1">
        <MainFiltter type="rewardfiltter" />
      </Box>
      <Box className="mainContainer1">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>SR NO.</TableCell>
                <TableCell>Reward Title</TableCell>
                <TableCell>Reward Period</TableCell>
                <TableCell>Reward Discription</TableCell>
                <TableCell>Created Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((value, i) => (
                <MainTable2 value={value} i={i} type="reward" />
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
