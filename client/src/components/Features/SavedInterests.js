import { Box, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import SwitcherContext from "../../utils/switcherContext";
import UserContext from "../../utils/userContext";

function SavedInterests({ size }) {
  const { feed, setFeed } = useContext(SwitcherContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();


  function handleClick(){
    navigate(`/main/service/${svc.id}`)
  }

  console.log(user);
  // sort these alphabetically
  if (size === "large") {
    return (
      <Box>
        <Typography variant="h4" fontWeight={"bold"} align="center">
        {user.user_type === "healer" ? "The Services You Offer:" : "The Services You've Favorited:"}
        </Typography>
        <Stack>
          {user.services.map((svc) => (
            <Typography onClick={(svc) => handleClick(svc)}>{svc.name}</Typography>
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
          sx={{ "&:hover": { cursor: "pointer" } }}
        >
          {user.user_type === "healer" ? "Your Services:" : "My Favorites:"}
        </Typography>
        <Box sx={{ maxHeight: 250, overflow: "auto" }}>
          <Stack>
            {user.services.map((svc) => (
              <Typography onClick={(svc) => handleClick(svc)}>
                {svc.name}
              </Typography>
            ))}
          </Stack>
        </Box>
      </Box>
    );
  }
}

export default SavedInterests;
