
// import { Stack, Typography, CircularProgress } from "@mui/material";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
// import { useNavigate } from "react-router-dom";
// import Button from "../utils/Button";
// import UserProfileModal from "./UserProfileModal";
// import UserPass from "./UserPass";

// const UserProfile = () => {
//   const [details, setDetails] = useState();
// const [modalUser, setModalUser] = useState(false);
// const [modalPass, setModalPass] = useState(false);
// const [loading, setLoading] = useState(true);
//    useEffect(() => {
//      // Fetch user profile data initially
//      UserPro();

//      // Set up an interval to auto-refresh every second
//      const refreshInterval = setInterval(() => {
//        UserPro();
//      }, 2000);

//      // Clean up the interval when the component is unmounted or navigated away
//      return () => {
//        clearInterval(refreshInterval);
//      };
//    }, []);

//   const UserPro = async () => {
//     try {
//       const userId = JSON.parse(localStorage.getItem("apiResponseData")).userId;
//       setLoading(true);
//       const response = await axios.get(
//         `https://privily.co/api/user-profile/${userId}`
//       );

//       setDetails(response.data.userData[0]);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     } finally {
//       setLoading(false); // Clear loading state after data is fetched
//     }
//   };
  
// const navigate = useNavigate();
// const handleBackHome = () => {
//   navigate(-1);
// };
//   const profileFields = [
//     { label: "Email", value: details?.email },
//     { label: "Mobile Number", value: details?.mobile_no },
//     { label: "Name", value: details?.name },
//     { label: "Password", value: "*********" },
//     // Add other fields as needed
//   ];

//   return (
//     <>
//       <Stack
//         bgcolor={"White"}
//         p={"16px 100px 16px 0px"}
//         direction={"row"}
//         justifyContent={"space-around"}
//       >
//         <KeyboardBackspaceRoundedIcon
//           sx={{ pt: { sm: "0px", xs: "4px" } }}
//           onClick={handleBackHome}
//         />
//         <Typography fontWeight={"bold"} textAlign={"center"} variant="h5">
//           User Profile
//         </Typography>
//       </Stack>
//       {loading ? (
//         <CircularProgress />
//       ) : (
//         <Stack>
//           {details && (
//             <>
//               {profileFields.map((field, index) => (
//                 <Stack
//                   key={index}
//                   bgcolor={"White"}
//                   mt={2}
//                   p={"16px 30px"}
//                   direction={"row"}
//                   justifyContent={"space-between"}
//                 >
//                   <Typography>{field.label}</Typography>
//                   <Typography>{field.value}</Typography>
//                 </Stack>
//               ))}
//             </>
//           )}
//         </Stack>
//       )}
//       <Stack
//         alignItems={"Center"}
//         pt={3}
//         direction={"row"}
//         gap={1}
//         justifyContent={"center"}
//       >
//         <Button
//           onClick={() => {
//             setModalUser(true);
//           }}
//           sx={{
//             bgcolor: "#FF1200",
//             color: "white",
//             width: "130px",
//             borderRadius: "40px",
//             padding: "10px",
//             fontWeight: "bold",
//           }}
//         >
//           Edit Profile
//         </Button>
//         <Button
//           onClick={() => {
//             setModalPass(true);
//           }}
//           sx={{
//             bgcolor: "#FF1200",
//             color: "white",
//             width: "130px",
//             borderRadius: "40px",
//             padding: "10px",
//             fontWeight: "bold",
//           }}
//         >
//           Edit Password
//         </Button>
//       </Stack>
//       {modalUser && <UserProfileModal setModalUser={setModalUser} />}
//       {modalPass && <UserPass setModalPass={setModalPass} />}
//     </>
//   );
// };

// export default UserProfile;

import { Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import { useNavigate } from "react-router-dom";
import Button from "../utils/Button";
import UserProfileModal from "./UserProfileModal";
import UserPass from "./UserPass";

const UserProfile = () => {
  const [details, setDetails] = useState();
  const [modalUser, setModalUser] = useState(false);
  const [modalPass, setModalPass] = useState(false);
  useEffect(() => {
    // Fetch user profile data initially
    UserPro();

    // Set up an interval to auto-refresh every second
    const refreshInterval = setInterval(() => {
      UserPro();
    }, 2000);

    // Clean up the interval when the component is unmounted or navigated away
    return () => {
      clearInterval(refreshInterval);
    };
  }, []);

  const UserPro = async () => {
    try {
      const userId = JSON.parse(localStorage.getItem("apiResponseData")).userId;

      const response = await axios.get(
        `https://privily.co/api/user-profile/${userId}`
      );

      setDetails(response.data.userData[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const navigate = useNavigate();
  const handleBackHome = () => {
    navigate(-1);
  };
  const profileFields = [
    { label: "Email", value: details?.email },
    { label: "Mobile Number", value: details?.mobile_no },
    { label: "Name", value: details?.name },
    { label: "Password", value: "*********" },
    // Add other fields as needed
  ];

  return (
    <>
      <Stack
        bgcolor={"White"}
        p={"16px 100px 16px 0px"}
        direction={"row"}
        justifyContent={"space-around"}
      >
        <KeyboardBackspaceRoundedIcon
          sx={{ pt: { sm: "0px", xs: "4px" } }}
          onClick={handleBackHome}
        />
        <Typography fontWeight={"bold"} textAlign={"center"} variant="h5">
          User Profile
        </Typography>
      </Stack>
      {details && (
        <Stack>
          {profileFields.map((field, index) => (
            <Stack
              key={index}
              bgcolor={"White"}
              mt={2}
              p={"16px 30px"}
              direction={"row"}
              justifyContent={"space-between"}
            >
              <Typography>{field.label}</Typography>
              <Typography>{field.value}</Typography>
            </Stack>
          ))}
        </Stack>
      )}
      <Stack
        alignItems={"Center"}
        pt={3}
        direction={"row"}
        gap={1}
        justifyContent={"center"}
      >
        <Button
          onClick={() => {
            setModalUser(true);
          }}
          sx={{
            bgcolor: "#FF1200",
            color: "white",
            width: "130px",
            borderRadius: "40px",
            padding: "10px",
            fontWeight: "bold",
          }}
        >
          Edit Profile
        </Button>
        <Button
          onClick={() => {
            setModalPass(true);
          }}
          sx={{
            bgcolor: "#FF1200",
            color: "white",
            width: "130px",
            borderRadius: "40px",
            padding: "10px",
            fontWeight: "bold",
          }}
        >
          Edit Password
        </Button>
      </Stack>
      {modalUser && <UserProfileModal setModalUser={setModalUser} />}
      {modalPass && <UserPass setModalPass={setModalPass} />}
    </>
  );
};

export default UserProfile;