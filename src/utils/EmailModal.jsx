import React, { useEffect, useState } from "react";
import { Stack, Typography } from "@mui/material";
import Button from "./Button";
import axios from "axios";
import Confirmation from "./Confirmation";

function EmailModal({ setEmailModal}) {
  const [emailData, setEmailData] = useState({
    email: "",
  });
  const [errors, setErrors] = useState({
    email: "",
  });
 const [confirmationVisible, setConfirmationVisible] = useState(false);
  const handleFieldError = (field, message) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: message,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmailData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear error when user types
    handleFieldError(name, "");
  };

  const handleFormSubmit = async () => {
    try {
      // Validate form fields
      if (!emailData.email) {
        handleFieldError("email", "Please fill in this field");
        return;
      }

      const apiUrl = "https://privily.co/api/forget-password";
      const response = await axios.post(apiUrl, emailData);

      if (response.status === 200) {
        if(response.data.status==="success"){
        
        setConfirmationVisible(true);
        setTimeout(() => {
        //   setConfirmationVisible(false);
          setEmailModal(false);
        }, 3000);
        }else  {
           setErrors({ email: response.data.meesage });
        }
      } else {
        console.error("Error saving data:", response.error_msg);
      }
      console.log("response",response)
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <>
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setEmailModal(false);
            }}
          >
            X
          </button>
        </div>
        <Stack alignItems={"center"}>
          <Typography fontSize={"25px"} fontWeight={"bold"}>
            Forget Password
          </Typography>
          <Typography textAlign={"center"} fontSize={"12px"}>
            Feel Free to Submit your Email
          </Typography>
        </Stack>
        <Stack p={"20px 20px 20px 10px"} gap={1.5}>
          <input
            type="text"
            placeholder="Enter Your Email"
            className={`Input-fields ${errors.email && "input-error"}`}
            name="email"
            // value={emailData.email}
            value={emailData?.email || ""}
            onChange={handleInputChange}
          ></input>

          {errors.email && <Typography color="red">{errors.email}</Typography>}
          <Stack alignItems={"center"} pt={1}>
            <Button
              onClick={handleFormSubmit}
              sx={{
                bgcolor: "#FF1200",
                color: "white",
                width: "130px",
                borderRadius: "40px",
                padding: "5px 10px 5px 10px",
                fontWeight: "bold",
              }}
            >
              Submit
            </Button>
          </Stack>
        </Stack>
      </div>
    </div>
    {confirmationVisible && <Confirmation />}
    </>
  );
}

export default EmailModal;
