import React, { useState, useEffect } from "react";
import "src/scss/main.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import {
  Typography,
  Button,
  Box,
  Paper,
  TextField,
  Link,
  makeStyles,
  Grid,
  Container,
  FormControl,
  FormHelperText,
} from "@material-ui/core";
import Page from "src/component/Page";
import { Formik, ErrorMessage, Form, useFormik } from "formik";
import * as yup from "yup";
import { useHistory, Link as RouterComponent } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
// import ApiConfig from "src/ApiConfig/ApiConfig";
import ButtonCircularProgress from "src/component/ButtonCircularProgress";

const useStyles = makeStyles((theme) => ({
  get: {
    alignItems: "center",
    textAlign: "center",
    marginTop: "5rem",
    marginBottom: "1rem",
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
  boxShadow: {
    boxShadow: "2px 9px 40px -26px #1514187a !important",
    borderRadius: "15px",
    background: "#fff",
  },
  typo1:{
    width:"100%",
    maxWidth:"600px",
    justifyContent:"center",
    textAlign:"center",
    alignItems:"center",
    display:"flex",
    marginTop:"40px",

  },
  btn:{
    marginTop:"20px",
    display:"flex",
    justifyContent:"center",
  }

}));

const initialValues = {
  email: "",
};

// const validationSchema = yup.object({
//   email: yup.string().email().required("Required"),
// });

function Forgetassword(props) {
  const classes = useStyles();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState();
  const [errorMessage, setErrorMesage] = useState("");
  const formInitialSchema = {
    email: "",
  };

  const formValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("You have entered an invalid email address. Please try again")
      .required("Email address is required")
      .matches("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"),
  });

  const formik = useFormik({
    formInitialSchema,
    // formValidationSchema,
    onSubmit: (values) => {},
  });
  useEffect(() => {
    setTimeout(() => {
      setErrorMesage(""); // count is 0 here
    }, 3000);
  }, []);
  return (
    <>
     
        <Container maxWidth="sm">
          <Box className={classes.boxShadow}>
            <Page title="Forget Password" style={{ width: "100%" }}>
              <Box textAlign="center">
                <Box
                  style={{
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  mt={3}
                >
                <Box mt={4}>
                  <Typography variant="h2">Forgot Password</Typography>
                  </Box>
                </Box>
              </Box>
              <Box className={classes.loginBox}>
                <Box className={classes.typo1}
                 
                
                >
                  <Typography variant="h6">
                    Enter your registered email address, we will send a
                    verification link to forgot your password.
                  </Typography>
                </Box>

                <Box>
                  <Formik
                    initialValues={formInitialSchema}
                    validationSchema={formValidationSchema}
                    onSubmit={async (values) => {
                      setIsLoading(true);
                      try {
                        const res = await axios({
                          method: "POST",
                          // url: ApiConfig.forgotPassword,
                          data: {
                            email: values.email,
                          },
                        });
                        if (res.data.responseCode === 200) {
                          setIsLoading(false);
                          toast.success("Please check your email for OTP");
                          history.push("/verify-otp");
                          window.sessionStorage.setItem("email", values.email);
                        }
                      } catch (error) {
                        setIsLoading(false);

                        // setErrorMesage(error?.response?.data?.responseMessage)
                        toast.error(error?.response?.data?.responseMessage);
                        // setErrorMesage(error?.response?.data?.responseMessage);
                        // toast.error(error?.response?.data?.responseMessage);
                      }
                    }}
                  >
                    {({
                      errors,
                      handleBlur,
                      handleChange,
                      touched,
                      values,
                      handleSubmit,
                      isSubmitting,
                    }) => (
                      <Form onSubmit={handleSubmit}>
                        <Grid container direction={"column"} spacing={2}>
                          <Grid item>
                          <Box mt={4} mb={1}>
                          
                            <Typography variant="body2">Email Address:</Typography>
                            </Box>

                            <FormControl
                              fullWidth
                             
                            >
                              <TextField
                                type="text"
                                variant="outlined"
                                size="small"
                                name="email"
                                placeholder="Enter your email "
                                fullWidth
                                value={values.email}
                                error={Boolean(touched.email && errors.email)}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                InputProps={{
                                  startAdornment: (
                                    <MailOutlineIcon
                                      position="start"
                                      style={{ color: "#2222" }}
                                    ></MailOutlineIcon>
                                  ),
                                }}
                              />
                            </FormControl>
                            <FormHelperText error>
                              {touched.email && errors.email}
                            </FormHelperText>
                          </Grid>
                        </Grid>{" "}
                        <Box className={classes.btn}>
                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            smallWidth
                            size="large"
                            onClick={() =>
                              history.push({
                                pathname: "/verify-otp",
                              })
                            }
                            disabled={isLoading}
                         
                          >
                           SUBMIT
                            {isLoading && <ButtonCircularProgress />}
                          </Button>
                          <Box marginLeft="10px">
                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            smallWidth
                            size="large"
                            onClick={() =>
                              history.push({
                                pathname: "/",
                              })
                            }
                            disabled={isLoading}
                          
                          >
                         BACK
                            {isLoading && <ButtonCircularProgress />}
                          </Button>
                          </Box>
                        </Box>
                        <Box align="center" mt={5}>
                          <label
                            style={{ cursor: "pointer" }}
                            disabled={isLoading}
                            onClick={() => history.push("/")}
                          >
                          
                          </label>
                          &nbsp;
                          </Box>
                      </Form>
                    )}
                  </Formik>
                </Box>
              </Box>
            </Page>
          </Box>
        </Container>
     
    </>
  );
}

export default Forgetassword;
