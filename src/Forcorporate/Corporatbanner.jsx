import { Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import CorporateCTA from "../assets/CorporateCTA.jpg";
import bannerResponsive from "../assets/BannerCTAA.png";
import Button from "../utils/Button";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useNavigate } from "react-router-dom";
const Corporatebanner = () => {
  const [imageSource, setImageSource] = useState(CorporateCTA);
  const navigate = useNavigate();
  const handleSendClick = () => {
    navigate("/PodsDetails");
  };
  useEffect(() => {
    const handleResize = () => {
      // Update the image source based on screen width
      if (window.innerWidth <= 100) {
        setImageSource(bannerResponsive);
      } else {
        setImageSource(CorporateCTA);
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
    <Stack p={{ xs: 2, md: 0, sm: 0, lg: 0 }}>
      <img src={imageSource} alt="" style={{ maxWidth: "100%" }} />
      {/* <Typography
        position={"absolute"}
        color={"#FE372F"}
        sx={{
          fontSize: {
            xs: "14px",
            sm: "34px",
            md: "44px",
            lg: "60px",
            xl: "80px",
          },
        }}
        left={{ xs: "10%", sm: 55, md: 70, lg: 100 }}
        fontWeight={"bold"}
        top={{ xs: "5%", sm: "23%", md: "20%", lg: "18%", xl: "40%" }}
        lineHeight={1.2}
        width={{
          xs: "140px",
          sm: "250px",
          md: "376px",
          lg: "500px",
          xl: "600px",
        }}
      >
        Office Pods & Acoustics
      </Typography>
      <Typography
        position={"absolute"}
        color={"black"}
        fontSize={{
          xs: "8px",
          sm: "18px",
          md: "26px",
          lg: "33px",
          xl: "40px",
        }}
        left={{ xs: "10%", sm: 55, md: 70, lg: 100 }}
        top={{ xs: "11%", sm: "37%", md: "33%", lg: "31%", xl: 300 }}
      >
        Sound absorbing furniture <br></br> designed.
      </Typography>

      <Button
        onClick={handleSendClick}
        sx={{
        bgcolor:"#FE372F",
        color:"white",
          position: "absolute",
          padding: "10px",
          left: { xs: "9%", sm: 50, md: 65, lg: 90 },
          top: { xs: "15%", sm: "47%", md: "44%", lg: "42%", xl: 20 },
          fontSize: { xs: "10px", sm: "14px", md: "17px", lg: "24px" },
          width: { xs: "auto", sm: "110px", md: "149px", lg: "200px" },
          height: { xs: "20px", sm: "30px", md: "41px", lg: "60px" },
        }}
      >
        Book now
      </Button> */}
      
    </Stack>
  );
};

export default Corporatebanner;
