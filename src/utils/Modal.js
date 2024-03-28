import React, { useEffect, useState } from "react";
import "./Modal.css";
import { IconButton, Input, InputAdornment, Stack, Typography } from "@mui/material";
import logo from "../assets/Logo.png";
import Button from "./Button";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import EmailModal from "./EmailModal";
import { Link, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
function Modal({ setOpenModal, modalOpen }) {
  const [email, setemail] = useState("");
  const [emailModal, setemailModal] = useState(false);
  const [username, setusername] = useState("");
  const [mobile_no, setmobile_no] = useState("");
  const [user_password, setPassword] = useState("");
  const navigate = useNavigate();
  const [Login_name, setLogin_name] = useState("");
  const [Login_pass, setLogin_pass] = useState("");
  const [success, setsuccess] = useState("")
  const [error, seterror] = useState("");
  const [sucessreg, setsucessreg] = useState("")
  const [errorreg, seterrorreg] = useState("")
  const [errornew, seterrornew] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    loginName: "",
    loginPass: "",
    username: "",
    email: "",
    userPassword: "",
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

      if (!email || !username || !mobile_no || !user_password) {
        if (!email) handleFieldError("email", "Please fill in this field");
        if (!username)
          handleFieldError("username", "Please fill in this field");
        if (!mobile_no)
          handleFieldError("mobileNo", "Please fill in this field");
        if (!user_password)
          handleFieldError("userPassword", "Please fill in this field");
        return;
      }
      let res = await axios.post("https://privily.co/api/save-register", {
        email: email,
        name: username,
        mobile_no: mobile_no,
        password: user_password,
      });
      console.log(res, "response user type");
      if (res.status === 200) {
        if (res.data.status === "Success") {
          setsucessreg(res.data.msg);
          setTimeout(() => {
            setActivebtn(1);
          }, 2000);
        } else {
          if (res.data.errorArray) {
            seterrornew(res.data.error_msg);
            setemail("");
            setusername("");
            setmobile_no("");
            setPassword("");
            
          } else {
            seterrorreg(res.data.msg);
            setemail("");
            setusername("");
            setmobile_no("");
            setPassword("");
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
  const updateUser = (data) => {
    // Update local storage
    localStorage.setItem("apiResponseData", JSON.stringify(data));
    window.location.reload();
  };
  const GetLogin = async (e) => {
    e.preventDefault();
    try {

      if (!Login_name || !Login_pass) {
        if (!Login_name)
          handleFieldError("loginName", "Please fill in this field");
        if (!Login_pass)
          handleFieldError("loginPass", "Please fill in this field");
        return;
      }

      let res = await axios.post("https://privily.co/api/save-login", {
        email: Login_name,
        password: Login_pass,
      });

      if (res.status === 200) {
        if (res.data?.token) {
          setsuccess(res.data.msg);
          updateUser(res.data);
          setTimeout(() => {
            setOpenModal(false);
            setsuccess(""); // Clear success message after 3 seconds
          }, 1000);
          const intendedRoute = modalOpen.intendedRoute;
          if (intendedRoute) {
            navigate(intendedRoute);
          }
         
          // updateUser(res.data);
          // setOpenModal(false);
         
        } else {
          seterror(res.data.error_msg);
          setLogin_name("")
          setLogin_pass("")
          // Incorrect email or password
          // handleFieldError(
          //   "loginName",
          //   res.data?.error_msg ||
          //     "Incorrect email or password. Please try again."
          // );
          // handleFieldError(
          //   "loginPass",
          //   res.data?.error_msg ||
          //     "Incorrect email or password. Please try again."
          // );
        }
      } else {
        console.error("API Error:", res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    const handleCloseModal = (e) => {
      if (e.target.classList.contains("modalBackground")) {
        setOpenModal(false);
      }
    };

    window.addEventListener("click", handleCloseModal);

    return () => {
      window.removeEventListener("click", handleCloseModal);
    };
  }, [setOpenModal]);

  const [activebtn, setActivebtn] = useState(1);

  const buttonData = [
    {
      label: "Login",
      value: 1,
      hoverBorderRadius: "20px 0 0 0",
      borderbottomwidth: 1,
    },
    {
      label: "Sign up",
      value: 2,
      hoverBorderRadius: "0",
      borderbottomwidth: 2,
    },
  ];
  const handleupperclicks = (stepIndex) => {
    if (stepIndex > activebtn + 1) {
      console.log("You can't skip steps.");
      return;
    }

    if (stepIndex === activebtn - 1) {
      // If moving backward to a previous step, allow it without further validation
      setActivebtn(stepIndex);
      return;
    }
    if (activebtn === 1) {
      setActivebtn(stepIndex);
    } else if (activebtn === 2) {
      setActivebtn(stepIndex);
    }
  };
  return (
    <div className="modalBackground">
      <Stack>
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              X
            </button>
          </div>
          <Stack>
            <Stack direction={"row"} justifyContent={"space-evenly"}>
              {buttonData.map((button) => (
                <Typography
                  key={button.value}
                  sx={{
                    borderBottom:
                      activebtn === button.value ? "#FF1200" : "none",

                    textTransform: "none",
                    display: "flex",
                    color: activebtn === button.value ? "black" : "grey",
                    borderBottom: "0px solid #FF1200",
                    borderBottomWidth:
                      activebtn === button.borderbottomwidth ? 2 : 0,
                    borderRadius:
                      activebtn === 1
                        ? "0px"
                        : activebtn === 2
                        ? "0px"
                        : "0px 0px 0px 0px",
                    "&:hover": {
                      color: activebtn === button.value ? "black" : "grey",

                      transition: "none",
                      borderRadius:
                        activebtn === button.value
                          ? button.hoverBorderRadius
                          : "0px",
                    },

                    transition: "none",
                    fontSize: "16px",
                    fontWeight: activebtn === button.value ? 600 : 400,
                  }}
                  onClick={() => {
                    handleupperclicks(button.value);
                  }}
                >
                  {button.label}
                </Typography>
              ))}
            </Stack>
          </Stack>
          <Stack p={{ lg: "20px 40px 40px 40px", xs: "10px 20px" }}>
            {activebtn === 1 ? (
              <>
                {success && (
                  <Typography fontSize={"15px"} color="green">
                    {success}
                  </Typography>
                )}
                {error && (
                  <Typography fontSize={"15px"} color="red">
                    {error}
                  </Typography>
                )}

                <Typography p={"8px 8px 8px 0"}>Email Address:</Typography>
                <input
                  name="Login_name"
                  type="text"
                  placeholder="Email"
                  className={`Input-fields ${
                    errors.loginPass && "input-error"
                  }`}
                  value={Login_name}
                  onChange={(e) => {
                    setLogin_name(e.target.value);
                    handleFieldError("loginName", ""); // Clear error when user types
                  }}
                  // onChange={(e) => setLogin_name(e.target.value)}
                ></input>
                {errors.loginName && (
                  <Typography color="red">{errors.loginName}</Typography>
                )}
                <Typography p={"8px 8px 8px 0"}>Password:</Typography>
                {/* <input
                  name="Login_pass"
                  type="password"
                  placeholder="Enter Password"
                  className={`Input-fields ${
                    errors.loginPass && "input-error"
                  }`}
                  value={Login_pass}
                  onChange={(e) => {
                    setLogin_pass(e.target.value);
                    // handleFieldError("loginPass", "");
                    handleFieldError("loginPass", ""); // Clear error when user types
                  }}
                ></input>
                {errors.loginPass && (
                  <Typography color="red">{errors.loginPass}</Typography>
                )} */}

                <div style={{ position: "relative" }}>
                  <input
                    name="Login_pass"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    className={`Input-fields ${
                      errors.loginPass && "input-error"
                    }`}
                    value={Login_pass}
                    onChange={(e) => {
                      setLogin_pass(e.target.value);
                      handleFieldError("loginPass", ""); // Clear error when user types
                    }}
                  />
                  <IconButton
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: "-5px",
                      transform: "translateY(-50%)",
                    }}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </div>
                {errors.loginPass && (
                  <Typography color="red">{errors.loginPass}</Typography>
                )}
                <Link
                  style={{
                    color: "red",
                    fontSize: "12px",
                    textAlign: "right",
                    paddingTop: "10px",
                  }}
                  onClick={() => {
                    setemailModal(true);
                  }}
                >
                  Forgot Your Password ?
                </Link>
                {emailModal && (
                  <EmailModal
                    setEmailModal={setemailModal}
                    
                  />
                )}
                <Stack alignItems={"center"} pt={{ lg: 3, xs: 2 }}>
                  <Button
                    onClick={GetLogin}
                    sx={{
                      bgcolor: "#FF1200",
                      color: "white",
                      width: "130px",
                      borderRadius: "40px",
                      padding: "5px 10px 5px 10px",
                      fontWeight: "bold",
                    }}
                  >
                    Login
                  </Button>
                </Stack>
                <Stack textAlign={"Center"} pt={2}>
                  <Typography>
                    Don't have an account ?<span style={{color:"#FF1200",}} onClick={()=> setActivebtn(2)}>Create</span>
                  </Typography>
                </Stack>
              </>
            ) : (
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
                <Typography p={1}>Password:</Typography>
                {/* <input
                  name="user_password"
                  type="password"
                  placeholder="Enter Password"
                  className="Input-fields"
                  value={user_password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    handleFieldError("userPassword", ""); // Clear error when user types
                  }}
                ></input>
                {errors.userPassword && (
                  <Typography color="red">{errors.userPassword}</Typography>
                )} */}

                <div style={{ position: "relative" }}>
                  <input
                    name="user_password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    className="Input-fields"
                    value={user_password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      handleFieldError("userPassword", ""); // Clear error when user types
                    }}
                  />
                  <IconButton
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: "-5px",
                      transform: "translateY(-50%)",
                    }}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </div>
                {errors.userPassword && (
                  <Typography color="red">{errors.userPassword}</Typography>
                )}
                <Typography p={1}>Enter Mobile Number:</Typography>
                <Stack direction={"row"} gap={1}>
                  <input
                    type="select"
                    className="Input-fields"
                    value="+27"
                    style={{ width: "30%" }}
                    name="Country-code"
                  >
                    {/* <option value="">+27</option> */}
                  </input>
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
                    Register
                  </Button>
                </Stack>
              </>
            )}
          </Stack>
        </div>
      </Stack>
    </div>
  );
}

export default Modal;




