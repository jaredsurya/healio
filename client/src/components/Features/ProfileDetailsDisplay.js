import { Paper, Typography, Box, Button } from "@mui/material";
import React, { useContext } from "react";
import UserContext from "../../utils/userContext";
import AccountModalBtn from "../Buttons/AccountModalBtn";
import HealerModalButton from "../Buttons/HealerModalButton";
import HealersServicesContext from "../../utils/healersServicesContext";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../../utils/DeleteModal";

const ProfileDetailsDisplay = ({ size }) => {
  const { user } = useContext(UserContext);
  const { setRenderHealer } = useContext(HealersServicesContext);
  let navigate = useNavigate();
  const date = new Date(user.created_at);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  function handleClickToPage() {
    setRenderHealer(user.id);
    navigate(`/main/healer/${user.id}`);
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
        {/* <Box marginTop={2} marginBottom={0}>
          <ImageUploadBox id={user.id} /> 
        </Box> */}
        <Box margin={3}>
          <Typography variant="h4" paddingBottom={.9}>~ {user.full_name} ~</Typography>
          <Typography variant="h6" p={.7}>User-type: <strong>{user.user_type}</strong></Typography>
          <Typography variant="h6" p={.7}>
            Healio member since: <strong>{formattedDate}</strong>
          </Typography >
          {user.location ? (
            <Typography p={.7} variant="h6">Home Zip Code: <strong>{user.location}</strong></Typography>
          ) : null}
          <Typography p={.7} variant="h6">
            Promotional/inspirational emails:{" "}<strong>
            {user.allow_email ? "Allowed" : "Denied"}</strong>
          </Typography>
        </Box>
        <Box
          id="buttons"
          maxWidth={"65%"}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > *": {
              flex: "1 1 auto",
              margin: "8px",
              marginRight: "5px",
            },
          }}
        >
          <AccountModalBtn />
          {user.user_type === "healer" ? <HealerModalButton /> : null}
          {user.user_type === "healer" ? (
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleClickToPage()}
            >
              View My Healer Page
            </Button>
          ) : null}
          <DeleteModal />
        </Box>
      </Box>
    );
  } else {
    return (
      <Paper
        elevation={2}
        onClick={() => navigate("/main/myprofile")}
        sx={{ p: 1.67, "&:hover": { cursor: "pointer" } }}
      >
        <Typography variant="h6" color="primary" fontWeight={"bold"}>
          {user.full_name}
        </Typography>
        <Typography variant="body1" align="justify">
          Member since: {formattedDate}
        </Typography>
      </Paper>
    );
  }
};

export default ProfileDetailsDisplay;
