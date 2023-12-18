// import { Stack, Typography } from "@mui/material";
// import React from "react";
// // import Mysvg from "../assets/banner.svg";
// import banner from "../assets/Slider.png"
// import Banner from "../assets/BannerCTAA.png"
// import Button from "../utils/Button";
// import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
// const BannerCTA = () => {
    
//   return (
//     <Stack position={"relative"}>
//       <img src={banner} alt="" style={{ maxWidth: "100%" }} />

//       <Typography
//         position={"absolute"}
//         color={"white"}
//         sx={{
//           fontSize: {
//             xs: "20px",
//             sm: "30px",
//             md: "50px",
//             lg: "60px",
//             xl: "80px",
//           },
//         }}
//         left={{ xs: 20, sm: 40, md: 70, lg: 100 }}
//         fontWeight={900}
//         top={{ xs: 180, sm: 40, md: 50, lg: 90, xl: 300 }}
//         lineHeight={1.2}
//         width={{
//           xs: "90%",
//           sm: "250px",
//           md: "376px",
//           lg: "500px",
//           xl: "600px",
//         }}
//       >
//         Discover Pods Near You!
//       </Typography>
//       <Typography
//         position={"absolute"}
//         color={"white"}
//         fontSize={{
//           xs: "10px",
//           sm: "18px",
//           md: "27px",
//           lg: "33px",
//           xl: "40px",
//         }}
//         left={{ xs: 20, sm: 40, md: 70, lg: 100 }}
//         top={{ xs: 180, sm: 120, md: 185, lg: 250, xl: 300 }}
//       >
//         Locate Your Nearest <br></br> Pod Today!
//       </Typography>
//       {/* <ButtonWithIcon
//         sx={{
//           position: "absolute",
//           left: { xs: 20, sm: 30, md: 60, lg: 90 },
//           bottom: { xs: 2, sm: 65, md: 60, lg: 90, xl: 20 },
//           fontSize: { xs: "10px", sm: "14px", md: "17px", lg: "24px" },
//           width: { sm: "125px", md: "170px", lg: "200px" },
//           height: { sm: "35px", md: "50px", lg: "60px" },
//         }}
//       >
//         Book now
//       </ButtonWithIcon> */}
//       <Button
//         endIcon={<ArrowForwardIosRoundedIcon />}
//         sx={{
//           position: "absolute",
//           left: { xs: 20, sm: 30, md: 60, lg: 90 },
//           bottom: { xs: 2, sm: 65, md: 60, lg: 90, xl: 20 },
//           fontSize: { xs: "10px", sm: "14px", md: "17px", lg: "24px" },
//           width: { sm: "125px", md: "170px", lg: "200px" },
//           height: { sm: "35px", md: "50px", lg: "60px" },
//         }}
//       >
//         Book now
//       </Button>

//       {/* <ArrowForwardIosRoundedIcon
//         sx={{
//           position: "absolute",
//           left: { xs: 150, sm: 125, md: 205, lg: 250 },
//           bottom: { xs: 20, sm: 69, md: 72, lg: 106, xl:53 },

//         }}
//       />  */}
//     </Stack>
//   );
// };

// export default BannerCTA;

import { Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import banner from "../assets/Slider.png";
import bannerResponsive from "../assets/BannerCTAA.png";
import Button from "../utils/Button";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const BannerCTA = () => {
  const [imageSource, setImageSource] = useState(banner);

  useEffect(() => {
    const handleResize = () => {
      // Update the image source based on screen width
      if (window.innerWidth <= 500) {
        setImageSource(bannerResponsive);
      } else {
        setImageSource(banner);
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
    <Stack position={"relative"} p={{ xs: 2, md: 0, sm: 0, lg: 0 }}>
      <img src={imageSource} alt="" style={{ maxWidth: "100%" }} />

      <Typography
        position={"absolute"}
        color={"white"}
        sx={{
          fontSize: {
            xs: "15px",
            sm: "30px",
            md: "50px",
            lg: "60px",
            xl: "80px",
          },
        }}
        left={{ xs: "7%", sm: 40, md: 70, lg: 100 }}
        fontWeight={900}
        top={{ xs: "25%", sm: 40, md: 50, lg: 90, xl: 300 }}
        lineHeight={1.2}
        width={{
          xs: "140px",
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
        left={{ xs: "7%", sm: 40, md: 70, lg: 100 }}
        top={{ xs: "50%", sm: 120, md: 185, lg: 250, xl: 300 }}
      >
        Locate Your Nearest <br></br> Pod Today!
      </Typography>

      <Button
        endIcon={
          <ArrowForwardIosRoundedIcon
            sx={{ fontSize: { xs: "30px", sm: 30, md: 40, lg: 50 } }}
          />
        }
        sx={{
          position: "absolute",
          padding:"10px",
          left: { xs: "6%", sm: 30, md: 60, lg: 90 },
          bottom: { xs: "13%", sm: 65, md: 55, lg: 90, xl: 20 },
          fontSize: { xs: "10px", sm: "14px", md: "17px", lg: "24px" },
          width: { xs: "auto", sm: "125px", md: "170px", lg: "200px" },
          height: { xs: "20px", sm: "35px", md: "50px", lg: "60px" },
        }}
      >
        Book now
      </Button>
    </Stack>
  );
};

export default BannerCTA;
