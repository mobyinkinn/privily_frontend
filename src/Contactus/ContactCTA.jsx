import { Box, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Contactbanner from "../assets/ContactCTA.jpg";
import bannerResponsive from "../assets/BannerCTAA.png";
import Button from "../utils/Button";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useNavigate } from "react-router-dom";
const ContactCTA = () => {
  const [imageSource, setImageSource] = useState(Contactbanner);
  
  useEffect(() => {
    const handleResize = () => {
      // Update the image source based on screen width
      if (window.innerWidth <= 100) {
        setImageSource(bannerResponsive);
      } else {
        setImageSource(Contactbanner);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial call to set image source based on screen width
    handleResize();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Stack p={{ xs: 2, md: 0, sm: 0, lg: 0 }} height={"550px"}>
      <img
        src={imageSource}
        alt=""
        style={{ maxWidth: "100%", position: "relative" }}
      />
      <Stack
        bgcolor={"rgb(254,55,47,0.8)"}
        width={"500px"}
        height={"200px"}
        position={"absolute"}
        sx={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          justifyContent: "center", // Center the text horizontally
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Center the text vertically
        }}
      >
        <Typography fontWeight={"bold"} color={"white"} variant="h3">
          Get in Contact
        </Typography>
        <Typography fontWeight={"bold"} color={"white"} variant="h5">
          We’re here for you
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ContactCTA;
