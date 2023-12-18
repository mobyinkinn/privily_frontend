


import { useState } from "react";
import { Stack, Typography, Drawer, IconButton, BottomNavigation, BottomNavigationAction } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <Stack justifyContent={"center"} p={{xs:"none", sm:3, md:3, lg:3}}>
      <Stack direction={"row"} justifyContent={{sm:"space-between",md:"space-around"}} display={{xs:"none", sm:"flex", md:"flex", lg:"flex"}}>
        <Link to={"/"} >
          <img src={logo} alt="" style={{ width: "173px", height: "50px" }} />
        </Link>
        {/* Mobile Drawer Icon */}
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleDrawerOpen}
          sx={{ display: { xs: "none", sm:"block", md:"none", lg:"none" } }}
        >
          <MenuIcon />
        </IconButton>
        {/* Desktop Navigation Links */}
        <Stack
          direction={"row"}
          gap={9}
          alignItems={"center"}
          sx={{ display: { xs: "none", sm:"none", lg:"flex", md: "flex" } }}
        >
          <Link to={"#"} className="nav-links">
            <Typography color={"black"} className="nav-links" variant="h6">
              About us
            </Typography>
          </Link>
          <Link to={"#"} className="nav-links">
            <Typography color={"black"} className="nav-links" variant="h6">
              Pods Discovery
            </Typography>
          </Link>
          <Link to={"#"} className="nav-links">
            <Typography color={"black"} className="nav-links" variant="h6">
              Booking
            </Typography>
          </Link>
          <Link to={"#"} className="nav-links">
            <Typography color={"black"} className="nav-links" variant="h6">
              For Corporate
            </Typography>
          </Link>
        </Stack>
      </Stack>
      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={handleDrawerClose}
        sx={{
          display: { xs: "none", sm:"block", md: "none" },
          "& .MuiDrawer-paper": {
            width: "40%", // Adjust the width as needed
          },
        }}
      >
        <Stack p={2} direction="column" alignItems="center">
          <IconButton
            onClick={handleDrawerClose}
            sx={{ alignSelf: "flex-end" }}
          >
            <CloseIcon />
          </IconButton>
          <Link to={"#"} className="nav-links">
            <Typography color={"black"} className="nav-links" variant="h6">
              About us
            </Typography>
          </Link>
          <Link to={"#"} className="nav-links">
            <Typography color={"black"} className="nav-links" variant="h6">
              Pods Discovery
            </Typography>
          </Link>
          <Link to={"#"} className="nav-links">
            <Typography color={"black"} className="nav-links" variant="h6">
              Booking
            </Typography>
          </Link>
          <Link to={"#"} className="nav-links">
            <Typography color={"black"} className="nav-links" variant="h6">
              For Corporate
            </Typography>
          </Link>
        </Stack>
      </Drawer>
      {/* Bottom Navigation for Mobile */}
      <BottomNavigation
        showLabels
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          display: { xs: "flex", sm: "none", md: "none" },
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Locations" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="Discovery" icon={<SearchIcon />} />
        <BottomNavigationAction
          label="Dashboard"
          icon={<AccountCircleIcon />}
        />
      </BottomNavigation>
    </Stack>
  );
};

export default Navbar;


