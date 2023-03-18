import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import SwitcherContext from "../../utils/switcherContext";

function SortedHealerService({size}) {
  const { feed, setFeed } = useContext(SwitcherContext);

  if (size === "large") {
    return (
      <Box>
        <Typography variant="h5" align="center">Click the buttons below to explore the healers of this site and the services they offer.</Typography>
      </Box>
    );
  } else {
    return (
      <Box onClick={() => setFeed("sortedhealerservice")}>
        <Box id="buttons" align="center" justifyItems={"space-between"}>
          <Button variant="outlined" color="secondary">Services</Button>
          <Button variant="outlined">Healers</Button>
        </Box>
        <Box>LIST GOES HERE</Box>
      </Box>
    );
  }
}

export default SortedHealerService;
