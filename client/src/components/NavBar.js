import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  Button,
} from "@mui/material";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useContext } from "react";
import themeOptions from "../utils/themeOptions";
import UserContext from "../utils/userContext";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const settings = ["Profile", "Account", "Log out"];
  const pages = ["Services", "Healers", "Map"];

  const { user, setUser } = useContext(UserContext);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleNavMenuClick = (page) => {
    if (page === "Services") {
      console.log(page);
    }
    setAnchorElNav(null);
  };

  const handleUserMenuClick = (setting) => {
    if (setting === "Log out") {
      handleLogout();
    } else if (setting === "Profile") {
      console.log(setting, "profile!");
    } else {
      console.log(setting, "Account!");
    }
    setAnchorElUser(null);
  };

  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      console.log("response", r)
      if (r.ok) {
        setUser(null);
        navigate("/signin");
        console.log("THE USER WAS SIGNED OUT");
      } else {
        console.log("SOMETHING WENT WRONG", r);
      }
    });
  }

  // console.log("USER in context:", user);

  const theme = createTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* MENU ICON FOR NAVIGATION */}
            <Box sx={{ flexGrow: 1, display: "flex" }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={() => setAnchorElNav(null)}
                sx={{
                  display: "block",
                }}
              >
                {" "}
                {/* ITEM LIST FOR LEFT NAV MENU */}
                {pages.map((page) => (
                  <MenuItem key={page} onClick={() => handleNavMenuClick(page)}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            
            <Typography
              variant="h4"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: "flex",
                flexGrow: 1,
                fontFamily: "lobster",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Healio
            </Typography>

            {/* USER MENU AND ITEMS */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={user.full_name} src={user.image} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={() => setAnchorElUser(null)}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={() => handleUserMenuClick(setting)}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default NavBar;
