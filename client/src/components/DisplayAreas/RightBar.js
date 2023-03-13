import React, { useEffect, useState } from "react";
import { Stack, Typography, Box, Divider } from "@mui/material";
import { Adsense } from "@ctrl/react-adsense";
import Quote from "../Features/Quote";
import { SavedInterests } from "./LeftBar";
import ProfileDetailsDisplay from "../Features/ProfileDetailsDisplay";


function Ad() {
  return <Box>ADVERTISEMENT</Box>;
}

function FeaturedHealer() {
  return <Box>FEATURED HEALER</Box>;
}

// CONTENTS: Quotes, Advertisements, Featured Healer(daily)

const RightBar = ({ theme }) => {
  let size = "widget"
  return (
    <Box
      flex={3}
      p={1}
      paddingTop={2}
      sx={{ display: { xs: "none", md: "none", lg: "block" } }}
      bgcolor="#f0f4ff"
    >
      <Stack
        spacing={2}
        divider={<Divider orientation="horizontal" flexItem />}
      >
        <ProfileDetailsDisplay />
        <FeaturedHealer />
        <Ad />
      </Stack>
    </Box>
  );
};

export default RightBar;
