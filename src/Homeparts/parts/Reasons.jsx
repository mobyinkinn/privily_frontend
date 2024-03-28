// import { Stack, Typography, Tooltip } from "@mui/material";
// import React, { useState } from "react";
// import Reason from "../../assets/Reasons.png";
// import { IconButton } from "@mui/material";
// import CircleIcon from "@mui/icons-material/Circle";
// const Reasons = () => {
//   return (
//     <Stack bgcolor={"#FFFCF9"}>
//       <Stack direction={"row"} gap={1} p={"30px 30px 30px 88px"}>
//         <Typography fontWeight={"bold"} color={"black"} fontSize={"50px"}>
//           5 Reasons Why to Use
//         </Typography>
//         <Typography fontWeight={"bold"} color={"#ED3327"} fontSize={"50px"}>
//           Privily Pods
//         </Typography>
//       </Stack>
//       <Stack alignItems={"center"} position={"relative"}>
//         <img src={Reason} alt="" style={{ width: "600px", height: "650px" }} />
//         <Tooltip
//           title="Conventions are crowded and noisy, making it difficult to find a place to focus on work or take a private call. Privily GO pods provide a private space where attendees can work, make calls."
//           placement="left"
//           arrow
//           sx={{ backgroundColor: "white", color: "white" }}
//         >
//           <IconButton sx={{ position: "absolute", left: 510, top: 50 }}>
//             <CircleIcon
//               sx={{
//                 fontSize: "35px",
//                 color: "white",
//                 outline: "0px solid white",
//                 outlineOffset: 2,
//                 borderRadius: "50%",
//                 outlineWidth: 2,
//               }}
//             />
//           </IconButton>
//         </Tooltip>
//       </Stack>
//     </Stack>
//   );
// };

// export default Reasons;


import { Stack, Typography, Tooltip } from "@mui/material";
import React from "react";
import Reason from "../../assets/Reasons.png";
import { IconButton } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

const Reasons = () => {
  return (
    <Stack
      bgcolor={"#FFFCF9"}
      display={{ xs: "none", sm: "flex", md: "flex", lg: "flex", xl: "flex" }}
    >
      <Typography
        fontWeight={"bold"}
        color={"black"}
        fontSize={"30px"}
        p={{ lg: "30px 30px 30px 88px", sm: "30px 30px 30px 66px" }}
      >
        5 Reasons Why to Use &nbsp;
        <span
          style={{
            fontWeight: "bold",
            color: "#ED3327",
            fontSize: "30px",
            textTransform: "uppercase",
          }}
        >
          Privily Pods
        </span>
      </Typography>
      <Stack alignItems={"center"} position={"relative"} overflow={"hidden"}>
        <img src={Reason} alt="" style={{ width: "600px", height: "650px" }} />
        <Tooltip
          title={
            <>
              <Typography variant="h4" p={"16px 16px 0 16px"} color={"#ED3327"}>
                Privacy
              </Typography>
              <Typography
                variant="body1"
                fontSize="13px"
                p={"10px 16px 16px 16px"}
              >
                Conventions are crowded and noisy, making it difficult to find a
                place to focus on work or take a private call. Privily GO pods
                provide a private space where attendees can work, make calls.
              </Typography>
            </>
          }
          placement="left"
          arrow
          classes={{ tooltip: "custom-tooltip" }}
        >
          <IconButton
            sx={{ position: "absolute", left: { xl: 560, lg: 510 }, top: 50 }}
          >
            <CircleIcon
              sx={{
                fontSize: "35px",
                color: "white",
                outline: "0px solid white",
                outlineOffset: 2,
                borderRadius: "50%",
                outlineWidth: 2,
              }}
            />
          </IconButton>
        </Tooltip>
        <Tooltip
          title={
            <>
              <Typography variant="h4" p={"16px 16px 0 16px"} color={"#ED3327"}>
                Privacy
              </Typography>
              <Typography
                variant="body1"
                fontSize="13px"
                p={"10px 16px 16px 16px"}
              >
                Conventions are crowded and noisy, making it difficult to find a
                place to focus on work or take a private call. Privily GO pods
                provide a private space where attendees can work, make calls.
              </Typography>
            </>
          }
          placement="right"
          arrow
          classes={{ tooltip: "custom-tooltip" }}
        >
          <IconButton sx={{ position: "absolute", right: 510, top: 180 }}>
            <CircleIcon
              sx={{
                fontSize: "35px",
                color: "white",
                outline: "0px solid white",
                outlineOffset: 2,
                borderRadius: "50%",
                outlineWidth: 2,
              }}
            />
          </IconButton>
        </Tooltip>
        <Tooltip
          title={
            <>
              <Typography variant="h4" p={"16px 16px 0 16px"} color={"#ED3327"}>
                Privacy
              </Typography>
              <Typography
                variant="body1"
                fontSize="13px"
                p={"10px 16px 16px 16px"}
              >
                Conventions are crowded and noisy, making it difficult to find a
                place to focus on work or take a private call. Privily GO pods
                provide a private space where attendees can work, make calls.
              </Typography>
            </>
          }
          placement="bottom"
          arrow
          classes={{ tooltip: "custom-tooltip" }}
        >
          <IconButton sx={{ position: "absolute", left: 590, top: 300 }}>
            <CircleIcon
              sx={{
                fontSize: "35px",
                color: "white",
                outline: "0px solid white",
                outlineOffset: 2,
                borderRadius: "50%",
                outlineWidth: 2,
              }}
            />
          </IconButton>
        </Tooltip>
        <Tooltip
          title={
            <>
              <Typography variant="h4" p={"16px 16px 0 16px"} color={"#ED3327"}>
                Privacy
              </Typography>
              <Typography
                variant="body1"
                fontSize="13px"
                p={"10px 16px 16px 16px"}
              >
                Conventions are crowded and noisy, making it difficult to find a
                place to focus on work or take a private call. Privily GO pods
                provide a private space where attendees can work, make calls.
              </Typography>
            </>
          }
          placement="left"
          arrow
          classes={{ tooltip: "custom-tooltip" }}
        >
          <IconButton sx={{ position: "absolute", left: 530, bottom: 80 }}>
            <CircleIcon
              sx={{
                fontSize: "35px",
                color: "white",
                outline: "0px solid white",
                outlineOffset: 2,
                borderRadius: "50%",
                outlineWidth: 2,
              }}
            />
          </IconButton>
        </Tooltip>
        <Tooltip
          title={
            <>
              <Typography variant="h4" p={"16px 16px 0 16px"} color={"#ED3327"}>
                Privacy
              </Typography>
              <Typography
                variant="body1"
                fontSize="13px"
                p={"10px 16px 16px 16px"}
              >
                Conventions are crowded and noisy, making it difficult to find a
                place to focus on work or take a private call. Privily GO pods
                provide a private space where attendees can work, make calls.
              </Typography>
            </>
          }
          placement="right"
          arrow
          classes={{ tooltip: "custom-tooltip" }}
        >
          <IconButton sx={{ position: "absolute", right: 610, bottom: 100 }}>
            <CircleIcon
              sx={{
                fontSize: "35px",
                color: "white",
                outline: "0px solid white",
                outlineOffset: 2,
                borderRadius: "50%",
                outlineWidth: 2,
              }}
            />
          </IconButton>
        </Tooltip>
      </Stack>
    </Stack>
  );
};

export default Reasons;
