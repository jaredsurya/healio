import { ThemeProvider } from "@emotion/react";
import { Avatar, Box, Divider, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import UserContext from "../../utils/userContext";
import Map from "../Features/Map";
import Quote from "../Features/Quote";
import SavedInterests from "../Features/SavedInterests";
import SortedHealerService from "../Features/SortedHealerService";
import Welcome from "../Features/Welcome";


const LeftBar = ({ theme }) => {
  let size = "widget"

  return (
    <Box
      flex={3}
      height='calc(100vh - 100px)'
      bgcolor="#f0f4ff"
      p={1}
      paddingTop={2}
      overflow="auto"
      sx={{ display: { xs: "none", md: "block" } }}
    >
      <Stack
        spacing={2}
        divider={<Divider orientation="horizontal" flexItem />}
      >
        <Welcome />
        <Quote size={size}/>
        <SortedHealerService />
        <Map />
      </Stack>
    </Box>
  );
};

export default LeftBar;
