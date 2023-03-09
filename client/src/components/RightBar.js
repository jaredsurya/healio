import React, { useEffect, useState } from "react";
import { Stack, Typography, Box, Divider } from "@mui/material";
import { Adsense } from "@ctrl/react-adsense";
import Quote from "./Quote";


function Ad() {
  return <Box>ADVERTISEMENT</Box>;
}

function FeaturedHealer() {
  return <Box>FEATURED HEALER</Box>;
}

// CONTENTS: Quotes, Advertisements, Featured Healer(daily)

const RightBar = ({ theme }) => {
  return (
    <Box
      flex={3}
      p={1}
      paddingTop={2}
      sx={{ display: { xs: "none", md: "none", lg: "block" } }}
      bgcolor="#f7e1e7"
    >
      <Stack
        spacing={2}
        divider={<Divider orientation="horizontal" flexItem />}
      >
        <Quote />
        <FeaturedHealer />
        <Ad />
      </Stack>
    </Box>
  );
};

export default RightBar;
