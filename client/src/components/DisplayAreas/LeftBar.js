import { ThemeProvider } from "@emotion/react";
import { Avatar, Box, Divider, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import UserContext from "../../utils/userContext";
import Map from "../Features/Map";
import Quote from "../Features/Quote";
import SavedInterests from "../Features/SavedInterests";
import SortedHealerService from "../Features/SortedHealerService";
import Welcome from "../Features/Welcome";

// MAKE INTO MINI VARIANT DRAWER AT SMALL/XS SIZES

// CONTAINS: user box, saved services (MUI chips), services/healers alphabetical, map
const LeftBar = ({ theme }) => {
  let size = "widget"
  // CANNOT SET BREAKPOINTS IN SX SETTINGS
  // sx={{display:{ xs: "none"}}}

  return (
    <Box
      height={"100%"}
      flex={3}
      bgcolor="#f0f4ff"
      p={1}
      paddingTop={2}
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
        {/* Conditional rendering of Services/Healers/Map
      Switch Statement */}
      </Stack>
    </Box>
  );
};

export default LeftBar;
