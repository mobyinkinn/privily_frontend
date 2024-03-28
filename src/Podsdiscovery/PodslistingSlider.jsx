// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { Card, Stack, Box } from "@mui/material";
// import { useNavigate } from "react-router";

// const PodslistingSlider = ({ Cards }) => {
//   const navigate = useNavigate();
//   console.log("cardsdsd",Cards)
//   const handlebackHome = () => {
//     // Use navigate(-1) to navigate back one step in the history
//     navigate(-1);
//   };
//   const Images = Cards.images;
//   console.log("asdasffa",Images)
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     prevArrow: null,
//     nextArrow: null,
//     responsive: [
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1, // Change this to 3 for 3 cards in a row on mobile
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <Stack
//       sx={{
//         width: { lg: "90%", xs: "93%" },
//         margin: "auto",
//         justifyContent: "center",
//       }}
//     >
//       <Slider {...settings}>
//         {Images?.map((d, index) => (
//           <Card
//             sx={{
//               maxWidth: "300px",
//               borderRadius: "25px",
//               backgroundColor: "transparent",
//               boxShadow: "none",
//               pb: 5,
//             }}
//             key={index}
//           >
//             <Stack alignItems="center" spacing={2}>
//               <Box
//                 sx={{
//                   height: "auto",
//                   width: "100%",
//                   borderRadius: "16px 16px 0 0",
//                 }}
//               >
//                 <img
//                   // src={podsImg}
//                   src={`https://seopods.com${d.images[0]?.url}`}
//                   alt=""
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                     borderRadius: "16px",
//                   }}
//                 />
//               </Box>
//             </Stack>
//           </Card>
//         ))}
//       </Slider>
//     </Stack>
//   );
// };


// export default PodslistingSlider;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Stack, Box } from "@mui/material";
import { useNavigate } from "react-router";

const PodslistingSlider = ({ images }) => {
  const navigate = useNavigate();
  const imag = images?.split(",") || [];
  console.log("imag", imag);
  const settings = {
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
      sx={{
        width: { lg: "24%", md: "47%", sm: "59%", xss: "100%", xs: "100%" },
        margin: "auto",
        justifyContent: "center",
      }}
    >
      <Slider {...settings}>
        {imag.map((image, index) => (
          <Card
            sx={{
              paddingBottom: 0,
              maxWidth: "300px",
              backgroundColor: "transparent",
              boxShadow: "none",
            }}
            key={index}
          >
            <Stack alignItems="center" justifyContent={"center"} spacing={2}>
              <Stack
                alignItems={"center"}
                justifyContent={"center"}
                sx={{
                  width: "100%",
                }}
              >
                <img
                  src={`https://privily.co/storage/podsimage/${image.trim()}`}
                  alt=""
                  className="ImagesDiscovery"
                  style={{
                    width: "100%",
                    borderRadius: "20px",
                  }}
                />
              </Stack>
            </Stack>
          </Card>
        ))}
      </Slider>
    </Stack>
  );
};

export default PodslistingSlider;
