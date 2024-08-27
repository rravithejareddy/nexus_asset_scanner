import React from "react";
import mobileLogo from "../data/Images/hexagon-logo.svg";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  Drawer,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LeftNavigation from "./LeftNavigation"; // Fixed typo in the component name

const Header = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return (
    <AppBar position="static" sx={{ mb: 0, pb: 0 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            alt="app logo"
            src={mobileLogo}
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 2,
              ml: 0,
              width: "33px",
              height: "33px",
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2px",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Asset Scanner
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={open}
              onClose={() => toggleDrawer(false)}
            >
              <LeftNavigation toggleDrawer={toggleDrawer} />
            </Drawer>
          </Box>
          <Box
            component="img"
            alt="app_mobile_logo"
            src={mobileLogo}
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
              height: "30px",
              width: "50px",
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: "42px",
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".5px",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Asset Scanner
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <Tooltip title="Test User">
              <IconButton onClick={() => {}} sx={{ p: 0, color: "#ff6a4d" }}>
                <Avatar
                  alt="Test User"
                  src="../data/Images/logo.png"
                  sx={{ backgroundColor: "#FFFFF" }}
                />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
