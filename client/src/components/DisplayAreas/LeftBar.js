import { ThemeProvider } from "@emotion/react";
import { Avatar, Box, Divider, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import UserContext from "../../utils/userContext";
import Quote from "../Features/Quote";
import Welcome from "../Features/Welcome";

function ProfileData() {
  const { user, setUser } = useContext(UserContext);
  //console.log(user.created_at)
  const date = new Date(user.created_at);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  function handleRefer(){
    let key = "Profile"
    //render on feed section by passing "Profile" as key
  }

  return (
    <Box onClick={handleRefer} bgcolor={"white"} borderRadius={2} padding={1.5} outline={"1px lightgray"}>
      <Typography variant="h6" fontWeight={"bold"} mb={0}>
        {user.full_name}
      </Typography>
      <Typography variant="body1">Account type: {user.type}</Typography>
      <Typography variant="body1">Member since: {formattedDate}</Typography>
    </Box>
  );
}

export function SavedInterests() {
  return (
    <Box>
      <Typography>Saved Interests:</Typography>
      <Box sx={{ maxHeight: 400, overflow: 'auto' }}></Box>
    </Box>
  );
}

function ABC() {
  return <Box>ALPHABETICAL SCROLL H/S</Box>;
}

function Map() {
  return <Box>GOOGLE MAP</Box>;
}

// MAKE INTO MINI VARIANT DRAWER AT SMALL/XS SIZES

// CONTAINS: user box, saved services (MUI chips), services/healers alphabetical, map
const LeftBar = ({ theme }) => {
  let size = "widget"
  // CANNOT SET BREAKPOINTS IN SX SETTINGS
  // sx={{display:{ xs: "none"}}}

  return (
    <Box
      height={"100%"}
      flex={3}
      bgcolor="#f0f4ff"
      p={1}
      paddingTop={2}
      sx={{ display: { xs: "none", md: "block" } }}
    >
      <Stack
        spacing={2}
        divider={<Divider orientation="horizontal" flexItem />}
      >
        <Welcome/>
        {/* <Quote /> */}
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
