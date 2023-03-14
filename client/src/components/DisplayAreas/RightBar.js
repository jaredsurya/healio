import React, { useEffect, useState } from "react";
import { Stack, Typography, Box, Divider } from "@mui/material";
import { Adsense } from "@ctrl/react-adsense";
import Quote from "../Features/Quote";
import ProfileDetailsDisplay from "../Features/ProfileDetailsDisplay";
import Ad from "../Features/Ad";
import FeaturedHealer from "../Features/FeaturedHealer";
import SavedInterests from "../Features/SavedInterests";

// CONTENTS: Quotes, Advertisements, Featured Healer(daily)

const RightBar = ({ theme }) => {
  let size = "widget"
  return (
    <Box
      flex={3}
      height='calc(100vh - 100px)'
      overflow={"auto"}
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
        <SavedInterests />
        <Ad />
        <FeaturedHealer />
      </Stack>
    </Box>
  );
};

export default RightBar;
