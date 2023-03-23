import {
  Box,
  makeStyles,
  Avatar,
  Grid,
  Button,
  Container,
  Typography,
  FormHelperText,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import TopHeaderSection from "src/component/TopHeaderSection";
import BackupIcon from "@material-ui/icons/Backup";
import { Form, Formik } from "formik";
import * as yep from "yup";

const useStyles = makeStyles((theme) => ({
  imgSection: {
    "& .MuiAvatar-root": {
      width: "150px",
      height: "150px",
    },
    "& img": {
      objectFit: "cover",
      borderRadius: "10px",
    },
  },
  uploadIcon: {
    position: "relative",
    top: "-38px",
    right: "-50px",
    borderRadius: "50px",
    fontSize: "30px",
    cursor: "pointer",
  },
}));

export const getBase64 = (file, cb) => {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    cb(reader.result);
  };
  reader.onerror = function (err) {
    console.log("Error: ", err);
  };
};

function Settings() {
  const classes = useStyles();
  const [isEditOn, setIsEditOn] = useState(false);
  const [profileImage, setProfileImage] = useState("");
  const [profileImage64, setProfileImage64] = useState();
  const [profileData, setProfileData] = useState({
    profilePic: "",
    firstName: "Jatindut",
    email: "jatin@mailinator.com",
    mobileNumber: "8545865458",
    dateofbirth: "03-11-2001",
    gender:"Male",
    address:"New Jersy, USA"
  });
  const formValidationSchema = yep.object().shape({
    sponser: yep.string().trim(),

    firstname: yep
      .string()
      .required("Name is required.")
      .matches(/^[A-Za-z]+$/, "Only alphabets are allowed.")
      .min(2, "Should be 2 character long.")
      .max(24, "should not exceed 20 characters."),
   
    email: yep
      .string()
      .email("Please enter a valid email address.")
      .required("Email is required."),

      phone: yep
        .string()
        .required("Phone number is required."),

        dateofbirth: yep
        .string()
        .required("Date of Birth is required."),
        gender:yep
        .string()
        .required("Gender is required."),
      
  });

  return (
    <Container maxWidth="md">
      <Box className="tophead">
        <TopHeaderSection heading="MY PROFILE" />
      </Box>
      <Box className="mainContainer1">
        <Box align="right" className="btnbox" mt={2} mb={2}>
          <Button
            variant="contained"
            color="primary"
            className="btn"
            onClick={() => setIsEditOn(!isEditOn)}
          >
            Edit Profile
          </Button>
          
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/change-password"
              className="btn"
              style={{marginLeft:"15px"}}
            >
              Change Password
            </Button>
         
        </Box>
        <Box style={{ minHeight: "188px" }}>
          <Box className={classes.imgSection} align="center">
            <Avatar
              src={
                profileImage64
                  ? profileImage64
                  : "images/rice.jpeg"
              }
              alt=""
              className="img"
              width="100%"
            />
            {isEditOn && (
              <>
                <input
                  accept="image/*"
                  style={{ display: "none" }}
                  id="raised-button-file"
                  multiple
                  type="file"
                  onChange={(e) => {
                    setProfileImage(URL.createObjectURL(e.target.files[0]));
                    getBase64(e.target.files[0], (result) => {
                      setProfileImage64(result);
                    });
                  }}
                />
                <Box display="flex" justifyContent="center">
                  <label htmlFor="raised-button-file">
                    {" "}
                    <BackupIcon className={classes.uploadIcon} />
                  </label>
                </Box>
              </>
            )}
          </Box>
        </Box>

        {profileData && profileData.firstName !== "" && (
          <Formik
            initialValues={{
              firstname: profileData.firstName ? profileData.firstName : "",
              gender: profileData.gender ? profileData.gender : "",
              email: profileData.email ? profileData.email : "",
              phone: profileData.mobileNumber ? profileData.mobileNumber : "",
              dateofbirth: profileData.dateofbirth ? profileData.dateofbirth : "",
              address: profileData.address ? profileData.address : "",
            }}
            initialStatus={{
              success: false,
              successMsg: "",
            }}
            validationSchema={formValidationSchema}
            onSubmit={(values) => (values)}
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
                <Box style={{ display: "flex", justifyContent: "center" }}>
                  <Grid container spacing={3} style={{ maxWidth: "600px" }}>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Typography variant="body2">Name:</Typography>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <TextField
                        type="text"
                        placeholder="name"
                        variant="outlined"
                        fullWidth
                        name="firstname"
                        id="firstname"
                        value={values.firstname}
                        error={Boolean(touched.firstname && errors.firstname)}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        disabled={!isEditOn}
                      />
                      <FormHelperText error className={classes.helperText}>
                        {touched.firstname && errors.firstname}
                      </FormHelperText>
                    </Grid>

                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Typography variant="body2">Email</Typography>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <TextField
                        type="text"
                        placeholder="Email Address"
                        variant="outlined"
                        fullWidth
                        name="email"
                        id="email"
                        value={values.email}
                        error={Boolean(touched.email && errors.email)}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        disabled={!isEditOn}
                      />
                      <FormHelperText error className={classes.helperText}>
                        {touched.email && errors.email}
                      </FormHelperText>
                    </Grid>

                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Typography variant="body2">Mobile Number:</Typography>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <TextField
                        placeholder="Phone"
                        name="phone"
                        variant="outlined"
                        fullWidth
                        value={values.phone}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        disabled={!isEditOn}
                        error={Boolean(touched.phone && errors.phone)}
                      />
                      <FormHelperText error className={classes.helperText}>
                        {touched.phone && errors.phone}
                      </FormHelperText>
                    </Grid>

                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Typography variant="body2">Date of Birth:</Typography>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <TextField
                        type="text"
                        placeholder="dateofbirth"
                        variant="outlined"
                        fullWidth
                        name="dateofbirth"
                        id="dateofbirth"
                        value={values.dateofbirth}
                        error={Boolean(touched.dateofbirth && errors.dateofbirth)}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        disabled={!isEditOn}
                      />
                      <FormHelperText error className={classes.helperText}>
                        {touched.dateofbirth && errors.dateofbirth}
                      </FormHelperText>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Typography variant="body2">Gender:</Typography>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <TextField
                        type="text"
                        placeholder="LastNme"
                        variant="outlined"
                        fullWidth
                        name="gender"
                        id="gender"
                        value={values.gender}
                        error={Boolean(touched.gender && errors.gender)}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        disabled={!isEditOn}
                      />
                      <FormHelperText error className={classes.helperText}>
                        {touched.gender && errors.gender}
                      </FormHelperText>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Typography variant="body2">Address:</Typography>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <TextField
                        type="text"
                        placeholder="LastNme"
                        variant="outlined"
                        fullWidth
                        name="address"
                        id="address"
                        value={values.address}
                        error={Boolean(touched.address && errors.address)}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        disabled={!isEditOn}
                      />
                      <FormHelperText error className={classes.helperText}>
                        {touched.address && errors.address}
                      </FormHelperText>
                    </Grid>

                    <Grid item lg={6} md={6} sm={6} xs={12} align="center">
                      <Box>
                        {isEditOn && (
                          <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                          >
                            update
                          </Button>
                        )}
                      </Box>
                    </Grid>

                    <Grid item lg={6} md={6} sm={6} xs={12} align="center">
                      <Box>
                        {isEditOn && (
                          <Button
                            variant="contained"
                            color="primary"
                           
                            onClick={() => setIsEditOn(!isEditOn)}
                          >
                            Cancle
                          </Button>
                        )}
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Form>
            )}
          </Formik>
        )}

      
      </Box>
    </Container>
  );
}

export default Settings;
