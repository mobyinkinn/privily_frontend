// import { Box, Stack, Typography } from "@mui/material";
// import React from "react";
// import Search from "../../assets/SearchIcon.svg";
// import product from "../../assets/Productive.svg";
// import hand from "../../assets/hand.svg";
// const WhyPrivily = () => {
//   return (
//     <Stack p={"30px 88px 30px 88px"} bgcolor={"#FFFCF9"} gap={5}>
//       <Typography
//         fontWeight={"bold"}
//         sx={{ fontSize: { sm: "20px", md: "30px", lg: "35px" } }}
//         color={"#ED3327"}
//         display={"flex"}
//         alignItems={"center"}
//       >
//         Why PRIVILY
//       </Typography>
//       <Stack direction={"row"} gap={5} justifyContent={"center"}>
//         <Stack
//           width={"31%"}
//           bgcolor={"#F1F7FD"}
//           border={"1px solid #ABA8A7"}
//           borderRadius={"30px"}
//         >
//           <Stack
//             width={"100%"}
//             height={"200px"}
//             justifyContent={"center"}
//             alignItems={"center"}
//           >
//             <img src={Search} alt="" style={{ width: "70%", height: "70%" }} />
//           </Stack>
//           <Typography
//             fontWeight={"bold"}
//             letterSpacing={1}
//             p={"16px 16px 16px 20px"}
//             variant="h5"
//           >
//             Access Workspace Whenever You Need it, All Over The City
//           </Typography>
//           <Typography variant="h6" letterSpacing={1} p={"20px 20px 20px 24px"}>
//             Downtown or suburbs. Office buildings, shopping malls, hotels,
//             coworking or coliving, are all on Switch.
//           </Typography>
//         </Stack>
//         <Stack
//           width={"31%"}
//           bgcolor={"#F1F7FD"}
//           border={"1px solid #ABA8A7"}
//           borderRadius={"30px"}
//         >
//           <Stack
//             width={"100%"}
//             height={"200px"}
//             justifyContent={"center"}
//             alignItems={"center"}
//           >
//             <img src={product} alt="" style={{ width: "70%", height: "70%" }} />
//           </Stack>
//           <Typography
//             fontWeight={"bold"}
//             letterSpacing={1}
//             p={"16px 16px 16px 20px"}
//             variant="h5"
//           >
//             Access Workspace Whenever You Need it, All Over The City
//           </Typography>
//           <Typography variant="h6" letterSpacing={1} p={"20px 20px 20px 24px"}>
//             Downtown or suburbs. Office buildings, shopping malls, hotels,
//             coworking or coliving, are all on Switch.
//           </Typography>
//         </Stack>
//         <Stack
//           width={"31%"}
//           bgcolor={"#F1F7FD"}
//           border={"1px solid #ABA8A7"}
//           borderRadius={"30px"}
//         >
//           <Stack
//             width={"100%"}
//             height={"200px"}
//             justifyContent={"center"}
//             alignItems={"center"}
//           >
//             <img src={hand} alt="" style={{ width: "70%", height: "70%" }} />
//           </Stack>
//           <Typography
//             fontWeight={"bold"}
//             letterSpacing={1}
//             p={"16px 16px 16px 20px"}
//             variant="h5"
//           >
//             Access Workspace Whenever You Need it, All Over The City
//           </Typography>
//           <Typography variant="h6" letterSpacing={1} p={"20px 20px 20px 24px"}>
//             Downtown or suburbs. Office buildings, shopping malls, hotels,
//             coworking or coliving, are all on Switch.
//           </Typography>
//         </Stack>
//       </Stack>
//     </Stack>
//   );
// };

// export default WhyPrivily;

import { Stack, Typography } from "@mui/material";
import React from "react";
import Search from "../../assets/SearchIcon.svg";
import product from "../../assets/Productive.svg";
import hand from "../../assets/hand.svg";

const cardsData = [
  {
    imgSrc: Search,
    title: "Access Workspace Whenever You Need it, All Over The City",
    description:
      "Downtown or suburbs. Office buildings, shopping malls, hotels, coworking or coliving, are all on Switch.",
  },
  {
    imgSrc: product,
    title: "Access Workspace Whenever You Need it, All Over The City",
    description:
      "Downtown or suburbs. Office buildings, shopping malls, hotels, coworking or coliving, are all on Switch.",
  },
  {
    imgSrc: hand,
    title: "Access Workspace Whenever You Need it, All Over The City",
    description:
      "Downtown or suburbs. Office buildings, shopping malls, hotels, coworking or coliving, are all on Switch.",
  },
];

const WhyPrivily = () => {
  return (
    <Stack
      p={{ xs: "60px", md: "40px 60px", lg: "40px 49px" }}
      bgcolor={"#FFFCF9"}
      gap={5}
      display={{ xs: "none", sm: "flex", md: "flex", lg: "flex", xl: "flex" }}
    >
      <Typography
        fontWeight={"bold"}
        fontSize={"30px"}
        // sx={{ fontSize: { xs: "18px", sm: "20px", md: "30px", lg: "35px" } }}
        color={"#ED3327"}
        display={"flex"}
        alignItems={"center"}
        pl={4}
      >
        Why PRIVILY
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row", lg: "row" }}
        gap={5}
        justifyContent={"center"}
        padding={"12px 16px 12px 16px"}
      >
        {cardsData.map((card, index) => (
          <Stack
            key={index}
            width={{ xs: "100%", md: "31%" }}
            bgcolor={"#F1F7FD"}
            border={"1px solid #ABA8A7"}
            borderRadius={"30px"}
          >
            <Stack
              width={"100%"}
              height={"200px"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <img
                src={card.imgSrc}
                alt=""
                style={{ width: "70%", height: "70%" }}
              />
            </Stack>
            <Typography
              fontWeight={"bold"}
              letterSpacing={1}
              p={"16px 16px 16px 20px"}
              variant="h5"
            >
              {card.title}
            </Typography>
            <Typography
              variant="h6"
              letterSpacing={1}
              p={"20px 20px 20px 24px"}
            >
              {card.description}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default WhyPrivily;

