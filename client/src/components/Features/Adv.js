import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import SwitcherContext from "../../utils/switcherContext";

function Adv() {
  const { feed, setFeed } = useContext(SwitcherContext);

  return (
    <Box>
      <Typography>Advertisement: Stretch Goal</Typography>
    </Box>
  );
}


export default Adv;
