import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import WhoWeA from "../assets/Whoweare.png"
import Icon from "../assets/Icon.svg";

const OurMission = () => {
  return (
    <>
      <Stack bgcolor={"#FFF5F4"} p={"35px 0 70px 70px "} direction={"row"}>
        <Stack width={"50%"}>
          <Box
            bgcolor={"#FE372F"}
            width={"54%"}
            height={"200px"}
            position={"relative"}
          >
            <img
              src={WhoWeA}
              alt=""
              style={{
                position: "absolute",
                width: "600px",
                height: "142%",
                top: "60px",
              }}
            />
          </Box>
        </Stack>
        <Stack width={"50%"} gap={2}>
          <img src={Icon} alt="" style={{ width: "200px", height: "150px" }} />
          <Typography fontWeight={"bold"} fontSize={"40px"}>
            Our Mission
          </Typography>
          <Typography pr={25}>
            Our mission is simple: to revolutionize the way you work. By
            providing high-quality, soundproof office pods, we aim to empower
            you to work better, think clearer, and achieve more. Whether it’s in
            a busy office, a co-working space, or a public area, Privily pods
            are your personal retreat for those moments when you need to block
            out the world and hone in on your tasks.
          </Typography>
        </Stack>
      </Stack>
      <Stack bgcolor={"#FFF5F4"} p={"35px 0 70px 70px "} direction={"row-reverse"}>
        <Stack width={"50%"}>
          <Box
            bgcolor={"#FE372F"}
            width={"54%"}
            height={"200px"}
            position={"relative"}
          >
            <img
              src={WhoWeA}
              alt=""
              style={{
                position: "absolute",
                width: "600px",
                height: "142%",
                top: "60px",
              }}
            />
          </Box>
        </Stack>
        <Stack width={"50%"} gap={2}>
          <img src={Icon} alt="" style={{ width: "200px", height: "150px" }} />
          <Typography fontWeight={"bold"} fontSize={"40px"}>
            Our Vision
          </Typography>
          <Typography pr={25}>
            Our mission is simple: to revolutionize the way you work. By
            providing high-quality, soundproof office pods, we aim to empower
            you to work better, think clearer, and achieve more. Whether it’s in
            a busy office, a co-working space, or a public area, Privily pods
            are your personal retreat for those moments when you need to block
            out the world and hone in on your tasks.
          </Typography>
        </Stack>
      </Stack>
    </>
  );}

export default OurMission