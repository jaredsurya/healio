import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import SwitcherContext from "../../utils/switcherContext";

function SortedHealerService({size}) {
  const { feed, setFeed } = useContext(SwitcherContext);

  if (size === "large") {
    return (
      <Box>
        <Typography variant="h5" align="center"></Typography>
      </Box>
    );
  } else {
    return (
      <Box onClick={() => setFeed("sortedhealerservice")}>
        <Box id="buttons" justifyContent={"space-evenly"}>
          <Button variant="outlined">Healers</Button>
          <Button variant="outlined" color="secondary">Services</Button>
        </Box>
        <Box>LIST GOES HERE</Box>
      </Box>
    );
  }
}

export default SortedHealerService;
