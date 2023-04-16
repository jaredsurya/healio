import { Box, Typography } from "@mui/material";
import React from "react";

function AboutHealio() {
  return (
    <Box>
      <Typography variant="h3" gutterBottom align="center">About Healio</Typography>
      <Box maxWidth={"85%"} margin="auto">
      <Typography variant="h6" align="center" >
        Healio was created to be a means for the healer community to better
        engage with the needing populace. Its intent at first was to be a guide
        to new healing modalities which visitors may have never seen. You'll
        find that on the services page of your liking you can see the associated
        healers on this site which offer that kind of service.
      </Typography>
      <br/>
      <Typography variant="h6" align="center">If there is any issue you would like to report or if you would
        just like to inquire about Healio, please contact Jared at <strong>jaredsurya@gmail.com</strong>
      </Typography>
      </Box>
    </Box>
  );
}

export default AboutHealio;
