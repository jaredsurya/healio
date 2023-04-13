import {
  Box,
  Chip,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import HealersServicesContext from "../../utils/healersServicesContext";
import SwitcherContext from "../../utils/switcherContext";
import UserContext from "../../utils/userContext";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function SavedInterests({ size }) {
  const { setFeed } = useContext(SwitcherContext);
  const { user } = useContext(UserContext);
  const { setRenderService, savedServices, setSavedServices, setIsAssociated } =
    useContext(HealersServicesContext);
  const navigate = useNavigate();
  
  function handleClick(id) {
    setRenderService(id);
    navigate(`/main/service/${id}`);
  }

  function handleDelete(id) {
    fetch(`/user_services/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setSavedServices(savedServices.filter((svc) => svc.id !== id));
        setIsAssociated(false);
        //more logic here for affecting the accordions' values
      })
      .catch((err) => console.log(err));
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    boxShadow: "2px 2px 10px 2px rgba(0, 0, 0, 0.3)",
    color: theme.palette.text.primary,
    "&:hover": { cursor: "pointer" },
    display: "inline-flex",
    alignItems: "center",
    paddingTop: "4px",
    paddingBottom: "4px",
    margin: "0px auto",
    marginTop: "8px",
    gap: "8px",
    "& .MuiSvgIcon-root": {
      cursor: "pointer",
    },
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#f5f5f5",
    },
    "& .text": {
      flexGrow: 1,
      marginRight: "8px",
    },
    "& .icon": {
      marginLeft: "8px",
    },
  }));

  if (size === "large") {
    return (
      <Box>
        <Typography
          variant="h4"
          fontWeight={"bold"}
          gutterBottom
          align="center"
          margin={3}
        >
          {user.user_type === "healer"
            ? "The Services You're Offering:"
            : "The Services You've Favorited:"}
        </Typography>
        <Box sx={{ maxWidth: "70%", margin: "0 auto" }}>
  <Grid container justifyContent="center" alignItems="center" spacing={2}>
    {savedServices.length > 0 ? (
      savedServices.map((svc) => (
        <Grid item md={4} key={svc.id}>
          <Item onClick={() => handleClick(svc.id)}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography sx={{ flex: "1 1 auto" }}>{svc.name}</Typography>
              <IconButton
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(svc.id);
                }}
                sx={{ "&:hover": { color: "#f44336" } }}
              >
                <HighlightOffIcon />
              </IconButton>
            </Box>
          </Item>
        </Grid>
      ))
    ) : (
      <Typography variant="h6" align="center" color={"grey"}>
        Services you add will appear here.
      </Typography>
    )}
  </Grid>
</Box>

      </Box>
    );
  } else {
    return (
      <Box>
        <Typography
          fontWeight={"bold"}
          onClick={() => {
            setFeed("savedinterests");
            navigate("/main/mysaved");
          }}
          sx={{
            "&:hover": { cursor: "pointer", color: "blue" },
            "textDecoration": "underline",
          }}
          paddingBottom={.5}
          align="center"
          variant="h6"
        >
          {user.user_type === "healer" ? "Your Services:" : "My Favorites:"}
        </Typography>
        <Box sx={{ maxHeight: 250, overflow: "auto" }} align="center">
          <Stack sx={{ width: "100%", gap: "8px" }} align="center">
            {savedServices.length > 0 ? (
              savedServices.map((svc) => (
                <Chip
                  key={svc.id}
                  size="large"
                  align="center"
                  label={svc.name}
                  variant="outlined"
                  onClick={() => handleClick(svc.id)}
                  onDelete={() => handleDelete(svc.id)}
                  sx={{
                    margin: "auto",
                    fontSize: 22,
                    "& .MuiChip-deleteIcon:hover": {
                      color: "red",
                    },
                  }}
                />
              ))
            ) : (
              <Typography color={"grey"}>
                Services that you add will be shown here.
              </Typography>
            )}
          </Stack>
        </Box>
      </Box>
    );
  }
}

export default SavedInterests;
