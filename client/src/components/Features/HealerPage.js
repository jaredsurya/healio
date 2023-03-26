import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import HealersServicesContext from "../../utils/healersServicesContext";

function HealerPage({ healer }) {
  console.log(healer);
  
  if (!healer) {
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
    </Box>
  );
}

export default HealerPage;
