

import React, { useEffect, useState } from "react";
import "./CorModal.css";
import { Stack, Typography } from "@mui/material";
import Button from "../../utils/Button";
import ThanksExe from "./ThanksExe";
import axios from "axios";

function CorModal({ setCorModalOpen, setThanksModal }) {
  const [companyData, setCompanyData] = useState({
    name: "",
    email: "",
    mobile_no: "",
    address: "not found",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile_no: "",
    address: "",
  });

  const handleFieldError = (field, message) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: message,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCompanyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear error when user types
    handleFieldError(name, "");
  };

  const handleFormSubmit = async () => {
    try {
      // Validate form fields
      if (
        !companyData.name ||
        !companyData.email ||
        !companyData.mobile_no 
      ) {
        if (!companyData.name)
          handleFieldError("name", "Please fill in this field");
        if (!companyData.email)
          handleFieldError("email", "Please fill in this field");
        if (!companyData.mobile_no)
          handleFieldError("mobile_no", "Please fill in this field");
        
        return;
      }

      const apiUrl = "https://privily.co/api/save-company";
      const response = await axios.post(apiUrl, companyData);

      if (response.status === 200) {
        setCorModalOpen(false);
        setThanksModal(true);
      } else {
        console.error("Error saving data:", response.error_msg);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    const handleCloseModal = (e) => {
      if (e.target.classList.contains("modalBackground")) {
        setCorModalOpen(false);
      }
    };

    window.addEventListener("click", handleCloseModal);

    return () => {
      window.removeEventListener("click", handleCloseModal);
    };
  }, [setCorModalOpen]);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setCorModalOpen(false);
            }}
          >
            X
          </button>
        </div>
        <Stack alignItems={"center"}>
          <Typography fontSize={"25px"} fontWeight={"bold"}>
            Office Pods
          </Typography>
          <Typography textAlign={"center"} fontSize={"12px"}>
            Feel Free to Connect for Office Pods
          </Typography>
        </Stack>
        <Stack p={"20px 20px 20px 10px"} gap={1.5}>
          
            <input
              type="text"
              placeholder="Company Name"
              className={`Input-fields ${errors.name && "input-error"}`}
              name="name"
              value={companyData.name}
              onChange={handleInputChange}
            ></input>
            {errors.name && <Typography color="red">{errors.name}</Typography>}
            <input
              type="text"
              placeholder="Work Email"
              className={`Input-fields ${errors.email && "input-error"}`}
              name="email"
              value={companyData.email}
              onChange={handleInputChange}
            ></input>
            {errors.email && (
              <Typography color="red">{errors.email}</Typography>
            )}
            <input
              type="number"
              placeholder="Mobile Number"
              className={`Input-fields ${errors.mobile_no && "input-error"}`}
              name="mobile_no"
              value={companyData.mobile_no}
              onChange={handleInputChange}
            ></input>
            {errors.mobile_no && (
              <Typography color="red">{errors.mobile_no}</Typography>
            )}
            {/* <input
              type="text"
              placeholder="Company Address"
              className={`Input-fields ${errors.address && "input-error"}`}
              name="address"
              value={companyData.address}
              onChange={handleInputChange}
            ></input> */}
            {/* {errors.address && (
              <Typography color="red">{errors.address}</Typography>
            )} */}
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
  );
}

export default CorModal;
