import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import SwitcherContext from "../../utils/switcherContext";
import UserContext from "../../utils/userContext";
import HealerModalButton from "../Buttons/HealerModalButton";

function Welcome({ size }) {
  const { feed, setFeed } = useContext(SwitcherContext);
  const { user } = useContext(UserContext);

  if (size === "large") {
    return (
      <Box>
        <Typography align="center" variant="h2">
          WELCOME!
        </Typography>
        <Box maxWidth={"73%"} align="center" margin="0 auto" p={4}>
          <Typography align="center" lineHeight={2}>
            Healio is a space to find the healing modalities and practitioners
            which will be perfect for you. The journey to health is one of
            balance and diligent practicing. Here, many of us on the journey
            have come together and many of us would like to offer services which
            we have discovered. These services, often adopted from ancient
            lineages, are of the most potent variety. We sincerely thank you for
            checking Healio, and we assure you that you are right where you need
            to be now. ❤️
          </Typography>
        </Box>
        {user.type === "Healer" ? (
          <>
            <Typography variant="h4" align="center" paddingTop={2}>
              HEALERS:
            </Typography>
            <Typography align="center" p={3}>
              Please fill out your account data and healer info if you wish to
              be featured on our page.
            </Typography>
          </>
        ) : null}
        <Box align="center" p={1}>
          <HealerModalButton />
        </Box>
      </Box>
    );
  } else {
    return (
      <Box onClick={() => setFeed("welcome")}>
        <Typography
          align="center"
          fontSize={24}
          color="primary"
          fontWeight={"bold"}
          sx={{ "&:hover": { cursor: "pointer" } }}
        >
          We welcome you to Healio!
        </Typography>
      </Box>
    );
  }
}

export default Welcome;
