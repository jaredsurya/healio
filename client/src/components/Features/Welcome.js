import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import SwitcherContext from "../../utils/switcherContext";

function Welcome({ size }) {
  const { feedShow, setFeedShow, showSize, setShowSize } =
    useContext(SwitcherContext);

  if (size === "large") {
    return (
      <Box>
        <Typography variant="h2">WELCOME!</Typography>
        <Typography>Healio greets with the kindest tidings and appreciates your stopping in. 
          If you are a ~Healer~ please fill out all of your account details to be properly represented on our page.
        </Typography>
      </Box>
    );
  } else {
    return <Box>
      Welcome to Healio!
    </Box>;
  }
}

export default Welcome;
