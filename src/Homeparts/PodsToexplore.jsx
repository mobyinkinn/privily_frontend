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
      p={{lg:"30px 30px 30px 88px",xs:2}}
    >
      <Typography
        fontWeight={"bold"}
        sx={{ fontSize: {xs:"22px", sm: "25px", md: "30px", lg: "35px" } }}
        color={"#ED3327"}
        display={"flex"}
        alignItems={"center"}
      >
        Pods to Explore
      </Typography>
      <Button sx={{ bgcolor: "transparent", display:{ xs: "none", sm: "flex", md: "flex", lg: "flex", xl: "flex" },fontSize:{sm:"15px",md:"20px",lg:"25px"}}}>View All</Button>
    </Stack>
    </>
  );
};
export default PodsToexplore;
