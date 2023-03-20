import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import SwitcherContext from "../../utils/switcherContext";
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

function SortedHealerService({size}) {
  const { feed, setFeed } = useContext(SwitcherContext);


  function onServicesClick(){
    //return jsx with list of services
  }

  function onHealersClick(){
    //return jsx with list of healers
  }


  if (size === "large") {
    return (
      <Box>
        <Typography variant="h5" align="center">Click the buttons below to explore the featured services and who offers them.</Typography>
        <Box id="buttons" align="center" justifyItems={"space-between"}>
          <Button variant="outlined" color="secondary">Services</Button>
          <AllInclusiveIcon style={{fontSize: "2rem", color: "#0e643e", verticalAlign: "middle", padding: "12px"}}/>
          <Button variant="outlined" color="secondary">Healers</Button>
        </Box>
      </Box>
    );
  } else {
    return (
      <Box onClick={() => setFeed("sortedhealerservice")}>
        <Box id="buttons" align="center" justifyItems={"space-between"}>
          <Button variant="outlined" color="secondary">Services</Button>
          <AllInclusiveIcon style={{fontSize: "2rem", color: "#0e643e", verticalAlign: "middle", padding: "12px"}}/>
          <Button variant="outlined" color="secondary">Healers</Button>
        </Box>
        <Box height={"400px"} overflow="auto">
          {/* MAKE A STACK HERE THAT HAS A DIVIDER BETWEEN THEM. MAKE AVATARS FOR EACH HEALER THAT IS ASSOCIATED WITH A SERVICE, VICE VERSA */}
          <Typography>THE BLESSED WANDERED INTO THE LIGHT.</Typography>
          <Typography>THE BLESSED WANDERED INTO THE LIGHT.</Typography>
          <Typography>THE BLESSED WANDERED INTO THE LIGHT.</Typography>
          <Typography>THE BLESSED WANDERED INTO THE LIGHT.</Typography>
          <Typography>THE BLESSED WANDERED INTO THE LIGHT.</Typography>
          <Typography>THE BLESSED WANDERED INTO THE LIGHT.</Typography>
          <Typography>THE BLESSED WANDERED INTO THE LIGHT.</Typography>
          <Typography>THE BLESSED WANDERED INTO THE LIGHT.</Typography>
          <Typography>THE BLESSED WANDERED INTO THE LIGHT.</Typography>
          <Typography>THE BLESSED WANDERED INTO THE LIGHT.</Typography>
          <Typography>THE BLESSED WANDERED INTO THE LIGHT.</Typography>
          <Typography>THE BLESSED WANDERED INTO THE LIGHT.</Typography>
          <Typography>THE BLESSED WANDERED INTO THE LIGHT.</Typography>
          <Typography>THE BLESSED WANDERED INTO THE LIGHT.</Typography>
          <Typography>THE BLESSED WANDERED INTO THE LIGHT.</Typography>
          <Typography>THE BLESSED WANDERED INTO THE LIGHT.</Typography>
          <Typography>THE BLESSED WANDERED INTO THE LIGHT.</Typography>
          <Typography>THE BLESSED WANDERED INTO THE LIGHT.</Typography>
          <Typography>THE BLESSED WANDERED INTO THE LIGHT.</Typography>
          <Typography>THE BLESSED WANDERED INTO THE LIGHT.</Typography>
          <Typography>THE BLESSED WANDERED INTO THE LIGHT.</Typography>
          <Typography>THE BLESSED WANDERED INTO THE LIGHT.</Typography>
          <Typography>THE BLESSED WANDERED INTO THE LIGHT.</Typography>
          <Typography>THE BLESSED WANDERED INTO THE LIGHT.</Typography>
          <Typography>THE BLESSED WANDERED INTO THE LIGHT.</Typography>
          <Typography>THE BLESSED WANDERED INTO THE LIGHT.</Typography>
          <Typography>THE BLESSED WANDERED INTO THE LIGHT.</Typography>
          <Typography>THE BLESSED WANDERED INTO THE LIGHT.</Typography>
          <Typography>THE BLESSED WANDERED INTO THE LIGHT.</Typography>
        </Box>
      </Box>
    );
  }
}

export default SortedHealerService;
