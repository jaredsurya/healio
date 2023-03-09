import { ThemeProvider } from "@emotion/react";
import { Avatar, Box, Divider, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import UserContext from "../utils/userContext";

function ProfileData() {
  const { user, setUser } = useContext(UserContext);
  //console.log(user.created_at)
  const date = new Date(user.created_at);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Box bgcolor={"white"} borderRadius={2} padding={1.5}>
      <Typography variant="h6" fontWeight={"bold"} mb={0}>{user.full_name}</Typography>
      <Typography variant="body1">Account type: {user.type}</Typography>
      <Typography variant="body1">Member since: {formattedDate}</Typography>
    </Box>
  );
}

function SavedInterests () {
  return (
    <Box>INTERESTS</Box>
  )
}

function ABC () {
  return (
    <Box>ALPHABETICAL SCROLL H/S</Box>
  )
}

function Map (){
  return (
    <Box>GOOGLE MAP</Box>
  )
}

// MAKE INTO MINI VARIANT DRAWER AT SMALL/XS SIZES

// CONTAINS: user box, saved services (MUI chips), services/healers alphabetical, map
const LeftBar = ({ theme }) => {
  // CANNOT SET BREAKPOINTS IN SX SETTINGS
  // sx={{display:{ xs: "none"}}}

  return (
    <Box
      height={"100%"}
      flex={3}
      bgcolor="#f7e1e7"
      p={1}
      paddingTop={2}
      sx={{ display: { xs: "none", md: "block" } }}
    >
      <Stack spacing={2} divider={<Divider orientation="horizontal" flexItem />}>
        <ProfileData />
        <SavedInterests />
        <ABC />
        <Map />
        {/* Conditional rendering of Services/Healers/Map
      Switch Statement */}
      </Stack>
    </Box>
  );
};

export default LeftBar;
