import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Button from "../utils/Button";
import { useNavigate } from "react-router-dom";

const Blank = () => {
  const navigate = useNavigate();
  const handleMarketPlace = () => {
    navigate("/Podsdiscovery");
    window.scrollTo(0, 0);
  };
  return (
    <Stack
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"90vh"}
    >
      <Stack
        height={"228px"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={1}
      >
        <Box
          width={"107px"}
          height={"107px"}
          bgcolor={"#F8F8FF"}
          borderRadius={"50%"}
          border={"1px solid #E2DBFB"}
        ></Box>
        <Typography fontWeight={"bold"} color={"black"} fontSize={"15px"}>
          You don't have any Notification
        </Typography>
        <Typography color={"grey"} fontSize={"15px"}>
          Start bookings and purchase their listings!
        </Typography>
        <Button onClick={handleMarketPlace} sx={{ p: "8px 16px" }}>
          Start Booking
        </Button>
      </Stack>
    </Stack>
  );
};

export default Blank;
