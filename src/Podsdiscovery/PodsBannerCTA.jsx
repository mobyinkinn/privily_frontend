import { Stack, Typography } from "@mui/material";
import React, { useState, useEffect} from "react";
import Podbanner from "../assets/podsImage.jpg";
import bannerResponsive from "../assets/BannerCTAA.png";
import Button from "../utils/Button";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useNavigate } from "react-router-dom";
const PodsBannerCTA = () => {
  const [imageSource, setImageSource] = useState(Podbanner);
  const navigate = useNavigate()
const handleSendClick=()=>{
  navigate("/PodsDetails")
}
  useEffect(() => {
    const handleResize = () => {
      // Update the image source based on screen width
      if (window.innerWidth <= 100) {
        setImageSource(bannerResponsive);
      } else {
        setImageSource(Podbanner);
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
    <Stack
      p={{ xs: 2, md: 0, sm: 0, lg: 0 }}
      display={{ lg: "flex", md: "flex", sm: "none", xs: "none" }}
      height={{lg:"550px",md:"368px"}}
    >
      <img src={imageSource} alt="" style={{ maxWidth: "100%" }} />
    </Stack>
  );
};

export default PodsBannerCTA;
