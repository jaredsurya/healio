import React from "react";
import NavBar from "../components/NavBar";
import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";
import Feed from "../components/Feed";
import { createTheme, Grid, Stack } from "@mui/material";
import themeOptions from "../utils/themeOptions";

const theme = createTheme(themeOptions);

const Main = () => {
  return (
    <div>
      <NavBar />
      <Stack direction="row" spacing={.7} lg={12} justifyContent="space-between">
        <LeftBar theme={theme}/>
        <Feed theme={theme}/>
        <RightBar theme={theme}/>
      </Stack>
    </div>
  );
};

export default Main;
