// import { Box, Stack, Typography } from "@mui/material";
// import React from "react";
// import Work1 from "../../assets/Work1.svg"
// import Work2 from "../../assets/Work2.svg";
// import Work3 from "../../assets/Work3.svg";
// import Work4 from "../../assets/Work4.svg";
// const Rightplace = () => {
//   return (
//     <Stack bgcolor={"#FFF5F4"} p={"30px 30px 30px 88px"} gap={3}>
//       <Stack direction={"row"} gap={1}>
//         <Typography fontWeight={"bold"} color={"black"} fontSize={"40px"}>
//           Find The Right
//         </Typography>
//         <Typography
//           fontWeight={"bold"}
//           color={"#ED3327"}
//           fontSize={"40px"}
//           textTransform={"uppercase"}
//         >
//           Workspace
//         </Typography>
//       </Stack>
//       <Typography fontSize={"22px"}>
//         Five types of workspaces in a wide variety of environments, including:
//         coworking locations, serviced offices, office buildings, shopping malls,
//         hotels and even coliving spaces.
//       </Typography>
//       <Stack direction={"row"} gap={3}>
//         <Stack gap={2} width={"25%"}>
//           <Stack>
//           <Typography fontWeight={"bold"} fontSize={"22px"}>
//             Desk
//           </Typography>
//           <Typography fontSize={"15px"}>
//             Your own desk wherever you are so you can focus on your work
//           </Typography>
//           </Stack>
//           <img src={Work1} alt="" style={{width:"149px", height:"140px"}}/>
//         </Stack>
//         <Stack gap={2} width={"25%"}>
//           <Stack>
//           <Typography fontWeight={"bold"} fontSize={"22px"}>
//             Meeting Rooms
//           </Typography>
//           <Typography fontSize={"15px"}>
//             Your own desk wherever you are so you can focus on your work
//           </Typography>
//           </Stack>
//           <img src={Work2} alt="" style={{width:"149px", height:"140px"}}/>
//         </Stack>
//         <Stack gap={2} width={"25%"}>
//           <Stack>
//           <Typography fontWeight={"bold"} fontSize={"22px"}>
//             Pricate Offices
//           </Typography>
//           <Typography fontSize={"15px"}>
//             Your own desk wherever you are so you can focus on your work
//           </Typography>
//           </Stack>
//           <img src={Work3} alt="" style={{width:"149px", height:"140px"}}/>
//         </Stack>
//         <Stack gap={2} width={"25%"}>
//           <Stack>
//           <Typography fontWeight={"bold"} fontSize={"22px"}>
//             Event & Lifestyles
//           </Typography>
//           <Typography fontSize={"15px"}>
//             Your own desk wherever you are so you can focus on your work
//           </Typography>
//           </Stack>
//           <img src={Work4} alt="" style={{width:"149px", height:"140px"}}/>
//         </Stack>
//       </Stack>
//     </Stack>
//   );
// };

// export default Rightplace;



import { Stack, Typography } from "@mui/material";
import React from "react";
import Work1 from "../../assets/Work1.svg";
import Work2 from "../../assets/Work2.svg";
import Work3 from "../../assets/Work3.svg";
import Work4 from "../../assets/Work4.svg";

const workspaceData = [
  {
    title: "Desk",
    description: "Your own desk wherever you are so you can focus on your work",
    image: Work1,
  },
  {
    title: "Meeting Rooms",
    description: "Book meeting rooms for your team or clients",
    image: Work2,
  },
  {
    title: "Private Offices",
    description: "Private and dedicated office spaces for your team",
    image: Work3,
  },
  {
    title: "Event & Lifestyles",
    description: "Spaces for events and lifestyle activities",
    image: Work4,
  },
];

const Rightplace = () => {
  return (
    <Stack
      bgcolor={"#FFF5F4"}
      p={{ lg: "30px 88px 30px 88px", sm: "30px 65px 30px 59px" }}
      gap={3}
      display={{ xs: "none", sm: "flex", md: "flex", lg: "flex", xl: "flex" }}
    >
      <Typography fontWeight={"bold"} color={"black"} fontSize={"30px"}>
        Find The Right{" "}
        <span
          style={{
            fontWeight: "bold",
            color: "#ED3327",
            fontSize: "30px",
            textTransform: "uppercase",
          }}
        >
          Workspace
        </span>
      </Typography>

      <Typography fontSize={"18px"}>
        Five types of workspaces in a wide variety of environments, including:
        coworking locations, serviced offices, office buildings, shopping malls,
        hotels, and even coliving spaces.
      </Typography>
      <Stack direction={{ xs: "column", sm: "row" }} gap={1}>
        {workspaceData.map((workspace, index) => (
          <Stack
            key={index}
            width={{ sm: "100%", md: "50%" }}
            p={3}
            border={"1px solid lightgrey"}
            borderRadius={10}
          >
            <Stack>
              <Typography
                fontWeight={"bold"}
                fontSize={{ lg: "22px", md: "20px", sm: "18px" }}
                sx={{ height: { md: "60px", sm: "65px" } }}
              >
                {workspace.title}
              </Typography>
              <Typography
                fontSize={"15px"}
                sx={{ height: { md: "65px", sm: "fit-content" } }}
              >
                {workspace.description}
              </Typography>
            </Stack>
            <Stack>
              <img src={workspace.image} alt="" className="right-images" />
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Rightplace;
