import { Box, Chip, Stack, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import HealersServicesContext from "../../utils/healersServicesContext";
import SwitcherContext from "../../utils/switcherContext";
import UserContext from "../../utils/userContext";

function SavedInterests({ size }) {
  const { feed, setFeed } = useContext(SwitcherContext);
  const { user } = useContext(UserContext);
  const { setRenderService, savedServices, setSavedServices } = useContext(HealersServicesContext);
  const navigate = useNavigate();
  //
  // THE TOGGLES on the like buttons all toggle together - same state - fix that.
  function handleClick(id) {
    setRenderService(id);
    navigate(`/main/service/${id}`);
  }

  function handleDelete(id) {
    fetch(`/user_services/${id}`, {
      method: "DELETE",
    })
      .then(setSavedServices(savedServices.filter((svc) => svc.id !== id)))
      .catch((err) => console.log(err))
  }

  console.log(user);
  // sort these alphabetically
  if (size === "large") {
    return (
      <Box>
        <Typography variant="h4" fontWeight={"bold"} align="center">
          {user.user_type === "healer"
            ? "The Services You're Offering:"
            : "The Services You've Favorited:"}
        </Typography>
        <Stack>
          {savedServices.map((svc) => (
            <Typography key={svc.id} onClick={() => handleClick(svc.id)}>
              {svc.name}
            </Typography>
          ))}
        </Stack>
      </Box>
    );
  } else {
    return (
      <Box>
        <Typography
          fontWeight={"bold"}
          onClick={() => setFeed("savedinterests")}
          sx={{ "&:hover": { cursor: "pointer", color: "blue" }, 'text-decoration':"underline" }}
          align="center"
          variant="h6"
          
>
          {user.user_type === "healer" ? "Your Services:" : "My Favorites:"}
        </Typography>
        <Box sx={{ maxHeight: 250, overflow: "auto" }} align="center">
          <Stack sx={{ width: "100%" }} align="center">
            {savedServices.map((svc) => (
              <Chip
                key={svc.id}
                size="large"
                align="center"
                label={svc.name}
                variant="outlined"
                onClick={() => handleClick(svc.id)}
                onDelete={() => handleDelete(svc.id)}
                sx={{ margin: "auto", fontSize: 22 }}
              />
            ))}
          </Stack>
        </Box>
      </Box>
    );
  }
}

export default SavedInterests;
