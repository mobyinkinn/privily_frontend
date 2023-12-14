import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Work1 from "../../assets/Work1.svg"
import Work2 from "../../assets/Work2.svg";
import Work3 from "../../assets/Work3.svg";
import Work4 from "../../assets/Work4.svg";
const Rightplace = () => {
  return (
    <Stack bgcolor={"#FFF5F4"} p={"30px 30px 30px 88px"} gap={3}>
      <Stack direction={"row"} gap={1}>
        <Typography fontWeight={"bold"} color={"black"} fontSize={"50px"}>
          Find The Right
        </Typography>
        <Typography
          fontWeight={"bold"}
          color={"#ED3327"}
          fontSize={"50px"}
          textTransform={"uppercase"}
        >
          Workspace
        </Typography>
      </Stack>
      <Typography fontSize={"22px"}>
        Five types of workspaces in a wide variety of environments, including:
        coworking locations, serviced offices, office buildings, shopping malls,
        hotels and even coliving spaces.
      </Typography>
      <Stack direction={"row"} gap={3}>
        <Stack gap={2} width={"25%"}>
          <Stack>
          <Typography fontWeight={"bold"} fontSize={"22px"}>
            Desk
          </Typography>
          <Typography fontSize={"15px"}>
            Your own desk wherever you are so you can focus on your work
          </Typography>
          </Stack>
          <img src={Work1} alt="" style={{width:"149px", height:"140px"}}/>
        </Stack>
        <Stack gap={2} width={"25%"}>
          <Stack>
          <Typography fontWeight={"bold"} fontSize={"22px"}>
            Meeting Rooms
          </Typography>
          <Typography fontSize={"15px"}>
            Your own desk wherever you are so you can focus on your work
          </Typography>
          </Stack>
          <img src={Work2} alt="" style={{width:"149px", height:"140px"}}/>
        </Stack>
        <Stack gap={2} width={"25%"}>
          <Stack>
          <Typography fontWeight={"bold"} fontSize={"22px"}>
            Pricate Offices
          </Typography>
          <Typography fontSize={"15px"}>
            Your own desk wherever you are so you can focus on your work
          </Typography>
          </Stack>
          <img src={Work3} alt="" style={{width:"149px", height:"140px"}}/>
        </Stack>
        <Stack gap={2} width={"25%"}>
          <Stack>
          <Typography fontWeight={"bold"} fontSize={"22px"}>
            Event & Lifestyles
          </Typography>
          <Typography fontSize={"15px"}>
            Your own desk wherever you are so you can focus on your work
          </Typography>
          </Stack>
          <img src={Work4} alt="" style={{width:"149px", height:"140px"}}/>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Rightplace;
