import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Divider,
  TableCell,
  TableContainer,
  TableHead,
  Table,
  Paper,
  TableBody,
  TableRow,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Ddata = [
  {
    Salecode: "KEESEP",
    Hip: "235",
    Type: "Yearling",
    Buyer: "China Horse Club",
    Consignor: "Paramount Sales",
    Price: "$525,000",
    Status: "Sold",
  },
  {
    Salecode: "KEESEP",
    Hip: "235",
    Type: "Yearling",
    Buyer: "China Horse Club",
    Consignor: "Paramount Sales",
    Price: "$525,000",
    Status: "Sold",
  },
];

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
    "& h6": {
      color: "#fff",
      fontSize: "15px",
      fontWeight: "600",
      "@media(max-width:1295px)": {
        fontSize: "13px",
      },
    },
    "& p": {
      color: "#d4d4d4",
      fontSize: "12px",
      paddingTop: "5px",
      fontWeight: "400",
      paddingBottom: "10px",
      "@media(max-width:1295px)": {
        fontSize: "11px",
      },
    },
    "& h5": {
      color: "#FFFFFF",
      fontSize: "15px",
      paddingTop: "5px",
      fontWeight: "400",
      paddingBottom: "10px",
    },
  },
  container: {
    overflow: "auto",
    "@media(max-width:991px)": {
      overflow: "scroll",
    },
    "& .TableHeadrow": {
      "& th": {
        border: "none",
        color: theme.palette.text.black,
      },
    },
  },
  tablemainbox: {
    padding: "20px 25px 40px",
    background: "rgba(23, 12, 65, 0.4)",
    border: "1px solid #332262",
    boxSizing: "border-box",
    "& h3": {
      color: "#FFFFFF",
      letterSpacing: "2px",
      fontSize: "20px",
    },
  },

  infotablecell: {
    padding: "11px 5px 10px 8px",
    borderLeft: "none",
  },
  subinfotablecell: {
    padding: "5px 5px 10px 8px",
    borderLeft: "none",
  },
}));

const Information = (props) => {
  const { data } = props;
  const classes = useStyles();
  return (
    <Box className={classes.tablemainbox}>
      <Box>
        <Typography variant="h3">Information</Typography>
      </Box>
      <Box pb={3} pt={1}></Box>
      <TableContainer className={classes.container}>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell className={classes.infotablecell} width="20%">
                <Box mt={2} mb={3}>
                  <Typography variant="h6">Passport#</Typography>
                  <Typography variant="h5">353IRE5782301Y</Typography>
                </Box>
                <Box mt={3} mb={2}>
                  <Typography variant="h6">Issued by</Typography>
                  <Typography variant="h5">Weatherbys</Typography>
                </Box>
              </TableCell>
              <TableCell
                className={classes.infotablecell}
                style={{ padding: "0px" }}
              >
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.infotablecell} width="15%">
                      <Box>
                        <Typography variant="h6">Country of Birth</Typography>
                        <Typography variant="body1">Ireland (IRE)</Typography>
                      </Box>
                    </TableCell>
                    <TableCell className={classes.infotablecell} width="20%">
                      <Box>
                        <Typography variant="h6">Colour</Typography>
                        <Typography variant="body1">Brown</Typography>
                      </Box>
                    </TableCell>
                    <TableCell className={classes.infotablecell}>
                      <Box>
                        <Typography variant="h6">Age</Typography>
                        <Typography variant="body1">2 (2020/01/26)</Typography>
                      </Box>
                    </TableCell>
                    <TableCell className={classes.infotablecell}>
                      <Box>
                        <Typography variant="h6">Sex</Typography>
                        <Typography variant="body1">Male</Typography>
                      </Box>
                    </TableCell>
                    <TableCell className={classes.infotablecell}>
                      <Box>
                        <Typography variant="h6">Sire</Typography>
                        <Typography variant="body1">Showcasing (GB)</Typography>
                      </Box>
                    </TableCell>
                    <TableCell className={classes.infotablecell} width="15%">
                      <Box>
                        <Typography variant="h6">Trainer</Typography>
                        <Typography variant="body1">David Loughnane</Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.infotablecell} width="15%">
                      <Box>
                        <Typography variant="h6">Current Owner</Typography>
                        <Typography variant="body1">
                          Amo Racing Limited
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell className={classes.infotablecell}>
                      <Box>
                        <Typography variant="h6">Purchased Price</Typography>
                        <Typography variant="body1">160,000 Guneas</Typography>
                      </Box>
                    </TableCell>
                    <TableCell className={classes.infotablecell}>
                      <Box>
                        <Typography variant="h6">Rating</Typography>
                        <Typography variant="body1">N/A</Typography>
                      </Box>
                    </TableCell>
                    <TableCell className={classes.infotablecell}>
                      <Box>
                        <Typography variant="h6">Dam</Typography>
                        <Typography variant="body1">
                          Drumfad Bay (IRE)
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell className={classes.infotablecell}>
                      <Box>
                        <Typography variant="h6">Type</Typography>
                        <Typography variant="body1">In Training</Typography>
                      </Box>
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.subinfotablecell}>
                      <Box>
                        <Typography variant="h6">Location</Typography>
                        <Typography variant="body1">With Trainer</Typography>
                      </Box>
                    </TableCell>
                    <TableCell className={classes.subinfotablecell}>
                      <Box>
                        <Typography variant="h6">Sale Name</Typography>
                        <Typography variant="body1">
                          Tattersalls October Yearling Sale (Book1) 2021
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell className={classes.subinfotablecell}>
                      <Box>
                        <Typography variant="h6">Grouping</Typography>
                        <Typography variant="body1">Racing</Typography>
                      </Box>
                    </TableCell>
                    <TableCell className={classes.subinfotablecell}>
                      <Box>
                        <Typography variant="h6">Dam’s Sire</Typography>
                        <Typography variant="body1">
                          Acclamation (GB)
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell className={classes.subinfotablecell}>
                      <Box>
                        <Typography variant="h6">Breeder</Typography>
                        <Typography variant="body1">Stonethorn Stud</Typography>
                      </Box>
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableBody>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

const AuctionHistory = (props) => {
  const { data } = props;
  const classes = useStyles();
  return (
    <Box className={classes.tablemainbox}>
      <Box>
        <Typography variant="h3">Auction History</Typography>
      </Box>
      <Box pb={1} pt={2}>
        <Divider />
      </Box>
      <TableContainer className={classes.container}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead className="TableHead">
            <TableRow className="TableHeadrow">
              <TableCell align="left">Sale Code</TableCell>
              <TableCell align="left">Hip</TableCell>
              <TableCell align="left">Type</TableCell>
              <TableCell align="left">Buyer</TableCell>
              <TableCell align="left">Consignor</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Ddata.map((data) => (
              <TableRow>
                <TableCell>{data.Salecode}</TableCell>
                <TableCell>{data.Hip}</TableCell>
                <TableCell>{data.Type}</TableCell>
                <TableCell>{data.Buyer}</TableCell>
                <TableCell>{data.Consignor}</TableCell>
                <TableCell>{data.Price}</TableCell>
                <TableCell>{data.Status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

function Info() {
  const classes = useStyles();
  return (
    <>
      <Box>
        <Box mb={2}>
          <Information />
        </Box>
        <Box mt={2}>
          <AuctionHistory />
        </Box>
      </Box>
    </>
  );
}

export default Info;
