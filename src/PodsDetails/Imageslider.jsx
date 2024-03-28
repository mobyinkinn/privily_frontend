
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Stack, Box } from "@mui/material";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import { useNavigate } from "react-router";

const Imageslider = ({ detail }) => {
  const navigate = useNavigate();
  console.log("detail",detail)
  const handleBackHome = () => {
    navigate(-1);
  };

  const images = detail?.image?.split(",") || [];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: null,
    nextArrow: null,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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
      gap={2}
      sx={{
        width: { lg: "90%", xs: "93%" },
        margin: "auto",
        height: { lg: "52vh", xs: "50vh" },
        justifyContent: "center",
      }}
    >
      <KeyboardBackspaceRoundedIcon
        sx={{ pt: { sm: "0px", xs: "30px" } }}
        onClick={handleBackHome}
      />
      <Slider {...settings} className="correct">
        {images.map((image, index) => (
          <Card
            sx={{
              maxWidth: "300px",
              borderRadius: "25px",
              backgroundColor: "transparent",
              boxShadow: "none",
            }}
            key={index}
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
                  src={`https://privily.co/storage/podsimage/${image.trim()}`}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "16px",
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

export default Imageslider;
