import React, { useState, useEffect } from "react";
import {
  Stack,
  Typography,
  Drawer,
  IconButton,
  Badge,
  BottomNavigation,
  BottomNavigationAction,
  Button,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import profileCircle from "../assets/profile-circle.svg";
import NotificationsIcon from "@mui/icons-material/Notifications";
import logo from "../assets/Logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import Modal from "./Modal";
import BannerModal from "../Homeparts/BannerModal";

const Navbar = ({ hasNewNotifications }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [BannermodalOpen, setBannerModalOpen] = useState(false);
  const [activePage, setActivePage] = useState("Home"); // Default active page
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  const handleBottomNavClick = (page) => {
    navigate(`/${page.toLowerCase()}`);
  };
  const handlenotificationclick = (page) => {
    navigate(`/${page.toLowerCase()}`);
  };
  useEffect(() => {
    // Update activePage when the location changes
    const currentPath = location.pathname.split("/")[1];
    setActivePage(currentPath || "Home");
  }, [location.pathname]);

  const userData = JSON.parse(localStorage.getItem("apiResponseData"));
  const user_Auth = userData ? userData.token : null;
  const logout = () => {
    localStorage.removeItem("apiResponseData");
  };
  return (
    <>
      <Stack
        justifyContent={"center"}
        p={{ xs: "none", sm: 3, md: 3, lg: 3 }}
        bgcolor={"white"}
        position={"relative"}
      >
        <Stack
          direction={"row"}
          justifyContent={{ sm: "space-between", md: "space-around" }}
          display={{ xs: "none", sm: "flex", md: "flex", lg: "flex" }}
        >
          <Link to={"/"}>
            <img src={logo} alt="" style={{ width: "173px", height: "50px" }} />
          </Link>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleDrawerOpen}
            sx={{
              display: { xs: "none", sm: "block", md: "none", lg: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Stack
            direction={"row"}
            gap={9}
            alignItems={"center"}
            sx={{ display: { xs: "none", sm: "none", lg: "flex", md: "flex" } }}
          >
            <Link
              to={"/Aboutus"}
              style={{
                color: activePage === "Aboutus" ? "#FF1200" : "black",
                textDecoration: "none",
              }}
            >
              <Typography fontSize={"18px"}>About us</Typography>
            </Link>
            <Link
              to={"/Podsdiscovery"}
              style={{
                color: activePage === "Podsdiscovery" ? "#FF1200" : "black",
                textDecoration: "none",
              }}
            >
              <Typography fontSize={"18px"}>Pods Discovery</Typography>
            </Link>
            {/* <Link
              to={"#"}
              style={{
                color: activePage === "Booking" ? "#FF1200" : "black",
                textDecoration: "none",
              }}
            >
              <Typography fontSize={"18px"}>Booking</Typography>
            </Link> */}
            <Link
              to={"/Forcorporate"}
              style={{
                color: activePage === "Forcorporate" ? "#FF1200" : "black",
                textDecoration: "none",
              }}
            >
              <Typography fontSize={"18px"}>For Corporate</Typography>
            </Link>
            {!user_Auth ? (
              <>
                <Button
                  startIcon={<LoginIcon />}
                  onClick={() => setModalOpen(true)}
                  sx={{
                    bgcolor: "#FF1200",
                    color: "white",
                    width: "130px",
                    borderRadius: "40px",
                    padding: "5px 10px 5px 10px",
                    fontWeight: "bold",
                  }}
                >
                  Login
                </Button>
                {modalOpen && <Modal setOpenModal={setModalOpen} />}
              </>
            ) : (
              <Button
                startIcon={<LoginIcon />}
                onClick={() => handleBottomNavClick("dashboard")}
                sx={{
                  bgcolor: "#FF1200",
                  color: "white",
                  borderRadius: "40px",
                  padding: "8px 20px 8px 20px",
                  fontWeight: "bold",
                }}
              >
                My Account
              </Button>
            )}
          </Stack>
        </Stack>
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={handleDrawerClose}
          sx={{
            display: { xs: "none", sm: "block", md: "none" },
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
            <Link
              to={"/Aboutus"}
              style={{
                color: activePage === "Aboutus" ? "#FF1200" : "black",
                textDecoration: "none",
              }}
            >
              <Typography variant="h6">About us</Typography>
            </Link>
            <Link
              to={"/Podsdiscovery"}
              style={{
                color: activePage === "Podsdiscovery" ? "#FF1200" : "black",
                textDecoration: "none",
              }}
            >
              <Typography variant="h6">Pods Discovery</Typography>
            </Link>
            {/* <Link
              to={"#"}
              style={{
                color: activePage === "Booking" ? "#FF1200" : "black",
                textDecoration: "none",
              }}
            >
              <Typography variant="h6">Booking</Typography>
            </Link> */}
            <Link
              to={"/Forcorporate"}
              style={{
                color: activePage === "Forcorporate" ? "#FF1200" : "black",
                textDecoration: "none",
              }}
            >
              <Typography variant="h6">For Corporate</Typography>
            </Link>
            <Button
              variant="contained"
              color="primary"
              startIcon={<LoginIcon />}
            >
              Login
            </Button>
            {modalOpen && <Modal setOpenModal={setModalOpen} />}
          </Stack>
        </Drawer>

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
          <BottomNavigationAction
            sx={{ minWidth: "70px" }}
            label="Home"
            onClick={() => handleBottomNavClick("home")}
            icon={
              <HomeIcon
                sx={{ color: activePage === "home" ? "#FF1200" : "inherit" }}
              />
            }
          />
          <BottomNavigationAction
            sx={{ minWidth: "70px" }}
            label="Locations"
            onClick={() => setBannerModalOpen(true)}
            icon={
              <LocationOnIcon
                sx={{
                  color: activePage === "locations" ? "#FF1200" : "inherit",
                }}
              />
            }
          />
          {BannermodalOpen && <BannerModal setOpenModal={setBannerModalOpen} />}
          
          <BottomNavigationAction
            sx={{ minWidth: "70px" }}
            label="Notification"
            onClick={() => handlenotificationclick("notifications")}
            icon={
              <Badge
                color="error"
                variant="dot"
                invisible={!hasNewNotifications}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <NotificationsIcon
                  sx={{
                    color:
                      activePage === "notifications" ? "#FF1200" : "inherit",
                  }}
                />
              </Badge>
            }
          />
          <BottomNavigationAction
            sx={{ minWidth: "70px" }}
            label="Discovery"
            onClick={() => handleBottomNavClick("podsdiscovery")}
            icon={
              <SearchIcon
                sx={{
                  color: activePage === "podsdiscovery" ? "#FF1200" : "inherit",
                }}
              />
            }
          />
          <BottomNavigationAction
            sx={{ minWidth: "70px" }}
            label="Dashboard"
            onClick={() =>
              !user_Auth
                ? setModalOpen(true)
                : handleBottomNavClick("dashboard")
            }
            icon={
              <AccountCircleIcon
                sx={{
                  color: activePage === "dashboard" ? "#FF1200" : "inherit",
                }}
              />
            }
          />
          {!user_Auth && modalOpen && <Modal setOpenModal={setModalOpen} />}
        </BottomNavigation>
      </Stack>
    </>
  );
};

export default Navbar;
