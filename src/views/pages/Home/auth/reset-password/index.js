import React from "react";
import {
  Box,
  Container,
  makeStyles,
  Typography,
  Button,
  Grid,
  TextField,
  Link,
  Paper,
  IconButton,
  InputAdornment,
  FormControl,
  FormHelperText,
  OutlinedInput,
} from "@material-ui/core";
import Page from "src/component/Page";
import LockIcon from "@material-ui/icons/Lock";
import ButtonCircularProgress from "src/component/ButtonCircularProgress";
import { useState } from "react";
import { Link as RouterComponent, useHistory } from "react-router-dom";
import * as yup from "yup";
import { Formik, ErrorMessage, Form, useFormik } from "formik";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import axios from "axios";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  boxShadow: {
    boxShadow: "2px 9px 40px -26px #1514187a !important",
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

function ResetPassword() {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = React.useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  return (
    <Container maxWidth="sm">
      <Box title="Reset Password" className={classes.boxShadow}>
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
            <Box mt={4}>
              <Typography variant="h2">Reset Password</Typography>
            </Box>
          </Box>
        </Box>
        <Box className={classes.loginBox}>
          <Formik
            onSubmit={(values) => ResetPassword(values)}
            initialValues={{
              password: "",
              confirmPassword: "",
            }}
            initialStatus={{
              success: false,
              successMsg: "",
            }}
            validationSchema={yup.object().shape({
              password: yup
                .string()
                .required("Password is required")
                .matches(
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
                ),
              confirmPassword: yup
                .string()
                .required("Confirmation of your password is required")
                .oneOf([yup.ref("password"), null], "Passwords must match"),
            })}
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
                <Grid item>
                  <Box mt={4}>
                    <Typography variant="body2">New Password:</Typography>
                  </Box>
                  <FormControl fullWidth>
                    <TextField
                      type={showPassword ? "text" : "password"}
                      variant="outlined"
                      size="small"
                      name="password"
                      placeholder="Enter your New password!"
                      // value={values.password}
                      error={Boolean(touched.password && errors.password)}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      InputProps={{
                        startAdornment: (
                          <LockIcon
                            position="start"
                            style={{ color: "#2222" }}
                          ></LockIcon>
                        ),
                        endAdornment: (
                          <IconButton
                            position="end"
                            aria-label="toggle password visibility"
                            onClick={() => setShowPassword(!showPassword)}
                            // onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        ),
                      }}
                    />
                  </FormControl>
                  <FormHelperText error>
                    {touched.password && errors.password && (
                      <ul
                        style={{
                          padding: "0px 0px 0px 19px",
                          marginTop: "0px",
                        }}
                      >
                        <li>
                          Must be at least 8 Characters long, One Uppercase
                          letter, One digit, One Lowercase letter, one special
                          case Character
                        </li>
                      </ul>
                    )}
                  </FormHelperText>
                </Grid>
                <Grid item>
                  <Box mt={4}>
                    <Typography variant="body2">Confirm Password:</Typography>
                  </Box>

                  <FormControl fullWidth>
                    <TextField
                      type={showPassword1 ? "text" : "password"}
                      variant="outlined"
                      size="small"
                      placeholder="Confirm New Password!"
                      name="confirmPassword"
                      error={Boolean(
                        touched.confirmPassword && errors.confirmPassword
                      )}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      InputProps={{
                        startAdornment: (
                          <LockIcon
                            position="start"
                            style={{ color: "#2222" }}
                          ></LockIcon>
                        ),
                        endAdornment: (
                          <IconButton
                            position="end"
                            aria-label="toggle password visibility"
                            onClick={() => setShowPassword1(!showPassword1)}
                            // onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword1 ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        ),
                      }}
                    />
                  </FormControl>
                  <FormHelperText error>
                    {touched.confirmPassword && errors.confirmPassword}
                  </FormHelperText>
                </Grid>
                <Box mt={4} justifyContent="center" textAlign="center">
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    smallWidth
                    size="large"
                    style={{ borderRadius: "15px" }}
                  >
                    Submit
                    {isLoading && <ButtonCircularProgress />}
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </Container>
  );
}

export default ResetPassword;
