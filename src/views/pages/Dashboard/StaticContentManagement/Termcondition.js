import { Box,FormHelperText ,Button,Grid,Typography,TextField} from "@material-ui/core";
import JoditEditor from "jodit-react";

import React,{useRef,useState} from "react";
import TopHeaderSection from "src/component/TopHeaderSection";


export default function Termcondition() {
    const editor = useRef(null);
    const [descritionValue, setdescriptionValue] = useState();
    const [isSubmit, setIsSubmit] = useState(false);
    const [title, setTitle] = useState();

  return (
    <>
        <Box className="tophead">
    <TopHeaderSection heading="Terms & condition" />
  </Box>
    <Box className="mainContainer1">
    <form onSubmit={(event) => (event)}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Box mb={3}>
                <Typography variant="h6">Title</Typography>

                <TextField
                  type="text"
                  size="small"
                  variant="outlined"
                  fullWidth
                  name="title"
                  // value={title}
                  value={title}
                  // onBlur={handleBlur}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Box>
            </Grid>
          </Grid>

          <Grid conatiner>
            <Grid item xs={12}>
              <JoditEditor
                ref={editor}
                // disabled={isEdit}
                // {staticContentData?.description}
                value={descritionValue}
                // config={config}
                variant="outlined"
                name="descritionValue"
                fullWidth
                size="small"
                tabIndex={1}
                onChange={(newContent) => {}}
                onBlur={(e) => setdescriptionValue(e)}
              />
              {isSubmit && descritionValue === "" && (
                <FormHelperText error>Description is required</FormHelperText>
              )}
            </Grid>
          </Grid>
          <Box textAlign="center" mt={2}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
            //   onClick={editStaticContentHandler}
            >
              UPDATE
            </Button>
          </Box>
        </form>
    </Box>
    </>

  );
}
