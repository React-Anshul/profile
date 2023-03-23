import {
  Box,
  makeStyles,
  Avatar,
  Grid,
  Button,
  Typography,
  TableCell,
  TableBody,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TextField,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Select,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import MainTable from "src/component/MainTable";
import TopHeaderSection from "src/component/TopHeaderSection";
import { useHistory } from "react-router-dom";
import { Form, Formik } from "formik";
import axios from "axios";

import { KeyboardDatePicker } from "@material-ui/pickers";
import * as yep from "yup";

const userdata = [
  {
    name: "Jatin",
    id: "253245364456",
    amount: "₭ 100 ",
    status: "paid ",
    date: "Jun 22, 2022, 9:37:45 PM ",
  },
  {
    name: "Jatin",
    id: "253245364456",
    amount: "₭ 100 ",
    status: "paid ",
    date: "Jun 22, 2022, 9:37:45 PM ",
  },
];

const useStyles = makeStyles((theme) => ({
  imgSection: {
    paddingBottom: "20px",
    "& .MuiAvatar-root": {
      width: "150px",
      height: "150px",
    },
    "& img": {
      objectFit: "cover",
      borderRadius: "10px",
    },
  },
  avatarsection: {
    width: "100%",
    "& .MuiAvatar-root": {
      borderRadius: "10px !important",
    },
    "& .MuiAvatar-img": {
      // width: "auto !important",
      width: "100% !important",
      borderRadius: "10px",
    },
  },
  avatar: {
    width: "100%",
    minHeight: "200px",
    background: "#b7b7b7",
  },
  btn: {
    marginTop: "30px",
    padding: "7px 35px",
  },
  viewbox: {
    paddingLeft: "100px",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "0px",
    },
  },
}));
const formValidationSchema = yep.object().shape({
  name: yep
    .string()
    .required("Name is required.")
    .matches(/^([A-Za-z\s]*)$/gi, "Name can only alphabet letters.")
    .min(2, "Should be 2 character long.")
    .max(24, "should not exceed 20 characters."),
  email: yep
    .string()
    .email("Please enter a valid email address.")
    .required("Email is required."),
  password: yep
    .string()
    .required("Password is required.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Please enter a strong password"
    )
    .min(6, "Please enter atleast 6 characters.")
    .max(16, "You can enter only 16 characters."),
  confirmPassword: yep
    .string()
    .required("Confirm password is required.")
    .oneOf(
      [yep.ref("password"), null],
      "Confirm password or password did not match."
    ),

  number: yep
    .string()
    .required("Whatsapp Number is required.")
    .max(10, "Should not exceed 10 characters.")
    .min(10, "Please enter a valid phone number."),
  phone: yep
    .string()
    .required("Phone number is required.")
    .max(10, "Should not exceed 10 characters.")
    .min(10, "Please enter a valid phone number."),

  address: yep.string().required("Address is required."),

  zip: yep
    .string()
    .required("zip is reqired")
    .max(10, "Should not exceed 10 characters.")
    .min(6, "Please enter a valid zip."),

  country: yep.string().required("Select Country"),
  state: yep.string().required("Select state"),
  city: yep.string().required("Select city"),
});

