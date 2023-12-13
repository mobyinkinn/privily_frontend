import { Stack, Typography } from "@mui/material";
import React from "react";
import Mysvg from "../assets/banner.svg";
import Button from "../utils/Button";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const BannerCTA = () => {
    
  return (
    <Stack position={"relative"}>
      <img src={Mysvg} alt="" style={{ maxWidth: "100%" }} />
      
      <Typography
        position={"absolute"}
        color={"white"}
        sx={{
          fontSize: {
            xs: "20px",
            sm: "30px",
            md: "50px",
            lg: "60px",
            xl: "80px",
          },
        }}
        left={{ xs: 20, sm: 40, md: 70, lg: 100 }}
        fontWeight={900}
        top={{ xs: 180, sm: 40, md: 50, lg: 90, xl: 300 }}
        lineHeight={1.2}
        width={{
          xs: "90%",
          sm: "250px",
          md: "376px",
          lg: "500px",
          xl: "600px",
        }}
      >
        Discover Pods Near You!
      </Typography>
      <Typography
        position={"absolute"}
        color={"white"}
        fontSize={{
          xs: "10px",
          sm: "18px",
          md: "27px",
          lg: "33px",
          xl: "40px",
        }}
        left={{ xs: 20, sm: 40, md: 70, lg: 100 }}
        top={{ xs: 180, sm: 120, md: 185, lg: 250, xl: 300 }}
      >
        Locate Your Nearest <br></br> Pod Today!
      </Typography>
       <Button
        sx={{
          position: "absolute",
          left: { xs: 20, sm: 30, md: 60, lg: 90 },
          bottom: { xs: 2, sm: 65, md: 60, lg: 90,xl:20 },
          fontSize: { xs: "10px", sm: "14px", md: "17px", lg: "24px" },
          width:{sm:"125px",md:"170px", lg:"200px"},
          height:{sm:"35px",md:"50px", lg:"60px"}
        }}
      >
        Book now
      </Button>
      
      <ArrowForwardIosRoundedIcon
        sx={{
          position: "absolute",
          left: { xs: 150, sm: 125, md: 205, lg: 250 },
          bottom: { xs: 20, sm: 69, md: 72, lg: 106, xl:53 },

        }}
      /> 
    </Stack>
  );
};

export default BannerCTA;
