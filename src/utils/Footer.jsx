
import { Stack, Typography } from "@mui/material";
import React from "react";
import logo from "../assets/Logo.png";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleLinkClick = (path) => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      display={{ xs: "none", sm: "flex", md: "flex", lg: "flex", xl: "flex" }}
    >
      {/* Left Side */}
      <Stack
        width={{ xs: "100%", md: "50%" }}
        p={{
          lg: "80px 80px 80px 125px",
          md: "80px 80px 80px 97px",
          sm: "none",
          xs: "none",
        }}
        // padding={{ xs: "40px 20px", md: "80px 0 80px 125px" }}
      >
        <Stack
          gap={2}
          position={"relative"}
          textAlign={{ xs: "center", md: "left" }}
        >
          <Link to={"/"} onClick={handleLinkClick} style={{textAlign:"center"}}>
            <img
              src={logo}
              alt=""
              style={{
                width: "286px",
                height: "90px",
                margin: "auto",
                display: { xs: "block", md: "inline-block" },
              }}
            />
          </Link>
          {/* <img src={logo} alt="" style={{ width: "286px", height: "90px" }} /> */}
          <Typography
            textAlign={"center"}
            pl={{ xs: 0, md: 3 }}
            fontSize={{ xs: "18px", md: "20px" }}
          >
            Get Started Now Try Our Products
          </Typography>
          <Stack justifyContent={"center"} alignItems={"center"}>
            <input
              type="text"
              placeholder="Enter Your Email"
              style={{
                width: "85%",
                height: "50px",
                fontSize: "18px",
                paddingLeft: "25px",
                borderRadius: "39px",
                border: "1px solid black",
              }}
            />
          </Stack>
          <SendRoundedIcon
            sx={{ position: "absolute" }}
            style={{
              left: "90%",
              transform: "translateX(-50%)",
              top: "80%",
              // top: { xs: "229px", md: "159px" },
              fontSize: "30px",
              color: "#ED3327",
            }}
          />
        </Stack>
      </Stack>

      {/* Right Side */}
      <Stack
        width={{ xs: "100%", md: "50%" }}
        direction={{ xs: "column", md: "row" }}
        alignItems={{ xs: "center", md: "flex-start" }}
        gap={{ xs: 3, md: 5 }}
        p={{ lg: 10, md: 10, sm: "none" }}
      >
        <Stack
          gap={2}
          alignItems={{ xs: "center", md: "flex-start" }}
          p={{ xs: 2, md: 0 }}
        >
          <Link to={"/"} className="nav-links" onClick={handleLinkClick}>
            <Typography color={"black"} className="nav-links" variant="h6">
              Home
            </Typography>
          </Link>
          <Link to={"/Aboutus"} className="nav-links" onClick={handleLinkClick}>
            <Typography color={"black"} className="nav-links" variant="h6">
              About us
            </Typography>
          </Link>
          <Link
            to={"/Podsdiscovery"}
            className="nav-links"
            onClick={handleLinkClick}
          >
            <Typography color={"black"} className="nav-links" variant="h6">
              Pods Discovery
            </Typography>
          </Link>
          <Link to={"#"} className="nav-links">
            <Typography color={"black"} className="nav-links" variant="h6">
              Booking
            </Typography>
          </Link>
        </Stack>
        <Stack gap={3} alignItems={{ xs: "center", md: "flex-start" }}>
          <Stack gap={1}>
            <Link to={"#"} className="nav-links">
              <Typography color={"black"} className="nav-links" variant="h6">
                Terms and Conditions
              </Typography>
            </Link>
            <Link to={"#"} className="nav-links">
              <Typography color={"black"} className="nav-links" variant="h6">
                Privacy Policy
              </Typography>
            </Link>
            <Link
              to={"/ContactUs"}
              className="nav-links"
              onClick={handleLinkClick}
            >
              <Typography color={"black"} className="nav-links" variant="h6">
                Contact Us
              </Typography>
            </Link>
          </Stack>
          <Typography>
            Copyright © 2023 Privily. All Rights Reserved.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
