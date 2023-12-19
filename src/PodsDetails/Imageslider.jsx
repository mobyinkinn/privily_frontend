import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Stack, Box } from "@mui/material";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import podsImg from "../assets/Reasons.png";

const Imageslider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: null,
    nextArrow: null,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Change this to 3 for 3 cards in a row on mobile
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Stack
      sx={{
        width: { lg: "90%", xs: "93%" },
        margin: "auto",
        height: "60vh",
        justifyContent: "center",
      }}
    >
      <KeyboardBackspaceRoundedIcon sx={{pt:"40px"}} />
      <Slider {...settings}>
        {data.map((d) => (
          <Card
            sx={{
              maxWidth: "300px",
              borderRadius: "25px",
              backgroundColor: "transparent",
              boxShadow: "none",
              pb: 5,
            }}
            key={d.name}
          >
            <Stack alignItems="center" spacing={2}>
              <Box
                sx={{
                  height: "auto",
                  width: "100%",
                  borderRadius: "16px 16px 0 0",
                }}
              >
                <img
                  src={podsImg}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "16px 16px 0 0",
                  }}
                />
              </Box>
            </Stack>
          </Card>
        ))}
      </Slider>
    </Stack>
  );
};

const data = [
  {
    name: `John Morgan`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Ellie Anderson`,
    img: `/students/Ellie_Anderson.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Nia Adebayo`,
    img: `/students/Nia_Adebayo.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Rigo Louie`,
    img: `/students/Rigo_Louie.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Mia Williams`,
    img: `/students/Mia_Williams.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];

export default Imageslider;
