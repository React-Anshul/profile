import React, { useState } from "react";
import {
  Container,
  Avatar,
  Box,
  Button,
  makeStyles,
  Typography,
  Divider,
  Grid,
  TextField,
  IconButton,
  FormHelperText,
  FormControl,
} from "@material-ui/core";
import ChangePassword from "./ChangePassword";
import { BsUpload } from "react-icons/bs";
import { Formik, Form } from "formik";
import * as yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const useStyles = makeStyles((theme) => ({
  leftSectionBox: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "30px",
    border: "1px dashed",
    borderRadius: "12px",
  },
  rightSectionBox: {
    padding: "30px",
    border: "1px dashed",
    borderRadius: "12px",
  },

  textClass: {
    marginTop: "6px",
  },
  childSection: {
    position: "relative",
  },
  iconBtn: {
    border: "1px solid #222",
    position: "absolute",
    right: "-17px",
    top: "57%",
    padding: "12px 12px 7px !important",
  },
}));
export default function AdminProfile() {
  const classes = useStyles();
  const [isUpdate, setIsUpdate] = useState(false);
  const [profileImg, setProfileImg] = useState("");
  const [isPasswordChange, setIsPasswordChange] = useState(false);

  const [isSubmit, setIsSubmit] = useState(false);
  const [countryCode, setCountryCode] = useState("");
  const [fieldvalue1, setFieldValue] = useState();
  const [formValue, setFormValue] = useState({
    mobileNumber: "",
  });

  const formInitialSchema = {
    name: "",
    email: "",
    number: "",
    address: "",
    // country: "",
  };
  const formValidationSchema = yup.object().shape({
    name: yup
      .string()
      .required("Name is required")
      .min(2, "Please enter atleast 2 characters")
      .max(35, "You can enter only 35 characters")
      .matches(
        /^([A-Z][a-z]+)$/,
        "First letter must be in capital letter, whitespaces are not allowed."
      ),

    email: yup
      .string()
      .email("You have entered an invalid email address. Please try again")
      .required("Email address is required")
      .matches("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"),
    number: yup
      .string()
      .required("Contact Number is required")
      .matches(
        /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/,
        "Must be a valid mobilie"
      )
      .max(13, "Should not exceeds 13 digits")
      .min(10, "Must be only 10 digits"),

    // number: yup.string().required("Contact Number is required"),
    address: yup
      .string()
      .required(" Address is required")
      .min(10, "Please enter atleast 10 characters")
      .max(333, "You can enter only 333 characters"),
  });

  return (
    <Container maxWidth="xxl">
      <Box className="mainContainer">
        <Typography variant="h3">View profile</Typography>
        <Box pt={2} pb={2}>
          <Divider />
        </Box>
        <Grid container spacing={2}>
          <Grid item lg={4} sm={4} md={4} xs={12}>
            <Box className={classes.leftSectionBox}>
              <Box className={classes.childSection}>
                <Avatar
                  src={profileImg ? profileImg : "images/profile_img.png"}
                  style={{
                    height: "200px",
                    width: "200px",
                  }}
                />
                <IconButton className={classes.iconBtn}>
                  <label htmlFor="raised-button-file-crop1">
                    <BsUpload style={{ cursor: "pointer" }} />
                  </label>
                </IconButton>
              </Box>
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="raised-button-file-crop1"
                type="file"
                onChange={(e) =>
                  setProfileImg(URL.createObjectURL(e.target.files[0]))
                }
              />
              <Box>
                <Typography variant="h2">Admin Name</Typography>
                <Typography variant="h4">admin@mobiloitte.com</Typography>
              </Box>
              <Box mt={1}>
                {!isUpdate && (
                  <Button
                    fullWidth
                    color="primary"
                    variant="contained"
                    style={{ marginBottom: "12px" }}
                    onClick={() => setIsPasswordChange(!isPasswordChange)}
                  >
                    {isPasswordChange ? "Cancel" : "Change Password"}
                  </Button>
                )}
                {!isPasswordChange && (
                  <Button
                    fullWidth
                    color="primary"
                    variant="contained"
                    onClick={() => setIsUpdate(!isUpdate)}
                  >
                    {isUpdate ? "Cancel" : "Update Profile"}
                  </Button>
                )}
              </Box>
            </Box>
          </Grid>
          <Grid item lg={8} sm={8} md={8} xs={12}>

            <Formik
              // onSubmit={(values) => handleFormSubmit(values)}
              initialValues={formInitialSchema}
              validationSchema={formValidationSchema}
            >
              {({
                errors,
                handleBlur,
                handleChange,
                touched,
                values,
                handleSubmit,
                setFieldValue,
              }) => (
                <Form>
                  <Box className={classes.rightSectionBox}>

                    <Grid container spacing={2}>
                      <Grid item xs={3}>
                        <Typography variant="h5">Name:</Typography>
                      </Grid>
                      <Grid item xs={1}>
                        <Typography variant="h5">:</Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography variant="h5">Shiwani Singh

                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="h5">Email address:</Typography>
                      </Grid>
                      <Grid item xs={1}>
                        <Typography variant="h5">:</Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography variant="h5">admin.name@gmail.com</Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="h5">Phone no:</Typography>
                      </Grid>
                      <Grid item xs={1}>
                        <Typography variant="h5">:</Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography variant="h5">87563467</Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="h5">Address:</Typography>
                      </Grid>
                      <Grid item xs={1}>
                        <Typography variant="h5">:</Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography variant="h5">123 Main Street, , Base street1003</Typography>
                      </Grid>






                 
                    </Grid>

                    {!isPasswordChange && isUpdate && (
                      <Box>
                        <Box>
                          <label>Full Name:</label>
                          <TextField
                            type="text"
                            name="name"
                            variant="outlined"
                            placeholder="Enter your full name"
                            className={classes.textClass}
                            error={Boolean(touched.name && errors.name)}
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                          <FormHelperText
                            error
                            style={{ margin: "0px", fontSize: "12px" }}
                          >
                            {touched.name && errors.name}
                          </FormHelperText>
                        </Box>
                        <Box mt={2}>
                          <label>Email:</label>
                          <TextField
                            type="text"
                            name="email"
                            variant="outlined"
                            placeholder="Enter your email address"
                            className={classes.textClass}
                            value={values.email}
                            fullWidth
                            error={Boolean(touched.email && errors.email)}
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                          <FormHelperText
                            error
                            style={{ margin: "0px", fontSize: "12px" }}
                          >
                            {touched.email && errors.email}
                          </FormHelperText>
                        </Box>
                        <Box mt={2}>
                          <label>Contact Number:</label>
                          <TextField
                            type="number"
                            name="number"
                            variant="outlined"
                            placeholder="Enter your contact number"
                            className={classes.textClass}
                            value={values.number}
                            fullWidth
                            error={Boolean(touched.number && errors.number)}
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                          <FormHelperText
                            error
                            style={{ margin: "0px", fontSize: "12px" }}
                          >
                            {touched.number && errors.number}
                          </FormHelperText>
                        </Box>

                        {/* <Box mt={2}>
                          <FormControl fullWidth>
                            <label>Contact Number:</label>
                            <PhoneInput
                              type="number"
                              name="number"
                              variant="outlined"
                              placeholder="Enter your contact number"
                              className={classes.textClass}
                              value={values.number}
                              fullWidth
                              error={Boolean(touched.number && errors.number)}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              country={"in"}
                              // error={Boolean(
                              //   isSubmit && formValue.fieldvalue1 === ""
                              // )}
                              // placeholder="Enter Mobile No."
                              // onChange={(phone, e) => {
                              //   setCountryCode(e.dialCode);
                              //   setFieldValue(phone);
                              // }}
                              inputStyle={{
                                backgroundColor: "white",
                                border: "1px solid #575758",
                              }}
                            />
                            <FormHelperText
                              error
                              style={{ margin: "0px", fontSize: "12px" }}
                            >
                              {touched.number && errors.number}
                            </FormHelperText>
                          </FormControl>
                        </Box> */}

                        <Box mt={2}>
                          <label>Address:</label>
                          <TextField
                            type="text"
                            name="address"
                            variant="outlined"
                            multiline
                            rows={4}
                            placeholder="Enter your address"
                            className={classes.textClass}
                            value={values.address}
                            fullWidth
                            error={Boolean(touched.address && errors.address)}
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                          <FormHelperText
                            error
                            style={{ margin: "0px", fontSize: "12px" }}
                          >
                            {touched.address && errors.address}
                          </FormHelperText>
                        </Box>

                        <Box mt={2}>
                          <Button
                            color="primary"
                            variant="contained"
                            type="submit"
                          >
                            Update
                          </Button>
                        </Box>

                      </Box>
                    )}
                    {isPasswordChange && !isUpdate && <ChangePassword />}
                  </Box>
                </Form>
              )}
            </Formik>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
