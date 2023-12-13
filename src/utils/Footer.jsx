import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import logo from "../assets/Logo.png";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Stack maxWidth={"1920px"} direction={"row"}>
      <Stack width={"50%"} padding={"80px 80px 80px 125px"}>
        <Stack gap={2} position={"relative"}>
          <img src={logo} alt="" style={{ width: "286px", height: "90px" }} />
          <Typography pl={3} fontSize={"20px"}>
            Get Started Now Try Our Products
          </Typography>
          <input
            type="text"
            placeholder="Enter Your Email"
            style={{
              width: "460px",
              height: "50px",
              fontSize: "20px",
              paddingLeft: "25px",
              borderRadius: "39px",
              border: "1px solid black",
            }}
          />
          <SendRoundedIcon
            sx={{ position: "absolute" }}
            style={{
              left: "430px",
              top: "159px",
              fontSize: "40px",
              color: "#ED3327",
            }}
          />
        </Stack>
      </Stack>
      <Stack width={"50%"} direction={"row"} alignItems={"center"} gap={5}>
        <Stack gap={2} alignItems={"left"} p={2}>
          <Link to={"#"} className="nav-links">
            <Typography color={"black"} className="nav-links" variant="h6">
              Home
            </Typography>
          </Link>
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
        </Stack>
        <Stack gap={9}>
          <Stack gap={2}>
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
          </Stack>
          <Typography >
            Copyright © 2023 Privily. All Rights Reserved.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
