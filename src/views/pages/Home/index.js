import React from "react";
import { Box } from "@material-ui/core";
import Page from "src/component/Page";
// import Banner from "./Banner";
import SideBar from "./sidebar/SideBar";

function Home(props) {
  return (
    <Page title="Marketplace | MetaArts">
      <Box>
        <SideBar />
      </Box>
    </Page>
  );
}

export default Home;
