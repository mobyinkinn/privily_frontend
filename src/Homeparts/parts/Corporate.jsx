import { Stack, Typography } from "@mui/material";
import React from "react";
import bannerCor from "../../assets/corporate.svg";
import Button from "../../utils/Button";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const Corporate = () => {
  return (
    <Stack>
      <Stack p={"50px 80px 50px 80px"} position={"relative"}>
        <img src={bannerCor} alt="" />
        <Button
          endIcon={<ArrowForwardIosRoundedIcon color="white" />}
          sx={{
            display: "flex",
            color: "white",
            bgcolor: "#FE372F",
            position: "absolute",
            width: "fit-content",
            p: 4,
            right: { xs: 20, sm: 30, md: 60, lg: 600 },
            bottom: { xs: 2, sm: 65, md: 60, lg: 350, xl: 20 },
            fontSize: { xs: "10px", sm: "14px", md: "17px", lg: "24px" },
            height: { sm: "35px", md: "50px", lg: "55px" },
            fontWeight: "bold",
          }}
        >
          Corporate pods
        </Button>
        <Typography
          position={"absolute"}
          bgcolor={"white"}
          bottom={190}
          left={125}
          width={"1155px"}
          p={2}
          borderRadius={"20px"}
          fontSize={"22px"}
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Corporate;
