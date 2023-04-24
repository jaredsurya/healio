import NavBar from "../components/DisplayAreas/NavBar";
import LeftBar from "../components/DisplayAreas/LeftBar";
import RightBar from "../components/DisplayAreas/RightBar";
import Feed from "../components/DisplayAreas/Feed";
import themeOptions from "../utils/themeOptions";
import { createTheme, Stack, ThemeProvider } from "@mui/material";

const theme = createTheme(themeOptions);

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />

      <Stack
        direction="row"
        marginTop={1}
        spacing={0.7}
        lg={12}
        maxHeight="calc(100vh - 108px)"
        justifyContent="space-between"
      >
        <LeftBar theme={theme} />
        <Feed />
        <RightBar theme={theme} />
      </Stack>
    </ThemeProvider>
  );
};

export default Main;
