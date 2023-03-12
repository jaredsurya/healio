import React from "react";
import NavBar from "../components/DisplayAreas/NavBar";
import LeftBar from "../components/DisplayAreas/LeftBar";
import RightBar from "../components/DisplayAreas/RightBar";
import Feed from "../components/DisplayAreas/Feed";
import themeOptions from "../utils/themeOptions";
import { createTheme, Stack, ThemeProvider } from "@mui/material";

const theme = createTheme(themeOptions);

//Create Menu context for both left and right menus, with state variables and setters for both


const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Stack direction="row" marginTop={1} spacing={.7} lg={12} justifyContent="space-between">
        <LeftBar theme={theme}/>
        <Feed theme={theme}/>
        <RightBar theme={theme}/>
      </Stack>
    </ThemeProvider>
  );
};

export default Main;
