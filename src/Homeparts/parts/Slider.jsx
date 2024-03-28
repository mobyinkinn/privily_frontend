
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, CardContent, Typography, Button, Stack, Box } from "@mui/material";
import podsImg from "../../assets/podsImage.jpg";
import axios from "axios";
import { useNavigate } from "react-router";
import StarIcon from "@mui/icons-material/Star";
import WifiRoundedIcon from "@mui/icons-material/WifiRounded";
import ChairRoundedIcon from "@mui/icons-material/ChairRounded";
import NotificationsOffRoundedIcon from "@mui/icons-material/NotificationsOffRounded";
const Sliderr = () => {
  const features = [
    {
      icon: (
        <ChairRoundedIcon
          sx={{ fontSize: { xss: "20px", xs: "13px", lg: "30px" } }}
        />
      ),
    },
    {
      icon: (
        <WifiRoundedIcon
          sx={{ fontSize: { xss: "20px", xs: "13px", lg: "30px" } }}
        />
      ),
    },
    {
      icon: (
        <NotificationsOffRoundedIcon
          sx={{ fontSize: { xss: "20px", xs: "13px", lg: "30px" } }}
        />
      ),
    },
  ];
  const navigate =useNavigate();
  const [Cards, setCards] = useState([])
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: null,
    initialSlide: -1,
    nextArrow: null,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2, // Change this to 3 for 3 cards in a row on mobile
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  const handlecardClicks = (slug) => {
    navigate(`/podsdetails/${slug}`);
  };
useEffect(() => {
  const getCastingCallsdetails = async () => {
    try {
      const response = await axios.get("https://privily.co/api/allpods", {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      setCards(response.data.data);
      console.log("resp", response);
      console.log("Cards", response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  getCastingCallsdetails();
}, []);
  return (
    <Stack sx={{ width: { lg: "90%", xs: "93%" }, margin: "auto" }}>
      <Slider {...settings}>
        {Cards.map((d, index) => (
          <Card
            sx={{
              width: { lg: "90%", md: "30%", sm: "35%", xs: "43%" },
              //   maxWidth: "380px",
              borderRadius: "25px",
              backgroundColor: "white",
              cursor: "pointer",
            }}
            key={index}
            onClick={() => {
              handlecardClicks(d.slug);
              window.scrollTo(0, 0);
            }}
          >
            <Stack
              alignItems="center"
              spacing={2}
              p={{ lg: "10px", md: 2, sm: 2, xs: 1 }}
            >
              <Box
                sx={{
                  height: "auto",
                  width: "100%",
                  borderRadius: "16px 16px 0 0",
                }}
              >
                <img
                  src={`https://privily.co/storage/podsimage/${d.featuredImage}`}
                  alt=""
                  className="Images-correct"
                  style={{
                    width: "100%",
                    objectFit: "contain",
                    borderRadius: "16px 16px 0 0",
                  }}
                />
              </Box>
            </Stack>
            <Stack sx={{ p: "2px 10px 10px 17px" }}>
              <Typography
                fontSize={{ lg: "25px", xs: "15px" }}
                fontWeight={"bold"}
                textAlign={"left"}
                gutterBottom
              >
                {d.title}
              </Typography>
              <Typography
                fontSize={{ lg: "17px", xs: "10px" }}
                textAlign={"left"}
                gutterBottom
              >
                {d.address}
              </Typography>
              <Stack
                direction={"row"}
                gap={{ lg: 2, sm: "10px", xs: 1 }}
                display={"flex"}
              >
                {features.map((feature, index) => (
                  <Stack key={index} direction={"row"} gap={3}>
                    <Stack justifyContent={"center"} color={"grey"}>
                      {" "}
                      {feature.icon}
                    </Stack>
                  </Stack>
                ))}
                <Stack
                  gap="4px"
                  direction="row"
                  alignItems={"center"}
                  sx={{
                    bgcolor: "#1D9740",
                    color: "white",
                    // width: { lg: "80px"},
                    borderRadius: "40px",
                    padding: { lg: "5px 15px 5px 15px", xs: "2px 7px 3px 7px" },
                    fontWeight: "bold",
                    fontSize: {
                      lg: "26px",
                      md: "20px",
                      sm: "16px",
                      xss: "17px",
                      xs: "12px",
                    },
                  }}
                >
                  {d.rating}
                  <StarIcon
                    sx={{ fontSize: { xss: "20px", xs: "13px", lg: "30px" } }}
                  />
                </Stack>
              </Stack>
            </Stack>
            {/* <Stack p={"0 18px 18px 18px"}>
            <Typography fontSize={10}>{d.title}</Typography>
            <Typography fontSize={10}>{d.body}</Typography>
          </Stack> */}
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

export default Sliderr;
