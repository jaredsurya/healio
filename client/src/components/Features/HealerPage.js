import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import HealersServicesContext from "../../utils/healersServicesContext";
import Weblinks from "./Weblinks";

function HealerPage({ id }) {
  const {healers} = useContext(HealersServicesContext)
  
  let healer = healers.find((h) => id === h.id)
  
  //console.log(healer);
  
  if (!id) {
    return (
      <Typography variant="h4" align="center">
        LOADING . . .
      </Typography>
    );
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom align="center">
        {healer.full_name}
      </Typography>
      <div
        style={{ width: "87%", margin: "0 auto" }}
        dangerouslySetInnerHTML={{ __html: healer.bio }}
      />
      <Weblinks links={healer.weblinks}/>
    </Box>
  );
}

export default HealerPage;
