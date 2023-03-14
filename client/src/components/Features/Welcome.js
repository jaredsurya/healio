import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import SwitcherContext from "../../utils/switcherContext";
import UserContext from "../../utils/userContext";
import HealerModalButton from "../Buttons/HealerModalButton";

function Welcome({ size }) {
  const { feedShow, setFeedShow, showSize, setShowSize } =
    useContext(SwitcherContext);
    const {user} = useContext(UserContext)

  if (size === "large") {
    return (
      <Box>
        <Typography align="center" variant="h2">WELCOME!</Typography>
        <Typography>Healio greets you with the kindest tidings and appreciates you stopping in. Click on things. Make yourself at home.
        </Typography>
        {user.type === "Healer" ? (<><Typography variant="h4" align="center">HEALERS:</Typography><Typography>Please fill out your account data and healer info if you wish to be featured on our page.</Typography></>) : null}
        <HealerModalButton />
      </Box>
    );
  } else {
    return <Box>
      <Typography align="center" fontSize={24} color="primary" fontWeight={"bold"}>We welcome you to Healio!</Typography>
    </Box>;
  }
}

export default Welcome;
