import { Box, Typography } from "@mui/material";
import React from "react";

function AboutHealio() {
  return (
    <Box>
      <Typography variant="h3" gutterBottom align="center">About Healio</Typography>
      <Typography variant="h6">
        Healio was created to be a means for the healer community to better
        engage with the needing populace. Its intent at first was to be a guide
        to new healing modalities which visitors may have never seen. You'll
        find that on the services page of your liking you can see the associated
        healers on this site which offer that kind of service.
      </Typography>
    </Box>
  );
}

export default AboutHealio;