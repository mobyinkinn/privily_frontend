// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import podsImg from "../../assets/podsImage.png"
// function Sliderr() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
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
//     <div className="w-3/4 m-auto">
//       <div className="mt-20">
//         <Slider {...settings}>
//           {data.map((d) => (
//             <div
//               key={d.name}
//               className="bg-white p-4 rounded-xl mx-4" // Added padding, background color, and border-radius
//             >
//               <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
//                 <img
//                   src={podsImg}
//                   alt=""
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                     borderRadius: "inherit",
//                   }}
//                 />
//               </div>
//               <div className="flex flex-col items-center justify-center gap-4 p-4">
//                 <p className="text-xl font-semibold">{d.name}</p>
//                 <p className="text-center">{d.review}</p>
//                 <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">
//                   Read More
//                 </button>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// }

// const data = [
//   {
//     name: `John Morgan`,
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
//   },
//   {
//     name: `Ellie Anderson`,
//     img: `/students/Ellie_Anderson.jpg`,
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
//   },
//   {
//     name: `Nia Adebayo`,
//     img: `/students/Nia_Adebayo.jpg`,
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
//   },
//   {
//     name: `Rigo Louie`,
//     img: `/students/Rigo_Louie.jpg`,
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
//   },
//   {
//     name: `Mia Williams`,
//     img: `/students/Mia_Williams.jpg`,
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
//   },
// ];

// export default Sliderr;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, CardContent, Typography, Button, Stack } from "@mui/material";
import podsImg from "../../assets/podsImage.png"


const Sliderr = () => {
   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
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

  return (
    <div style={{ width: "85%", margin: "auto" }}>
      <div>
        <Slider {...settings}>
          {data.map((d) => (
            <Card
            sx={{maxWidth:"380px", borderRadius:"25px"}}
              key={d.name}
              style={{ backgroundColor: "white"}}
            >
              <Stack alignItems="center" spacing={2} p={2}>
                <div
                  style={{
                    height: "150px",
                    backgroundColor: "#3f51b5",
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
                </div>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {d.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {d.review}
                  </Typography>
                  <Button variant="contained" color="primary" size="small">
                    Read More
                  </Button>
                </CardContent>
              </Stack>
            </Card>
          ))}
        </Slider>
      </div>
    </div>
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
