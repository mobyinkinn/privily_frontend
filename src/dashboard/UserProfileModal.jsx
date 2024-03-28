import React, { useEffect, useState } from "react";
import "./UserProfileModal.css";
import {
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Button from "../utils/Button";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
function UserProfileModal({ setModalUser }) {
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [mobile_no, setmobile_no] = useState("");
  const [sucessreg, setsucessreg] = useState("");
  const [errorreg, seterrorreg] = useState("");
  const [errornew, seterrornew] = useState("");

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    mobileNo: "",
  });
  const handleFieldError = (field, message) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: message,
    }));
  };
  // const handleInputChange = (field) => {
  //   // Clear the error for the specified field when the user starts typing
  //   setErrors((prevErrors) => ({
  //     ...prevErrors,
  //     [field]: "",
  //   }));
  // };

  const GetRegester = async () => {
    try {
      if (!email || !username || !mobile_no) {
        if (!email) handleFieldError("email", "Please fill in this field");
        if (!username)
          handleFieldError("username", "Please fill in this field");
        if (!mobile_no)
          handleFieldError("mobileNo", "Please fill in this field");
        return;
      }
      const userId = JSON.parse(localStorage.getItem("apiResponseData")).userId;

      let res = await axios.post(
        `https://privily.co/api/edit-profile/${userId}`,
        {
          email: email,
          name: username,
          mobile_no: mobile_no,
        }
      );
      console.log(res, "response user type");
      if (res.status === 200) {
        if (res.data.status === "success") {
          setsucessreg(res.data.msg);
          setTimeout(() => {
            setModalUser(false);
             console.log("Modal closed");
          }, 2000);
        } else {
          if (res.data.errorArray) {
            seterrornew(res.data.error_msg);
            setemail("");
            setusername("");
            setmobile_no("");
          } else {
            seterrorreg(res.data.msg);
            setemail("");
            setusername("");
            setmobile_no("");
          }
        }
      } else {
        console.error("API Error:", res.data);
      }
    } catch (error) {
      //alert
      console.log(error);
    }
  };

  useEffect(() => {
    const handleCloseModal = (e) => {
      if (e.target.classList.contains("modalBackground")) {
        setModalUser(false);
      }
    };

    window.addEventListener("click", handleCloseModal);

    return () => {
      window.removeEventListener("click", handleCloseModal);
    };
  }, [setModalUser]);

  return (
    <div className="modalBackground">
      <Stack>
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setModalUser(false);
              }}
            >
              X
            </button>
          </div>
          <Stack></Stack>
          <Stack p={{ lg: "20px 40px 40px 40px", xs: "10px 20px" }}>
            <>
              {sucessreg && (
                <Typography fontSize={"15px"} color="green">
                  {sucessreg}
                </Typography>
              )}
              {errorreg && (
                <Typography fontSize={"15px"} color="red">
                  {errorreg}
                </Typography>
              )}
              {errornew && (
                <Typography fontSize={"15px"} color="red">
                  {errornew}
                </Typography>
              )}
              <Typography p={1}>Name:</Typography>
              <input
                name="username"
                type="text"
                placeholder="Full Name"
                className="Input-fields"
                value={username}
                onChange={(e) => {
                  setusername(e.target.value);
                  handleFieldError("username", ""); // Clear error when user types
                }}
              ></input>
              {errors.username && (
                <Typography color="red">{errors.username}</Typography>
              )}
              <Typography p={1}>Email Address:</Typography>
              <input
                name="email"
                type="text"
                placeholder="Email"
                className="Input-fields"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                  handleFieldError("email", ""); // Clear error when user types
                }}
              ></input>
              {errors.email && (
                <Typography color="red">{errors.email}</Typography>
              )}
              <Typography p={1}>Enter Mobile Number:</Typography>
              <Stack direction={"row"} gap={1}>
                <input
                  type="select"
                  className="Input-fields"
                  value="+27"
                  style={{ width: "30%" }}
                  name="Country-code"
                ></input>
                <input
                  name="mobile_no"
                  type="number"
                  placeholder="Enter Mobile Number"
                  className="Input-fields"
                  value={mobile_no}
                  onChange={(e) => {
                    setmobile_no(e.target.value);
                    handleFieldError("mobileNo", ""); // Clear error when user types
                  }}
                ></input>
              </Stack>
              {errors.mobileNo && (
                <Typography color="red">{errors.mobileNo}</Typography>
              )}
              <Stack alignItems={"center"} pt={3}>
                <Button
                  onClick={GetRegester}
                  sx={{
                    bgcolor: "#FF1200",
                    color: "white",
                    width: "130px",
                    borderRadius: "40px",
                    padding: "5px 10px 5px 10px",
                    fontWeight: "bold",
                  }}
                >
                  Update Profile
                </Button>
              </Stack>
            </>
          </Stack>
        </div>
      </Stack>
    </div>
  );
}

export default UserProfileModal;
