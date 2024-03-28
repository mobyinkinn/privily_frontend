import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import icons from "../assets/icons.svg"
const Features = () => {
  return (
    <Stack gap={10}>
      <Stack p={"40px 80px 10px 80px"} gap={3}>
        <Typography fontWeight={"bold"} color={"black"} fontSize={"30px"}>
          3 Must Have
          <span
            style={{
              fontWeight: "bold",
              color: "#ED3327",
              fontSize: "30px",
              paddingLeft: "10px",
            }}
          >
            Features
          </span>
        </Typography>
        <Typography>
          Acoustic office work pods are becoming a standard solution for agile,
          flex, and hybrid offices. If you’re new to the concept, here are three
          aspects to keep an eye on as you poke around the market. There are
          many variations of passages of Lorem Ipsum available, but the majority
          have suffered alteration in some form, by injected humour, or
          randomised words which don't look even slightly believable. If you are
          going to use a passage of Lorem Ipsum, you need to be sure there isn't
          anything embarrassing hidden in the middle of text. All the Lorem
          Ipsum generators on the Internet tend to repeat predefined chunks as
          necessary, making this the first true generator on the Internet.
        </Typography>
      </Stack>
      <Stack
        position={"relative"}
        alignItems={"Center"}
        position={"relative"}
        justifyContent={"center"}
        direction={"row"}
        gap={3}
      >
        <Stack
          width={"23%"}
          height={"300px"}
          bgcolor={"white"}
          borderRadius={"20px"}
          alignItems={"center"}
          p={3}
          gap={2}
          zIndex={100}
        >
          <img
            src={icons}
            alt=""
            style={{
              width: "150px",
              height: "150px",
            }}
          />
          <Typography fontWeight={"bold"} variant="h5" textAlign={"center"}>
            Mobility
          </Typography>
          <Typography>
            It is not the strongest of the species that survive, nor the most
            intelligent, but the ones most responsive to change,” said Charles
            Darwin.
          </Typography>
        </Stack>
        <Stack
          width={"22%"}
          height={"300px"}
          bgcolor={"white"}
          borderRadius={"20px"}
          alignItems={"center"}
          p={3}
          gap={2}
          zIndex={100}
        >
          <img
            src={icons}
            alt=""
            style={{
              width: "150px",
              height: "150px",
            }}
          />
          <Typography fontWeight={"bold"} variant="h5" textAlign={"center"}>
            Professional Acoustics
          </Typography>
          <Typography>
            It is not the strongest of the species that survive, nor the most
            intelligent, but the ones most responsive to change,” said Charles
            Darwin.
          </Typography>
        </Stack>
        <Stack
          width={"22%"}
          height={"300px"}
          bgcolor={"white"}
          borderRadius={"20px"}
          alignItems={"center"}
          p={3}
          gap={1}
          zIndex={100}
        >
          <img
            src={icons}
            alt=""
            style={{
              width: "150px",
              height: "150px",
            }}
          />
          <Typography fontWeight={"bold"} variant="h5" textAlign={"center"}>
            High-caliber air ventilation system
          </Typography>
          <Typography>
            It is not the strongest of the species that survive, nor the most
            intelligent, but the ones most responsive to change,” said Charles
            Darwin.
          </Typography>
        </Stack>
        <Box
          position={"absolute"}
          bgcolor={"#FE372F"}
          width={"89%"}
          height={"30vh"}
          top={"50%"}
          borderRadius={"25px 25px 0 0"}
        ></Box>
      </Stack>
      <Box width={"100px"}></Box>
    </Stack>
  );
}

export default Features