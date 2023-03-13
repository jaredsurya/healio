import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import UserContext from "../../utils/userContext";
import AccountModalBtn from "../Buttons/AccountModalBtn";
import HealerModalButton from "../Buttons/HealerModalButton";
import ImageUploadBox from "./ImageUploadBox";

const ProfileDetailsDisplay = ({size}) => {
  const { user, setUser } = useContext(UserContext);

  const date = new Date(user.created_at);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
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
          <ImageUploadBox />
        </Box>
        <Box>
          <Typography variant="h4">~{user.full_name}~</Typography>
          <Typography variant="h6">User-type: {user.type}</Typography>
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
        </Box>
      </Box>
    );
  } else {
    return (
      <Paper elevation={2} sx={{ p: 2 }}>
        <Typography variant="body1">{user.full_name}</Typography>
        <Typography variant="body1" align="justify"></Typography>
        <Typography variant="subtitle1" align="center"></Typography>
      </Paper>
    );
  }
};

export default ProfileDetailsDisplay;
