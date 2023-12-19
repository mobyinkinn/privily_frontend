import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import bannerCor from "../../assets/corporate.svg";
import Button from "../../utils/Button";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const Corporate = () => {
  return (
    <Stack>
      <Stack
        p={{ lg: "50px 80px 50px 80px", xs: "30px 20px 10px 20px" }}
        position={"relative"}
      >
        <img src={bannerCor} alt="" />
        <Button
          endIcon={<ArrowForwardIosRoundedIcon color="white" />}
          sx={{
            display: "flex",
            color: "white",
            bgcolor: "#FE372F",
            position: "absolute",
            width: "fit-content",
            p: 2,
            left: "50%",
            top: "55%",
            transform: "translateX(-50%)",
            // right: { xs: 20, sm: 30, md: 400, lg: 600 },
            // bottom: { xs: 2, sm: 65, md: 250, lg: 350, xl: 20 },
            fontSize: { xs: "10px", sm: "14px", md: "17px", lg: "23px" },
            height: { xs: "20px", sm: "35px", md: "50px", lg: "55px" },
            fontWeight: "bold",
          }}
        >
          Corporate pods
        </Button>
        <Typography
          position={"absolute"}
          bgcolor={"white"}
          width={"1155px"}
          p={2}
          left={"10%"}
          bottom={"25%"}
          transform={"translateX(-50%)"}
          borderRadius={"20px"}
          fontSize={"20px"}
          display={{ lg: "block", md: "none", sm: "none", xs: "none" }}
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </Typography>
      </Stack>
      <Box
        width={"100%"}
        height={"100px"}
        display={{ xs: "block", sm: "none", md: "none", lg: "none", xl: "none" }}
      ></Box>
    </Stack>
  );
};

export default Corporate;
