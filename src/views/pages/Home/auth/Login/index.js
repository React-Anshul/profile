import React, { useState, useEffect, useContext } from "react";
import "src/scss/main.css";

import {
  Box,
  Typography,
  Grid,
  Button,
  Link,
  Paper,
  FormControl,
  TextField,
  IconButton,
  FormHelperText,
  Container,
} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { makeStyles } from "@material-ui/core";
import Page from "src/component/Page";
import { Formik, Form } from "formik";
import { ReactSession }  from 'react-client-session';
// import Apiconfigs from "src/ApiConfig/ApiConfig";
import axios from "axios";
import * as yup from "yup";
import { toast } from "react-toastify";
import LockIcon from "@material-ui/icons/Lock";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { useHistory, Link as RouterComponent } from "react-router-dom";
import ButtonCircularProgress from "src/component/ButtonCircularProgress";
import { AuthContext } from "src/context/Auth";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    "& .checkbox": {
      display: "flex",
      alignItems: "center",
    },
  },
  boxShadow: {
    width: "100%",
    boxShadow: "2px 9px 40px -26px #1514187a !important",
    borderRadius: "15px",
    background: "#fff",
    "& .typo": {
      textAlign: "center",
      "& h2": {
        // padding: "30px 0px 50px",
      },
    },
  },

  loginBox: {
    padding: "0px 30px 30px",
  },

  // box: {
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   height: "100%",
  //  // marginTop: "100px",
  //    margin:"100px 0px",
  // },
  imgSection: {
    height: "100px",
    width: "120px",
    "& img": {
      height: "100%",
      minHeight: "100px",
      objectFit: "cover",
    },
  },
  btn: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    padding: "5px 12px",
  },
}));

function Login(props) {
  const classes = useStyles();
  
  const auth = useContext(AuthContext);
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const handleuserName = (e) => {
    setUserName(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  
  const formInitialSchema = {
    email: "",
    password: "",
  };
  const formValidationSchema = yup.object().shape({
    // email: yup
    //   .string()
    //   .email("You have entered an invalid email address. Please try again")
    //   .required("Email address is required")
    //   .matches("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"),
    password: yup.string().required("Password is required"),
  });
  
  const handleApi = () => {
    var myHeaders = new Headers();
    console.log({ username, password });
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      password: password,
      userName: username,

    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch("https://uat.softmintdigital.com/report-service/auth/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        if (result.token !== undefined) {
          history.push({
            pathname: '/dashboard',
            location:{state: null,},
          })
          ReactSession.set("token", result.token);
          window.sessionStorage.setItem("token", result.token);
          localStorage.setItem("token",result.token);
          localStorage.setItem("userid", result.userDetails.userName);
          localStorage.setItem("object", result.userDetails);
        }
        if (result.token === undefined) {
          alert('Invalid User')
        }
      })
      .catch((error) => console.log("error", error));
  }



  
  useEffect(() => {
    if (window.sessionStorage.getItem("token")) {
      window.sessionStorage.removeItem("token");
    }
  }, [window.sessionStorage.getItem("token")]);

  const [checked, setChecked] = React.useState(false);

  const handleChange1 = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Container maxWidth="sm"> 
      <Box title="Sign In" className={classes.boxShadow}>
        <Box className="typo">
          <img src="images\logo.png" alt="images" style={{height:"80px"}}/>
          <Typography variant="h2">Login</Typography>
        </Box>
        <Box className={classes.loginBox}>
          <Formik
            // onSubmit={(values) => handleFormSubmit(values)}
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
                <Box className="loginForm">
                  <Grid container direction={"column"} spacing={2}>
                    <Grid item>
                      <Box mt={4} mb={1}>

                      <Typography variant="body2">Username:</Typography>
                      </Box>
                      <FormControl fullWidth>
                        <TextField
                          type="text"
                          variant="outlined"
                          size="small"
                          autoComplete="new-username"
                          onChange={handleuserName}
                          value={username}
                          placeholder="UserName"
                          // name="email"
                          // placeholder="Enter your email"
                          // value={values.email}
                          fullWidth
                          error={Boolean(touched.email && errors.email)}
                          onBlur={handleBlur}
                          // onChange={handleChange}
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
                      <FormHelperText
                        error
                        style={{ margin: "0px", fontSize: "12px" }}
                      >
                        {touched.email && errors.email}
                      </FormHelperText>
                    </Grid>
                    <Grid item>
                        
                      <Box mb={1}>
                      <Typography variant="body2">Password:</Typography>
                      </Box>
                      <FormControl fullWidth>
                        <TextField
                          type={showPassword ? "text" : "password"}
                          variant="outlined"
                          size="small"
                          name="password"
                          placeholder="Enter your password!"
                          autoComplete="new-password"
                    onChange={handlePassword}
                    value={password}
                          // onChange={handleChange}
                          // value={values.password}
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
                                {showPassword ? (
                                  <Visibility />
                                ) : (
                                  <VisibilityOff />
                                )}
                              </IconButton>
                            ),
                          }}
                        />
                      </FormControl>
                      <FormHelperText
                        error
                        style={{ margin: "0px", fontSize: "12px" }}
                      >
                        {touched.password && errors.password}
                      </FormHelperText>
                    </Grid>
                    <Grid item>
                      <Box className={classes.root}>
                        <Box style={{ display: "flex", alignItems: "center" }}>
                          <Checkbox
                            checked={checked}
                            onChange={handleChange1}
                            inputProps={{
                              "aria-label": "checkbox with default color",
                            }}
                            style={{ color: "#222" }}
                          />
                          <Typography variant="h5" style={{ fontSize: "15px" }}>
                            Remember Me
                          </Typography>
                        </Box>
                        <Typography variant="body2">
                          <Link
                            style={{
                              textDecoration: "none",
                              color: "#811dd2",
                              fontWeight: 600,
                            }}
                            component={RouterComponent}
                            to="/forget-password"
                          >
                            Forgot Password?
                          </Link>
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item>
                      <Box className={classes.btn}>
                        <Button
                          variant="contained"
                          type="submit"
                          color="primary"
                          smallWidth
                          size="large"
                          disabled={isLoading}
                          onClick={handleApi}
                          // onClick={()=>history.push("/dashboard")}
                        >
                          Log In
                          {isLoading && <ButtonCircularProgress />}
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
