import {
  Typography,
  Box,
  FormControl,
  Button,
  FormHelperText,
  TextField,
  Link,
  IconButton,
  InputAdornment,
  OutlinedInput,
  makeStyles,
  Container,
  Paper,
} from "@material-ui/core";
import React, { useState, useContext } from "react";

import { Formik, Form } from "formik";
import LockIcon from "@material-ui/icons/Lock";
import * as yep from "yup";
import Page from "src/component/Page";
import { useHistory, useLocation } from "react-router-dom";
import moment from "moment";
import ButtonCircularProgress from "src/component/ButtonCircularProgress";
import axios from "axios";
// import ApiConfig from "src/ApiConfig/ApiConfig";
import { values } from "lodash";
import { toast } from "react-toastify";

export default function (props) {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const history = useHistory();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [isloading, setLoader] = useState(false);
  const formInitialSchema = {
    otp: "",
    email: "",
  };
  const formValidationSchema = yep.object().shape({
    otp: yep
      .string()
      .max(4, "Only 4 digits are valid")
      .required("OTP is required"),
  });
  const useStyles = makeStyles((theme) => ({
    boxShadow: {
      boxShadow: "3px 3px 14px #1514187a !important",
      borderRadius: "15px",
      background: "#fff",
    },

    loginBox: {
      padding: "0px 30px 30px",
    },

    box: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      background: "#eff5ee",
    },
    imgSection: {
      height: "100px",
      width: "120px",
      "& img": {
        height: "100%",
        minHeight: "100px",
        objectFit: "cover",
      },
    },
  }));
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMesage] = useState();

  const verifyOTP = async (values) => {
    // setIsLoading(true);
    // try {
    //   const res = await axios({
    //     method: "PUT",
    //     // url: ApiConfig.otpVerify,
    //     data: {
    //       otp: values?.otp?.toString(),
    //       email: window.sessionStorage.getItem("email"),
    //     },
    //   });
    //   if (res.data.responseCode === 200) {
    //     setIsLoading(false);
    //     toast.success("otp verify succefully");
    //     history.push("/reset-password");
    //     window.sessionStorage.setItem("token", res.data.result.token);
    //   }
    // } catch (error) {
    //   setIsLoading(false);
    //   setErrorMesage(error?.response?.data?.responseMessage);
    // }
  };
  const resendOTP = async () => {
    // setIsLoading(true);
    // try {
    //   console.log(
    //     "========.................",
    //     window.sessionStorage.getItem("email")
    //   );
    //   const res = await axios({
    //     method: "POST",
    //     // url: ApiConfig.resendOtp,
    //     data: {
    //       email: window.sessionStorage.getItem("email"),
    //     },
    //   });
    //   if (res.data.responseCode === 200) {
    //     setIsLoading(false);
    //     toast.success("resend otp successfully");
    //   }
    // } catch (error) {
    //   console.log(error);
    //   setIsLoading(false);
    //   setErrorMesage(error?.response?.data?.responseMessage);
    // }
  };
  return (
    <>
      <Box className={classes.box}>
        <Container maxWidth="sm">
          <Box title="VerifyOtp" className={classes.boxShadow}>
            <Box textAlign="center">
              <Box
                style={{
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                mt={1}
                mb={1}
              >
                <figure className={classes.imgSection}>
                  <img
                    src="images/farmlogo1.png"
                    style={{ width: "100%", borderRadius: "5px" }}
                  />
                </figure>
              </Box>
            </Box>
            <Box className={classes.loginBox}>
              <Formik
                onSubmit={(values) => verifyOTP(values)}
                // noValidate onSubmit={handleSubmit}
                initialValues={formInitialSchema}
                validationSchema={formValidationSchema}
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
                  <Form>
                    <Box>
                      <FormControl fullWidth>
                        <OutlinedInput
                          onKeyPress={(event) => {
                            if (event?.key === "-" || event?.key === "+") {
                              event.preventDefault();
                            }
                          }}
                          type="number"
                          variant="outlined"
                          placeholder="Enter your OTP"
                          size="small"
                          name="otp"
                          maxLength="4"
                          value={values.otp}
                          error={Boolean(touched.otp && errors.otp)}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                      </FormControl>
                      <FormHelperText error>
                        {touched.otp && errors.otp}
                      </FormHelperText>
                    </Box>
                    <Box mt={3}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        size="large"
                        disabled={isloading || isLoading}
                        style={{ borderRadius: "15px" }}
                      >
                        Verify OTP
                        {isloading && <ButtonCircularProgress />}
                      </Button>
                    </Box>
                  </Form>
                )}
              </Formik>
              {!isloading && (
                <>
                  <Box align="center">
                    <label
                      style={{ cursor: "pointer", color: "#000" }}
                      disabled={isLoading}
                      onClick={resendOTP}
                    >
                      Resend OTP
                    </label>
                    &nbsp;
                  </Box>
                  <Box align="center" mt={1}>
                    <label
                      style={{ cursor: "pointer", color: "#000" }}
                      disabled={isLoading}
                      onClick={() => history.push("/")}
                    >
                      Home
                    </label>
                    &nbsp;
                  </Box>
                </>
              )}
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
