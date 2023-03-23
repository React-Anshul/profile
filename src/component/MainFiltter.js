import {
  Box,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputBase,
  InputAdornment,
  FormHelperText,
  makeStyles,
  Button,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { KeyboardDatePicker } from "@material-ui/pickers";
import * as XLSX from "xlsx";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  mainSection: {
    background: "#383858",
    marginTop: "4rem",
    paddingTop: "5rem",
    paddingBottom: "5rem",

    "& h3": {
      color: "#fff",
      paddingBottom: "1.8rem",
    },
  },
  gridSectio: {
    order: "1",
    "@media(max-width:952px)": {
      order: "3",
    },
  },
  gridSectio1: {
    color: "#000",
    order: "2",
    "@media(max-width:952px)": {
      order: "1",
    },
  },
  gridSectio2: {
    color: "#000",
    order: "3",
    "@media(max-width:952px)": {
      order: "2",
    },
  },
  gridSectio3: {
    color: "#000",
    order: "4",
    "@media(max-width:952px)": {
      order: "4",
    },
  },
  searchSection: {
    color: "#000",

    "@media(max-width:600px)": {
      marginTop: ".7rem",
    },
  },
  field: {
    height: "40px",
    border: "1px solid #bcbcbc",
    padding: "10px 10px 10px 0px",
    marginTop: "6px",
    fontSize: "14px",
    borderRadius: "5px",
  },
  btnSection: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginTop: "19px",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      marginTop: "0px",
    },

    "& button": {
      height: "40px",
    },
  },
  date: {
    marginTop: "6px",
    "& .MuiOutlinedInput-root": {
      height: "40px",
    },
  },
}));

