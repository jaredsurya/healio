import { Paper, Typography, Box, Button } from "@mui/material";
import React, { useContext } from "react";
import UserContext from "../../utils/userContext";
import AccountModalBtn from "../Buttons/AccountModalBtn";
import HealerModalButton from "../Buttons/HealerModalButton";
import ImageUploadBox from "../../utils/ImageUploadBox";
import SwitcherContext from "../../utils/switcherContext";
import HealersServicesContext from "../../utils/healersServicesContext";
import { useNavigate } from "react-router-dom";

const ProfileDetailsDisplay = ({size}) => {
  const { user, setUser } = useContext(UserContext);
  const { feed, setFeed } = useContext(SwitcherContext);
  const {setRenderHealer} = useContext(HealersServicesContext)
  let navigate = useNavigate()
  const date = new Date(user.created_at);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  function handleClickToPage(){
    setRenderHealer(user.id)
    navigate(`/main/healer/${user.id}`)
  }

  if (size === "large") {
    return (
      <Box align="center">
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          style={{ textDecoration: "underline" }}
        >
          Account Details:
        </Typography>
        <Box>
          <ImageUploadBox id={user.id} />
        </Box>
        <Box>
          <Typography variant="h4">~{user.full_name}~</Typography>
          <Typography variant="h6">User-type: {user.user_type}</Typography>
          <Typography variant="h6">
            Healio member since: {formattedDate}
          </Typography>
          {user.location ? (
            <Typography variant="h6">Home Zip Code: {user.location}</Typography>
          ) : null}
          <Typography variant="h6">
            Promotional/inspirational emails:{" "}
            {user.allow_email ? "Allowed" : "Denied"}
          </Typography>
        </Box>
        <Box id="buttons">
          <AccountModalBtn />
          {user.user_type === "healer" ? <HealerModalButton/> : null}
          {user.user_type === "healer" ? <Button onClick={() => handleClickToPage()}>View My Healer Page</Button> : null}
        </Box>
      </Box>
    );
  } else {
    return (
      <Paper elevation={2} onClick={() => setFeed("profiledetailsdisplay")} sx={{ p: 1.67, "&:hover": { cursor: "pointer" } }}>
        <Typography variant="h6" color="primary" fontWeight={"bold"}>{user.full_name}</Typography>
        <Typography variant="body1" align="justify">Member since: {formattedDate}</Typography>
      </Paper>
    );
  }
};

export default ProfileDetailsDisplay;
