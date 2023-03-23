import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  makeStyles,
  TextField,
  Typography,
  
} from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { DropzoneArea } from "material-ui-dropzone";

import { ArrowBack } from "@material-ui/icons";
import React, { useState } from "react";
import { BsUpload } from "react-icons/bs";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(22),
    height: theme.spacing(22),
  },
  childSection: {
    position: "relative",
    // width: "180px",
  },
  iconBtn: {
    position: "absolute",
    border: "1px solid #222",
    position: "absolute",
    right: "-17px",
    top: "74%",
    color:"#000",
    padding: "12px 12px 7px !important",
  },
}));

export default function EditFarmer({ setIsOpenEdit, type,  fromData,
  setFromData, }) {
  const classes = useStyles();
  const [crpoIamge, setCropImage] = useState("");
  const [image,setimage]=useState();
  console.log("dkajbFB",image)

  return (
    <Container maxWidth="xxl">
      <Box className="mainContainer">
        <Box className="arrowSection">
          <IconButton onClick={() => setIsOpenEdit(false)}>
            <ArrowBack />
          </IconButton>
          {type === "add" ? (
            <Typography variant="h3">Add Category</Typography>
          ) : (
            <Typography variant="h3">Edit Category </Typography>
          )}
        </Box>
        <Box mt={1} mb={3}>
          <Divider />
        </Box>

        <Grid container spacing={3} direction="column" justifyContent="center">
          <Container maxWidth="sm">
            <Grid item xs={12}>
              <Box align="center">
                <Box className={classes.childSection}>
                  {/* <Avatar
                    className={`${classes.large} imagesAvatar`}
                    src={crpoIamge ? crpoIamge : "images/rice.jpeg"}
                    alt=""
                  /> */}

                  <DropzoneArea
                       style={{marginTop:'5px'}}
                      onChange={(files) => setimage(files)}
                      className={`${classes.large} imagesAvatar`}
                      src={crpoIamge ? crpoIamge : "images/rice.jpeg"}
                      alt=""
                      dropzoneText="Drag & Drop files Here"
                    />
                  {/* <IconButton className={classes.iconBtn}>
                    <label htmlFor="raised-button-file-crop1">
                      <BsUpload style={{ cursor: "pointer" }} />
                    </label>
                  </IconButton> */}
                </Box>
              </Box>
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="raised-button-file-crop1"
                type="file"
                onChange={(e) =>
                  setCropImage(URL.createObjectURL(e.target.files[0]))
                }
              />
            </Grid>

            <Grid item xs={12}>
              <Box pt={3}>
                <label> Name</label>
                <Box className="labelAll">
                  <TextField placeholder=" Category name" variant="outlined" />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box pt={3}>
                <label> Publish Date</label>
                <Box className="labelAll">
                <KeyboardDatePicker
            className={classes.date}
            style={{ width: "100%", height: "40px" }}
            placeholder="DD/MM/YYYY"
            format="DD/MM/YYYY"
            inputVariant="outlined"
            disableFuture
            name="dateOfBirth"
            value={fromData}
            onChange={(date) => setFromData(date)}
          />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box pt={3}>
                <label> Description</label>
                <Box className="labelAll">
                  <TextField
                    placeholder="Category Description"
                    variant="outlined"
                    multiline
                    rows={7}
                    fullWidth
                  />
                </Box>
              </Box>
            </Grid>

         

            <Grid xs={12}>
              <Box align="center" p={3}>
              
                <Button
                  variant="contained"
                  color="primary"
               
                  onClick={() => setIsOpenEdit(false)}
                >
                  Cancel
                </Button>
                <Button variant="contained" color="primary"
                   style={{ marginLeft: "10px" }}
                   >
                  Update
                </Button>
              </Box>
            </Grid>
          </Container>
        </Grid>
      </Box>
    </Container>
  );
}
