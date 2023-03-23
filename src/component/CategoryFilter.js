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
    makeStyles,
    Button,
  } from "@material-ui/core";
  import React, { useState } from "react";
  import { BiSearchAlt2 } from "react-icons/bi";
  import { KeyboardDatePicker } from "@material-ui/pickers";
  import * as XLSX from "xlsx";
  
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
      marginTop: "1rem",
      justifyContent: "space-between",
      "@media(max-width:959px)": {
        marginTop: "1.5rem",
      },
      "@media(max-width:599px)": {
        marginTop: "0rem",
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
    // selectitem: {
    //   "& .MuiPopover-paper": {
    //     marginTop: "50px",
    //   },
    // },
  }));
  const useStylesBootstrap = makeStyles((theme) => ({
    arrow: {
      color: theme.palette.common.black,
    },
    tooltip: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
  }));
  
  export default function Filter({
    setSearch,
    fromData,
    setFromData,
    toData,
    setToData,
    userlist,
    type,
    dataToExport,
    setCommponentcheck,
    componentCheck
  }) {
    const classes = useStyles();
    const [status, setStatus] = useState("Active");
    const [fromData1, setFromData1] = useState();
    const downloadExcel = () => {
      const workSheet = XLSX.utils.json_to_sheet(dataToExport);
      const workBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workBook, workSheet, "userList");
      let buf = XLSX.write(workBook, { bookType: "xlsx", type: "buffer" });
      XLSX.write(workBook, { bookType: "xlsx", type: "binary" });
      XLSX.writeFile(workBook, "user_list.xlsx");
    };
    return (
      <Box style={{ width: "100%" }}>
        <Grid container spacing={3} style={{display:"flex" ,alignItems:"center"}}>
          <Grid item lg={3} md={3} sm={4} xs={12}>
            <Box className={classes.searchSection}>
              <label>Search</label>
              <InputBase
                fullWidth
                type="text"
                className={classes.field}
               
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
  
          <Grid item lg={2} md={3} sm={4} xs={12}>
            <label>From</label>
  
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
  
          <Grid item lg={2} md={3} sm={4} xs={12}>
            <label>To</label>
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
       
      
   
          <Grid item lg={5} md={4} sm={8} xs={12}>
            <Box className={classes.btnSection}>
            <Button
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: "6px" }}
              // onClick={downloadExcel}
              >
                Apply
              </Button>
              &nbsp;
              <Button
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: "6px" }}
              // onClick={downloadExcel}
              >
                Clear
              </Button>
              &nbsp;
              <Button
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: "6px" }}
                onClick={downloadExcel}
              >
                Download CSV
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
  }
  