function EditUser() {
  const history = useHistory();
  const classes = useStyles();
  const [fromData1, setFromData1] = useState();
  const [fromData2, setFromData2] = useState();
  const [status, setStatus] = useState("10");
  const [status2, setStatus2] = useState("40");
  const [countries, setCountries] = useState([]);
  const [selectCountry, setSelectCountry] = useState("SelectCountry");

  useEffect(() => {
    axios.get("static/json/countries.json").then(function (response) {
      setCountries(response.data.countries);
    });
  }, []);

  return (
    <>
      <Box className="tophead">
        <TopHeaderSection heading="User Detail" />
      </Box>

      <Box style={{ display: "flex", justifyContent: "center" }}>
        <Box className="mainContainer1" style={{ maxWidth: "900px" }}>
          <Formik
            initialValues={{
              firstname: "",
              lastname: "",
              email: "",
              phone: "",
              sponser: "",
            }}
            initialStatus={{
              success: false,
              successMsg: "",
            }}
            validationSchema={formValidationSchema}
            // onSubmit={(values) => updateProfileDataHandler(values)}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              touched,
              values,
              setFieldValue,
            }) => (
              <Form className={classes.root}>
                <Box className={classes.imgSection} align="center">
                  <Avatar
                    src="/images/wheat.jpeg"
                    alt=""
                    className="img"
                    no
                    width="100%"
                  />
                </Box>
                <Box className={classes.viewbox}>
                  <Grid container spacing={3}>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Typography variant="body2">Name:</Typography>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <TextField
                        type="text"
                        className={classes.textBox}
                        placeholder="Name"
                        variant="outlined"
                        fullWidth
                        name="name"
                        id="name"
                        value={values.name}
                        error={Boolean(touched.name && errors.name)}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />

                      <FormHelperText error>
                        {touched.name && errors.name}
                      </FormHelperText>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Typography variant="body2">Email:</Typography>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <TextField
                        type="text"
                        className={classes.textBox}
                        placeholder="Email address"
                        variant="outlined"
                        fullWidth
                        name="email"
                        id="email"
                        value={values.email}
                        error={Boolean(touched.email && errors.email)}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />

                      <FormHelperText error>
                        {touched.email && errors.email}
                      </FormHelperText>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Typography variant="h6"> Mobile Number:</Typography>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <TextField
                        className={classes.textBox}
                        placeholder="Enter Phone Number"
                        variant="outlined"
                        type="number"
                        fullWidth
                        name="phone"
                        id="phome"
                        value={values.phone}
                        error={Boolean(touched.phone && errors.phone)}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />

                      <FormHelperText error>
                        {touched.phone && errors.phone}
                      </FormHelperText>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Typography variant="h6"> Whatsapp Number:</Typography>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                    <TextField
                    className={classes.textBox}
                    placeholder="Enter Whatsapp Number"
                    variant="outlined"
                    type="number"
                    fullWidth
                    name="number"
                    id="number"
                    value={values.number}
                    error={Boolean(touched.number && errors.number)}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />

                  <FormHelperText error>
                    {touched.number && errors.number}
                  </FormHelperText>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Typography variant="h6"> Gender:</Typography>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Select
                        variant="outlined"
                        fullWidth
                        onChange={(e) => setStatus(e.target.value)}
                        value={status}
                      >
                        <MenuItem value="10">Select Gender</MenuItem>
                        <MenuItem value="20">Male</MenuItem>
                        <MenuItem value="30">Female</MenuItem>
                      </Select>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Typography variant="h6"> DOB:</Typography>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box>
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
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Typography variant="h6"> Nationality:</Typography>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
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
                            Select Nationality
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
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Typography variant="h6"> Address:</Typography>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <TextField
                        type="text"
                        className={classes.textBox}
                        placeholder="Residential Address"
                        variant="outlined"
                        fullWidth
                        name="address"
                        id="address"
                        value={values.address}
                        error={Boolean(touched.address && errors.address)}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />

                      <FormHelperText error>
                        {touched.address && errors.address}
                      </FormHelperText>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Typography variant="h6">
                        {" "}
                        KYC Doc ID Card/ Passport:
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} style={{ width: "100%" }}>
                      <Box className={classes.avatarsection}>
                        <Avatar
                          src="/images/addhar.jpeg"
                          className={classes.avatar}
                        />
                      </Box>
                      <Typography variant="body2"> Frontside Image</Typography>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Typography variant="h6">
                        {" "}
                        Document Expiry Date:
                      </Typography>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box>
                        <KeyboardDatePicker
                          className={classes.date}
                          style={{ width: "100%", height: "40px" }}
                          placeholder="DD/MM/YYYY"
                          format="DD/MM/YYYY"
                          inputVariant="outlined"
                          disableFuture
                          name="dateOfBirth"
                          value={fromData1}
                          onChange={(date) => setFromData2(date)}
                          KeyboardButtonProps={{
                            "aria-label": "change date",
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">2FA Security:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        type="text"
                        className={classes.textBox}
                        placeholder="None"
                        variant="outlined"
                        fullWidth
                      />

                      <FormHelperText error>
                        {touched.fullname && errors.fullname}
                      </FormHelperText>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">Status:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Select
                        variant="outlined"
                        fullWidth
                        onChange={(e) => setStatus2(e.target.value)}
                        value={status2}
                      >
                        <MenuItem value="40">Select Status</MenuItem>
                        <MenuItem value="50">Active</MenuItem>
                        <MenuItem value="60">Block</MenuItem>
                      </Select>
                    </Grid>
                  </Grid>
                </Box>
              </Form>
            )}
          </Formik>
          <Box align="center" className="btnbox" mt={2}>
            <Button
              variant="contained"
              color="primary"
              className={classes.btn}
              onClick={() => history.goBack("")}
            >
              Updated
            </Button>
            &nbsp;
            <Button
              variant="contained"
              color="primary"
              className={classes.btn}
              onClick={() => history.goBack("")}
            >
              Back
            </Button>
          </Box>
        </Box>
      </Box>

      <Box mt={4}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>SR NO.</TableCell>
                <TableCell>User Name</TableCell>
                <TableCell>User ID</TableCell>
                <TableCell>Transaction Amount</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Transaction Date & Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userdata.map((value, i) => (
                <MainTable value={value} i={i} type="userdata" />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

export default EditUser;
