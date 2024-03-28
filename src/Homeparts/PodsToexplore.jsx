import { Stack, Typography } from "@mui/material";
import React from "react";
import Button from "../utils/Button";
import Sliderr from "./parts/Slider";

const PodsToexplore = () => {
  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        p={{
          lg: "30px 88px 30px 88px",
          md: "51px 56px 34px 77px",
          sm: "33px 45px 30px 46px",
          xs: "16px 28px",
        }}
      >
        <Typography
          fontWeight={"bold"}
          sx={{ fontSize: { xs: "22px", sm: "25px", md: "30px", lg: "35px" } }}
          color={"#ED3327"}
          display={"flex"}
          alignItems={"center"}
        >
          Pods to Explore
        </Typography>
        <Button
          sx={{
            bgcolor: "#FF1200",
            color:"white",
            display: {
              xs: "none",
              sm: "flex",
              md: "flex",
              lg: "flex",
              xl: "flex",
            },
            p:"0px 20px 0 20px"
          }}
        >
          View All
        </Button>
      </Stack>
    </>
  );
};
export default PodsToexplore;
