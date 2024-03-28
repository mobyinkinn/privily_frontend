import { Stack, Typography } from '@mui/material';
import React from 'react'
import MyCarousel from './MyCarousel';

const AboutUs = () => {
  return (
    <Stack
      mt={5}
      bgcolor={"#FFF5F4"}
      sx={{
        flexDirection: { lg: "row", md: "column" },
        height: { lg: "500px", md: "800px", sm: "850px" },
      }}
      display={{ xs: "none", sm: "flex", md: "flex", lg: "flex", xl: "flex" }}
    >
      <Stack
        p={{ lg: 10, sm: "51px 56px 34px 77px" }}
        sx={{ width: { lg: "50%" } }}
        gap={1}
      >
        <Typography fontWeight={"bold"} color={"black"} fontSize={"30px"}>
          About
          <span
            style={{
              fontWeight: "bold",
              color: "#ED3327",
              fontSize: "30px",
              textTransform: "uppercase",
              paddingLeft: "10px",
            }}
          >
            Privily
          </span>
        </Typography>
        <Typography letterSpacing={1} fontSize={"20px"}>
          Welcome to Privily, where solitude meets innovation. In a world where
          open office spaces dominate, we understand the need for personal space
          where focus and creativity can flourish. Privily was born out of the
          desire to create a sanctuary for professionals in the bustling work
          environment. Our office pods are designed to give you a slice of
          privacy in the most crowded of places, ensuring that your productivity
          and mental well-being are never compromised.
        </Typography>
      </Stack>
      <MyCarousel />
    </Stack>
  );
}

export default AboutUs;