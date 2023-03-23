import {
    Avatar,
    Box,
    Button,
    Container,
    Grid,
    makeStyles,
    TextField,
    Typography,
    Divider,
    IconButton,
    MenuItem,
    FormHelperText,
    Select,
  } from "@material-ui/core";
  import zIndex from "@material-ui/core/styles/zIndex";
  import { ArrowBack } from "@material-ui/icons";
  import { Form, Formik } from "formik";
  import React, { useState } from "react";
  import { BsUpload } from "react-icons/bs";
  import { useHistory } from "react-router-dom";
  import * as yup from "yup";
  
  const useStyles = makeStyles((theme) => ({
    avatorSection: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
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
  
    document: {
      height: "100%",
      maxHeight: "250px",
      width: "100%",
      maxWidth: "250px",
      overflow: "hidden",
      borderRadius: "10px",
      position: "relative",
      cursor: "pointer",
    },
    imgDocument: {
      width: "250px",
      height: "250px",
      borderRadius: "10px",
      "& img": {
        objectFit: "cover",
        height: "250px",
      },
    },
    document1: {
      height: "100%",
      maxHeight: "250px",
      width: "93.7%",
      cursor: "pointer",
  
      overflow: "hidden",
      borderRadius: "10px",
      position: "relative",
      zIndex: "1",
    },
    imgDocument1: {
      height: "250px",
      borderRadius: "10px",
      "& img": {
        objectFit: "cover",
        height: "250px",
      },
    },
    mainBody: {
      "& h6": {
        paddingBottom: "6px",
      },
    },
  }));
  
  const formInitialSchema = {
    name: "",
    lastname:"",
    mobile: "",
    address: "",
    state: "",
    city: "",
    village: "",
    pincode: "",
    email: "",
    taluk: "",
  };
  const formValidationSchema = yup.object().shape({
    name: yup.string().required("First name is required"),
    lastname: yup.string().required("Last name is required"),
  
    mobile: yup.string().required("Mobile is required"),
    address: yup.string().required("Address is required"),
    state: yup.string().required("State is required"),
    city: yup.string().required("City is required"),
    village: yup.string().required("Village is required"),
    pincode: yup.string().required("Pin code is required"),
    taluk: yup.string().required("Taluk is required"),
    email: yup
      .string()
      .email("You have entered an invalid email address. Please try again")
      .required("Email address is required")
      .matches("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"),
  });
  
  export default function AddPartner({ setIsOpenAdd, type, call }) {
    const classes = useStyles();
    const history = useHistory();
    const [cropImage, setCropImage] = useState("");
    const [cropImageUrl, setCropImageUrl] = useState("");
  
    const [panFront, setPanFront] = useState("");
    const [panBack, setPanBack] = useState("");
    const [aadharFront, setAadharFront] = useState("");
    const [aadharBack, setAadharBack] = useState("");
    const [bankFront, setBankFront] = useState("");
    const [bankBack, setBankBack] = useState("");
    const [passportPhoto, setPassportPhoto] = useState("");
    const [status,setStatus] = useState("Andhra");
    const [city,setCity] = useState("Noida");
  
  
  
    const handleFormSubmit = async () => {};
  
    return (
      <Container maxWidth="xxl" className={classes.mainBody}>
    
            
                <Grid container spacing={3}>
            
            

                  <Grid item xs={12}>
                    <Box mt={5} mb={2}>
                    <Typography variant="h3">Uploaded Documents :

</Typography>

                    </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Box>
                      <Typography variant="h6">1. PAN CARD</Typography>
                    </Box>
  
                    <Grid container>
                      <Grid item lg={6} md={6} sm={12} xs={12}>
                        <label htmlFor="raised-button-file-panfront">
                          <Box className={classes.document}>
                            <Box className={classes.imgDocument}>
                              <img
                                src={panFront ? panFront : "images/pan1.jpeg"}
                                width="100%"
                              />
                            </Box>
                          </Box>
                        </label>
{/*   
                        <input
                          accept="image/*"
                          style={{ display: "none" }}
                          id="raised-button-file-panfront"
                          type="file"
                          onChange={(e) =>
                            setPanFront(URL.createObjectURL(e.target.files[0]))
                          }
                        /> */}
                      </Grid>
  
                      <Grid item lg={6} md={6} sm={12} xs={12}>
                        <label htmlFor="raised-button-file-panback">
                          <Box className={classes.document}>
                            <Box className={classes.imgDocument}>
                              <img
                                src={panBack ? panBack : "images/backpan.jpeg"}
                                width="100%"
                              />
                            </Box>
                          </Box>
                        </label>
  
                        {/* <input
                          accept="image/*"
                          style={{ display: "none" }}
                          id="raised-button-file-panback"
                          type="file"
                          onChange={(e) =>
                            setPanBack(URL.createObjectURL(e.target.files[0]))
                          }
                        /> */}
                      </Grid>
                    </Grid>
                  </Grid>
  
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Box>
                      <Typography variant="h6">
                        2. ID Proof (Aadhar/Voter ID)
                      </Typography>
                    </Box>
  
                    <Grid container>
                      <Grid item lg={6} md={6} sm={12} xs={12}>
                        <label htmlFor="raised-button-file-aadharfront">
                          <Box className={classes.document}>
                            <Box className={classes.imgDocument}>
                              <img
                                src={
                                  aadharFront ? aadharFront : "images/addhar.jpeg"
                                }
                                width="100%"
                              />
                            </Box>
                          </Box>
                        </label>
{/*   
                        <input
                          accept="image/*"
                          style={{ display: "none" }}
                          id="raised-button-file-aadharfront"
                          type="file"
                          onChange={(e) =>
                            setAadharFront(URL.createObjectURL(e.target.files[0]))
                          }
                        /> */}
                      </Grid>
  
                      <Grid item lg={6} md={6} sm={12} xs={12}>
                        <label htmlFor="raised-button-file-aadharback">
                          <Box className={classes.document}>
                            <Box className={classes.imgDocument}>
                              <img
                                src={aadharBack ? aadharBack : "images/back11.jpeg"}
                                width="100%"
                              />
                            </Box>
                          </Box>
                        </label>
{/*   
                        <input
                          accept="image/*"
                          style={{ display: "none" }}
                          id="raised-button-file-aadharback"
                          type="file"
                          onChange={(e) =>
                            setAadharBack(URL.createObjectURL(e.target.files[0]))
                          }
                        /> */}
                      </Grid>
                    </Grid>
                  </Grid>
  
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Box>
                      <Typography variant="h6">
                        3. Bank Statement and Passbook
                      </Typography>
                    </Box>
  
                    <Grid container>
                      <Grid item lg={6} md={6} sm={12} xs={12}>
                        <label htmlFor="raised-button-file-bankfront">
                          <Box className={classes.document}>
                            <Box className={classes.imgDocument}>
                              <img
                                src={bankFront ? bankFront : "images/bank.jpeg"}
                                width="100%"
                              />
                            </Box>
                          </Box>
                        </label>
  
                        {/* <input
                          accept="image/*"
                          style={{ display: "none" }}
                          id="raised-button-file-bankfront"
                          type="file"
                          onChange={(e) =>
                            setBankFront(URL.createObjectURL(e.target.files[0]))
                          }
                        /> */}
                      </Grid>
  
                      <Grid item lg={6} md={6} sm={12} xs={12}>
                        <label htmlFor="raised-button-file-bankback">
                          <Box className={classes.document}>
                            <Box className={classes.imgDocument}>
                              <img
                                src={bankBack ? bankBack : "images/bank.jpeg"}
                                width="100%"
                              />
                            </Box>
                          </Box>
                        </label>
  
                        {/* <input
                          accept="image/*"
                          style={{ display: "none" }}
                          id="raised-button-file-bankback"
                          type="file"
                          onChange={(e) =>
                            setBankBack(URL.createObjectURL(e.target.files[0]))
                          }
                        /> */}
                      </Grid>
                    </Grid>
                  </Grid>
  
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Box>
                      <Typography variant="h6">
                        4. Recent Passport Size Photograph
                      </Typography>
                    </Box>
  
                    <label htmlFor="raised-button-file-passport">
                      <Box className={classes.document}>
                        <Box className={classes.imgDocument}>
                          <img
                            src={
                              passportPhoto ? passportPhoto : "images/picimg.jpeg"
                            }
                            width="100%"
                          />
                        </Box>
                      </Box>
                    </label>
  
                    {/* <input
                      accept="image/*"
                      style={{ display: "none" }}
                      id="raised-button-file-passport"
                      type="file"
                      onChange={(e) =>
                        setPassportPhoto(URL.createObjectURL(e.target.files[0]))
                      }
                    /> */}
                  </Grid>
  
                  <Grid item lg={6} md={6} sm={12} xs={12}></Grid>
                  {/* {type !== "view" && (
                    <Grid xs={12}>
                      <Box className={classes.avatorSection}>
                        <Box>
                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                          >
                            Add
                          </Button>
                        </Box>
                      </Box>
                    </Grid>
                  )} */}
                  {call === "partner" && (
                    <Grid xs={12}>
                      <Box className={classes.avatorSection}>
                        <Box>
                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            style={{ marginRight: "12px" }}
                          >
                            Accept
                          </Button>
                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                          >
                            Reject
                          </Button>
                        </Box>
                      </Box>
                    </Grid>
                  )}
                </Grid>
          
      </Container>
    );
  }
  