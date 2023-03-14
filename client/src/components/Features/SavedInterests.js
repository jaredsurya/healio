import { Box, Typography } from "@mui/material";
import React from "react";

function SavedInterests({ size }) {
  // sort these alphabetically
  if (size === "large") {
    return (
      <Box>
        <Typography variant="h5" fontWeight={"bold"}>
          Saved Interests:
        </Typography>
        <Box>
          map over User.interests and produce typography element for each
        </Box>
      </Box>
    );
  } else {
    return (
      <Box>
        <Typography fontWeight={"bold"}>Saved Interests:</Typography>
        <Box sx={{ maxHeight: 250, overflow: "auto" }}>
          <Typography>a line of details</Typography>
          <Typography>a line of details</Typography>
          <Typography>a line of details</Typography>
          <Typography>a line of details</Typography>
          <Typography>a line of details</Typography>
          <Typography>a line of details</Typography>
          <Typography>a line of details</Typography>
          <Typography>a line of details</Typography>
          <Typography>a line of details</Typography>
          <Typography>a line of details</Typography>
          <Typography>a line of details</Typography>
          <Typography>a line of details</Typography>
          <Typography>a line of details</Typography>
          <Typography>a line of details</Typography>
          <Typography>a line of details</Typography>
          <Typography>a line of details</Typography>
          <Typography>a line of details</Typography>
          <Typography>a line of details</Typography>
          <Typography>a line of details</Typography>
          <Typography>a line of details</Typography>
          <Typography>a line of details</Typography>
          <Typography>a line of details</Typography>
          <Typography>a line of details</Typography>
        </Box>
      </Box>
    );
  }
}

export default SavedInterests;
