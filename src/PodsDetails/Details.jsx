import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Button from "../utils/Button";
import DirectionsIcon from "@mui/icons-material/Directions";
import StarIcon from "@mui/icons-material/Star";
import WifiRoundedIcon from "@mui/icons-material/WifiRounded";
import ChairRoundedIcon from "@mui/icons-material/ChairRounded";
import NotificationsOffRoundedIcon from "@mui/icons-material/NotificationsOffRounded";
import ChargingStationRoundedIcon from "@mui/icons-material/ChargingStationRounded";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";
import Faqs from "./Faq";
const features = [
  {
    icon: <ChairRoundedIcon/>,
    text: "Comfortable chairs",
  },
  { icon: <WifiRoundedIcon />, text: "Unlimited Wi-fi" },
  { icon: <NotificationsOffRoundedIcon />, text: "Sound Proof" },
  { icon: <ChargingStationRoundedIcon />, text: " Charging " },
  { icon: <KeyRoundedIcon />, text: " 24/7 Access" },
];
const Details = () => {
  return (
    <Stack bgcolor={"white"} pt={5}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        p={{
          lg: "24px 130px 24px 130px",
          md: "24px 130px 24px 130px",
          sm: "20px 90px 20px 90px",
          xs: "40px",
        }}
      >
        <Stack gap={2}>
          <Typography
            fontWeight={"bold"}
            fontSize={{ lg: "40px", md: "30px", sm: "25px", xs: "22px" }}
          >
            CTICC 1- Jaipur, Mansarover
          </Typography>
          <Typography>Convention Square,1 Lower Long Street</Typography>
          <Typography>Cape Town , 8001, South Africa</Typography>
          <Stack direction={"row"} gap={2}>
            <Button
              endIcon={<StarIcon />}
              sx={{
                bgcolor: "#1D9740",
                color: "white",
                width: "80px",
                borderRadius: "40px",
                padding: "5px 10px 5px 10px",
                fontWeight: "bold",
              }}
            >
              4.5
            </Button>
            <Button
              sx={{
                bgcolor: "#FF1200",
                color: "white",
                width: "130px",
                borderRadius: "40px",
                padding: "5px 10px 5px 10px",
                fontWeight: "bold",
              }}
            >
              Book Now
            </Button>
          </Stack>
        </Stack>
        <Stack justifyContent={"flex-start"}>
          <Button
            startIcon={<DirectionsIcon fontSize="30px" color="#FF1200" />}
            sx={{
              color: "#FF1200",
              borderRadius: "40px",
              padding: {
                lg: "5px 10px 5px 10px",
                md: "5px 10px 5px 10px",
                sm: "2px 7px 2px 7px",
              },
              fontWeight: "bold",
              border: "3px solid #FF1200",
              //   fontSize: {
              //     xs: "10px",
              //     sm: "14px",
              //     md: "17px",
              //     lg: "24px",
              //     xl: "26px",
              //   },
              //   width: { xs: "auto", sm: "125px", md: "170px", lg: "200px" },
              //   height: { xs: "20px", sm: "35px", md: "50px", lg: "60px" },
            }}
          >
            Directions
          </Button>
        </Stack>
      </Stack>
      <Stack
        sx={{
          content: "''",
          height: "1px",
          width: "100%",
          bgcolor: "lightgrey",
        }}
      ></Stack>
      <Stack
        p={{
          lg: "24px 130px 24px 130px",
          md: "24px 130px 24px 130px",
          sm: "20px 90px 20px 90px",
          xs: "40px",
        }}
        gap={2}
      >
        <Typography
          fontWeight={"bold"}
          fontSize={{ lg: "35px", md: "30px", sm: "25px", xs:"20px" }}
        >
          Features
        </Typography>
        {features.map((feature, index) => (
          <Stack key={index} direction={"row"} gap={3}>
            <Stack justifyContent={"center"} color={"grey"}>
              {" "}
              {feature.icon}
            </Stack>
            <Typography variant="h6">{feature.text}</Typography>
          </Stack>
        ))}
      </Stack>
      <Faqs />
      <Stack alignItems={"Center"} pb={5}>
        <Button
          sx={{
            bgcolor: "#FF1200",
            fontSize: "20px",
            color: "white",
            width: "150px",
            borderRadius: "40px",
            padding: "5px 10px 5px 10px",
            fontWeight: "bold",
          }}
        >
          Book Now
        </Button>
      </Stack>
    </Stack>
  );
};

export default Details;