export default function Filter({
  setSearch,
  type,
  dataToExport,
  setCommponentcheck,
  componentCheck,
}) {
  const classes = useStyles();
  const [selectCountry, setSelectCountry] = useState("SelectCountry");

  const [fromData1, setFromData1] = useState();
  const [status, setStatus] = useState("Block");
  const [status1, setStatus1] = useState("10");
  const [commponentCheck1, setCommponentcheck1] = useState("Farme1");
  const downloadExcel = () => {
    const workSheet = XLSX.utils.json_to_sheet(dataToExport);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, "userList");
    let buf = XLSX.write(workBook, { bookType: "xlsx", type: "buffer" });
    XLSX.write(workBook, { bookType: "xlsx", type: "binary" });
    XLSX.writeFile(workBook, "user_list.xlsx");
  };
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("static/json/countries.json").then(function (response) {
      setCountries(response.data.countries);
      // axios.get("static/json/states.json").then(function (response) {
      //   setStates(response.data.states);
      //   axios.get("static/json/cities.json").then(function (response) {
      //     setCities(response.data.cities);
      //   });
      // });
    });
  }, []);

  return (
    <Box style={{ width: "100%" }}>
      {type === "loanfiltter" ? (
        <>
          <Grid container spacing={3}>
            <Grid item lg={2} md={2} sm={4} xs={12}>
              <Typography variant="body2">From</Typography>

              <KeyboardDatePicker
                className={classes.date}
                style={{ width: "100%", height: "40px" }}
                placeholder="DD/MM/YYYY"
                format="DD/MM/YYYY"
                inputVariant="outlined"
                disableFuture
                name="dateOfBirth"
                value={fromData1}
                onChange={(date) => setFromData1(date)}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </Grid>

            <Grid item lg={2} md={2} sm={4} xs={12}>
              <Typography variant="body2">To</Typography>
              <KeyboardDatePicker
                className={classes.date}
                style={{ width: "100%", height: "40px" }}
                placeholder="DD/MM/YYYY"
                format="DD/MM/YYYY"
                inputVariant="outlined"
                disableFuture
                name="dateOfBirth"
                value={fromData1}
                onChange={(date) => setFromData1(date)}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </Grid>
            <Grid item lg={2} md={2} sm={4} xs={12}>
              <Typography variant="body2">Status</Typography>
              <Box className={classes.selectitem} style={{ marginTop: "6px" }}>
                <Select
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setStatus(e.target.value)}
                  value={status}
                >
                  <MenuItem value="Block">Active</MenuItem>
                  <MenuItem value="Active">Block</MenuItem>
                </Select>
              </Box>
            </Grid>
            <Grid item lg={2} md={2} sm={4} xs={12}>
              <Typography variant="body2">Country</Typography>
              <Box className={classes.selectitem} style={{ marginTop: "6px" }}>
                <Select
                  variant="outlined"
                  fullWidth
                  inputProps={{ "aria-label": "Without label" }}
                  className="countryField"
                  margin="dense"
                  name="country"
                  onChange={(e) => setSelectCountry(e.target.value)}
                  value={selectCountry}
                >
                  <MenuItem value="SelectCountry" disabled>
                    {" "}
                    Select
                  </MenuItem>

                  {countries.map((countries) => {
                    return (
                      <MenuItem
                        key={countries.name + countries.id}
                        value={countries.name}
                      >
                        {countries.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </Box>
            </Grid>
            <Grid item lg={2} md={2} sm={4} xs={12}>
              <Typography variant="body2">LoanType</Typography>
              <Box className={classes.selectitem} style={{ marginTop: "6px" }}>
                <Select
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setCommponentcheck1(e.target.value)}
                  value={commponentCheck1}
                >
                  <MenuItem value="Farme1">Select Loan Type</MenuItem>
                  <MenuItem value="Farmer">Personal Loan</MenuItem>
                  <MenuItem value="Partner12">Home Loan</MenuItem>
                  <MenuItem value="Location">Car Loan</MenuItem>
                </Select>
              </Box>
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <Grid container spacing={3}>
            <Grid item lg={3} md={3} sm={4} xs={12}>
              <Typography variant="body2">From</Typography>

              <KeyboardDatePicker
                className={classes.date}
                style={{ width: "100%", height: "40px" }}
                placeholder="DD/MM/YYYY"
                format="DD/MM/YYYY"
                inputVariant="outlined"
                disableFuture
                name="dateOfBirth"
                value={fromData1}
                onChange={(date) => setFromData1(date)}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </Grid>

            <Grid item lg={3} md={3} sm={4} xs={12}>
              <Typography variant="body2">To</Typography>
              <KeyboardDatePicker
                className={classes.date}
                style={{ width: "100%", height: "40px" }}
                placeholder="DD/MM/YYYY"
                format="DD/MM/YYYY"
                inputVariant="outlined"
                disableFuture
                name="dateOfBirth"
                value={fromData1}
                onChange={(date) => setFromData1(date)}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </Grid>
            <Grid item lg={3} md={3} sm={4} xs={12}>
              <Typography variant="body2">Status</Typography>
              <Box className={classes.selectitem} style={{ marginTop: "6px" }}>
                <Select
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setStatus(e.target.value)}
                  value={status}
                >
                  <MenuItem value="Block">Active</MenuItem>
                  <MenuItem value="Active">Block</MenuItem>
                </Select>
              </Box>
            </Grid>
            {type === "rewardfiltter" ? (
              ""
            ) : type === "servicefiltter" ? (
              ""
            ) : type === "notificationfiltter" ? (
              ""
            ) : (
              <>
                <Grid item lg={3} md={3} sm={4} xs={12}>
                  <Typography variant="body2">Country</Typography>
                  <Box
                    className={classes.selectitem}
                    style={{ marginTop: "6px" }}
                  >
                    <Select 
                  variant="outlined"
                  fullWidth
                  inputProps={{ "aria-label": "Without label" }}
                  className="countryField"
                  margin="dense"
                  name="country"
                  onChange={(e) => setSelectCountry(e.target.value)}
                  value={selectCountry}
                >
                  <MenuItem value="SelectCountry" disabled>
                    {" "}
                    Select
                  </MenuItem>

                  {countries.map((countries) => {
                    return (
                      <MenuItem
                        key={countries.name + countries.id}
                        value={countries.name}
                      >
                        {countries.name}
                      </MenuItem>
                    );
                  })}
                </Select>
                  </Box>
                </Grid>
              </>
            )}
          </Grid>
        </>
      )}

      <Grid container spacing={3} justifyContent="space-between">
        <Grid item lg={5} md={5} sm={4} xs={12}>
          <Box className={classes.searchSection}>
            <Typography variant="body2">Search</Typography>

            <InputBase
              fullWidth
              type="text"
              className={classes.field}
              placeholder={
                type === "order"
                  ? "By order Id"
                  : "Search By Title and description …"
              }
              onChange={(e) => setSearch(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <BiSearchAlt2
                    style={{
                      fontSize: "25px",
                      cursor: "pointer",
                      color: "#222",
                    }}
                  />
                </InputAdornment>
              }
            />
          </Box>
        </Grid>

        <Grid item lg={5} md={4} sm={8} xs={12}>
          <Box className={classes.btnSection}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: "6px" }}
              // onClick={downloadExcel}
            >
              SEARCH
            </Button>
            &nbsp;
            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: "6px" }}
              // onClick={downloadExcel}
            >
              RESET
            </Button>
            &nbsp;
            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: "6px" }}
              onClick={downloadExcel}
            >
              EXPORT AS EXCEL
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
