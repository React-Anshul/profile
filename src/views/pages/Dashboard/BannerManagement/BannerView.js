import {
    Box,
    makeStyles,
    Avatar,
    Grid,
    Button,
    Container,
    Typography,
    FormControl,
    TextField,
    FormHelperText,
  } from "@material-ui/core";
  import React from "react";
  import { useHistory } from "react-router-dom";
  
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
  }));
  
  function BannerView() {
    const classes = useStyles();
    const history = useHistory();

    return (
      <Container maxWidth="md">
        <Box className="mainContainer">
          <Box align="left">
            <Typography variant="h4"> BANNER MANAGEMENT / VIEW</Typography>
          </Box>
  
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "4rem",
            }}
          >
            <Grid container spacing={4} style={{ maxWidth: "600px" }}>
              <Grid item xs={5}>
                Title:
              </Grid>
              <Grid item xs={7}>
                {/* <FormControl fullWidth>
                  <TextField
                    type="text"
                    variant="outlined"
                    size="small"
                    name="email"
                    placeholder="Enter Title"
                    fullWidth
                  />
                </FormControl> */}
                1st Banner
              </Grid>
              <Grid item xs={5}>
              Banner Image:
              </Grid>
            
  
              <Grid item xs={12} sm={6} style={{ width: "100%" }}>
                <Box className={classes.avatarsection}>
                  <Avatar
                    src="/images/addhar.jpeg"
                    className={classes.avatar}
                  />
                </Box>
            

               
              </Grid>
              <Grid item xs={5}>
                URL:
              </Grid>
              <Grid item xs={7}>
              https://www.abc.com/
                {/* <FormControl fullWidth>
                  <TextField
                    type="text"
                    variant="outlined"
                   
                    size="small"
                    name="password"
                    placeholder="Enter Description"
                    fullWidth
                  />
                </FormControl> */}
              </Grid>
            </Grid>
          </Box>
          <Box align="center" className="btnbox" style={{}} mt={4}>
          
            <Button
              variant="contained"
              color="primary"
            
              className="btn"
              onClick={() => history.goBack("")}
            >
              Back
            </Button>
          </Box>
        </Box>
      </Container>
      
    );
  }
  
  export default BannerView;
  