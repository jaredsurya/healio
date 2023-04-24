import { Stack, Box, Divider } from "@mui/material";
import ProfileDetailsDisplay from "../Features/ProfileDetailsDisplay";
import Adv from "../Features/Adv";
import FeaturedHealer from "../Features/FeaturedHealer";
import SavedInterests from "../Features/SavedInterests";

const RightBar = ({ theme }) => {
  let size = "widget"
  return (
    <Box
      flex={3}
      height='calc(100vh - 100px)'
      overflow={"auto"}
      p={1}
      paddingTop={2}
      sx={{ display: { xs: "none", md: "none", lg: "block" } }}
      bgcolor="#f0f4ff"
    >
      <Stack
        spacing={2}
        divider={<Divider orientation="horizontal" flexItem />}
      >
        <ProfileDetailsDisplay />
        <SavedInterests />
        <Adv />
        <FeaturedHealer />
      </Stack>
    </Box>
  );
};

export default RightBar;
