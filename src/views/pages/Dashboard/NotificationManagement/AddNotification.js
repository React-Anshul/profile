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
    MenuItem,
    Select,
    FormControlLabel,
    Checkbox,
    withStyles
} from "@material-ui/core";
import { green } from '@material-ui/core/colors';
import { ArrowBack } from "@material-ui/icons";
import React, { useState } from "react";
import { AiFillCamera } from "react-icons/ai";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { BsUpload } from "react-icons/bs";


const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(22),
        height: theme.spacing(22),
    },
    childSection: {
        position: "relative",
        width: "180px",
    },
    iconBtn: {
        position: "absolute",
        border: "1px solid #222",
        position: "absolute",
        right: "-17px",
        top: "74%",
        padding: "12px 12px 7px !important",
    },
}));

const GreenCheckbox = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);



export default function AddNotification({ setIsOpenEdit, type }) {
    const classes = useStyles();
    const [crpoIamge, setCropImage] = useState("");
    const [status, setStatus] = useState("Active")
    const [check, setCheck] = React.useState(true)

    const handleChange = (event) => {
        setCheck({ ...check, [event.target.name]: event.target.checked });
    };

    return (
        <Container maxWidth="xxl">
            <Box className="mainContainer">
                <Box className="arrowSection">
                    <IconButton onClick={() => setIsOpenEdit(false)}>
                        <ArrowBack />
                    </IconButton>
                    {type === "add" && <Typography variant="h3">Add Notification</Typography>}
                    {type === "edit" && <Typography variant="h3">Edit Notification</Typography>}
                    {type === "view" && <Typography variant="h3">View Notification</Typography>}
                </Box>
                <Box mt={1} mb={3}>
                    <Divider />
                </Box>

                <Container maxWidth="sm">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Box align="center">
                                <Box className={classes.childSection}>
                                    <Avatar
                                        className={`${classes.large} imagesAvatar`}

                                        src={crpoIamge ? crpoIamge : "images/rice.jpeg"}
                                        alt=""
                                    />
                                    <IconButton className={classes.iconBtn}>
                                        <label htmlFor="raised-button-file-crop1">
                                        <BsUpload style={{ cursor: "pointer" }} />
                                        </label>
                                    </IconButton>
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
                                <label> Notification Title</label>
                                <Box className="labelAll">
                                    <TextField placeholder=" Notification title" variant="outlined" />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box >
                                <label>Broadcast Message</label>
                                <Box className="labelAll">
                                    <TextField
                                        placeholder="Broadcast Message"
                                        multiline
                                        rows={7}
                                        variant="outlined"
                                        fullWidth
                                    />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <label>District</label>
                            <Box className={classes.selectitem} style={{ marginTop: "6px" }}>
                                <Select
                                    variant="outlined"
                                    fullWidth
                                    onChange={(e) => setStatus(e.target.value)}
                                    value={status}
                                >

                                    <MenuItem value="Block">Block</MenuItem>
                                    <MenuItem value="Active">Active</MenuItem>
                                    <MenuItem value="Block">Block</MenuItem>
                                    <MenuItem value="Active">Active</MenuItem>
                                    <MenuItem value="Block">Block</MenuItem>
                                    <MenuItem value="Active">Active</MenuItem>
                                    <MenuItem value="Block">Block</MenuItem>
                                    <MenuItem value="Active">Active</MenuItem>
                                    <MenuItem value="Block">Block</MenuItem>
                                    <MenuItem value="Active">Active</MenuItem>
                                </Select>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <label>Taluka</label>
                            <Box className={classes.selectitem} style={{ marginTop: "6px" }}>
                                <Select
                                    variant="outlined"
                                    fullWidth
                                    onChange={(e) => setStatus(e.target.value)}
                                    value={status}
                                >
                                    <MenuItem value="Block">Block</MenuItem>
                                    <MenuItem value="Active">Active</MenuItem>
                                    <MenuItem value="Block">Block</MenuItem>
                                    <MenuItem value="Active">Active</MenuItem>
                                    <MenuItem value="Block">Block</MenuItem>
                                    <MenuItem value="Active">Active</MenuItem>
                                    <MenuItem value="Block">Block</MenuItem>
                                    <MenuItem value="Active">Active</MenuItem>
                                    <MenuItem value="Block">Block</MenuItem>
                                    <MenuItem value="Active">Active</MenuItem>
                                </Select>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <label>Village</label>
                            <Box className={classes.selectitem} style={{ marginTop: "6px" }}>
                                <Select
                                    variant="outlined"
                                    fullWidth
                                    onChange={(e) => setStatus(e.target.value)}
                                    value={status}
                                >
                                    <MenuItem value="Block">Block</MenuItem>
                                    <MenuItem value="Active">Active</MenuItem>
                                    <MenuItem value="Block">Block</MenuItem>
                                    <MenuItem value="Active">Active</MenuItem>
                                    <MenuItem value="Block">Block</MenuItem>
                                    <MenuItem value="Active">Active</MenuItem>
                                    <MenuItem value="Block">Block</MenuItem>
                                    <MenuItem value="Active">Active</MenuItem>
                                    <MenuItem value="Block">Block</MenuItem>
                                    <MenuItem value="Active">Active</MenuItem>
                                </Select>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box>
                                <label>Publish Date</label>
                                <Box className="labelAll">
                                    <KeyboardDatePicker
                                        className={classes.date}
                                        style={{ width: "100%", height: "40px" }}
                                        placeholder="DD/MM/YYYY"
                                        format="DD/MM/YYYY"
                                        inputVariant="outlined"
                                        disableFuture
                                        name="dateOfBirth"
                                    // value={fromData}
                                    // onChange={(date) => setFromData(date)}
                                    />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} align="left">
                            <Box style={{paddingLeft:"10px"}}>
                            <FormControlLabel
                                control={<GreenCheckbox checked={check.checkedG} onChange={handleChange} name="checkedG" />}
                                label="Everyone "
                                name="Everyone"
                            />
                            </Box>
                          
                        </Grid>
                        <Grid xs={12} align="center">
                            <Box align="center" p={3}>
                                {type !== "view" && (
                                    <Button variant="contained" color="primary">
                                        {type === "add" && "Add"}
                                        {type === "edit" && " Update"}
                                    </Button>
                                )}

                                <Button
                                    variant="contained"
                                    color="primary"
                                    style={{ marginLeft: "10px" }}
                                    onClick={() => setIsOpenEdit(false)}
                                >
                                    Cancel
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Container>
    );
}
