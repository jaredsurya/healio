import React, { useEffect, useState } from "react";
import { Stack, Typography, Box } from "@mui/material";
import { Adsense } from "@ctrl/react-adsense";

function Quote() {
  const [quotes, setQuotes] = useState([]);

  // useEffect(() => {
  //   fetch("https://zenquotes.io/api/quotes", {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => setQuotes(data));
  // }, []);
  console.log(quotes);
  return (
    <Box>
      QUOTES
      {quotes.map((quote) => {
        return <Box bgcolor={"white"}>{quote.h}</Box>;
      })}
    </Box>
  );
}

function Ad () {

  return (
    <Box>ADVERTISEMENT</Box>
  )
}

function FeaturedHealer () {

  return (
    <Box>FEATURED HEALER</Box>
  )
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
      <Stack >
        <Quote />
        <FeaturedHealer />
        <Ad />
      </Stack>
    </Box>
  );
};

export default RightBar;
