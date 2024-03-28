
import { Stack, Typography } from "@mui/material";
import React from "react";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import { useNavigate } from "react-router-dom";

const Termsandcondition = () => {
  const navigate = useNavigate();
  const handleBackHome = () => {
    navigate(-1);
  };
  const lists = [
    {
      heading: "1. Acceptance of Terms",
      description:
        "1. By using the Privily service, you agree to comply with and be bound by the following terms and conditions. If you do not agree to these terms, please refrain from using our service.",
    },
    {
      heading: "2. Services Provided",
      description:
        "Privily offers privacy work pod services, providing individuals with dedicated, soundproof, private workspaces equipped for professional use. Users may book and utilize these pods through our platform.",
    },
    {
      heading: "3. Booking and Access",
      description:
        "1. Booking: Users may book work pods through the Privily platform. Bookings are subject to availability and confirmation. 2. Access: Users will be provided with secure access to the booked work pod during the reserved time. Access codes or keys must be used responsibly, and any loss must be reported immediately.",
    },
    {
      heading: "4. User Responsibilities",
      description:
        "1. Conduct: Users are expected to conduct themselves professionally and respect the privacy and rights of other users. 2. Cleanliness: Users must leave the work pod in the same condition as they found it. Any damage or excessive cleaning required may result in additional charges.",
    },
    {
      heading: "5. Payments and Fees",
      description:
        "1. Payment: Users agree to pay the fees associated with booking work pods as and when specified on the Privily platform. 2. Refunds: Refunds are subject to the cancellation policy outlined on the platform.",
    },
    {
      heading: "6. Privacy and Data Security",
      description:
        "1. Data Collection: Privily may collect personal information for service provision. The Privacy Policy outlines the types of information collected, how it is used, and how it is secured. 2. Confidentiality: Users are responsible for maintaining the confidentiality of their access credentials and agree not to share them with unauthorized individuals.",
    },
    {
      heading: "7. Liability",
      description:
        "1. Limitation of Liability: Privily is not liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of our services.",
    },
    {
      heading: "8. Termination",
      description:
        "Privily reserves the right to terminate user access for violation of terms and conditions or disruptive behavior without prior notice.",
    },
    {
      heading: "9. Governing Law",
      description:
        "These terms and conditions are governed by the laws of South Africa. Any disputes arising will be resolved through arbitration in Johannesburg.",
    },
    {
      heading: "10. Changes to Terms",
      description:
        "Privily reserves the right to update these terms and conditions. Users will be notified of any changes, and continued use of the service constitutes acceptance of the updated terms.",
    },
    {
      heading: "11. Indemnity",
      description:
        "1. User Indemnity: The user agrees to indemnify and hold Privily, its affiliates, officers, employees, and agents harmless from any claims, demands, damages, liabilities, costs, and expenses (including legal fees) arising out of or in connection with: a. The user's use of Privily's services. b. Violation of these terms and conditions. c. Violation of any applicable laws or regulations. d. The user's negligence or willful misconduct. 2. Third-Party Claims: Privily shall not be liable for any claims made by third parties arising from the user's use of the work pods or breach of these terms and conditions. 3. Limitation of Liability: The user agrees that Privily's total liability for any claim, whether in contract, tort (including negligence), or otherwise, shall not exceed the total amount paid by the user for the specific work pod booking giving rise to the claim.",
    },
  ];
  const pointRegex = /\d+\.\s+/;
  return (
    <Stack>
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
          Terms and condition
        </Typography>
      </Stack>
      <Stack gap={1} p={"16px"}>
        {lists.map((d) => (
          <Stack gap={1}>
            <Typography fontSize={"20px"} fontWeight={"bold"}>
              {d.heading}
            </Typography>
            <Typography component="ul">
              {d.description
                .split(pointRegex)
                .map((point, index) =>
                  point.trim() ? <li key={index}>{point.trim()}</li> : null
                )}
            </Typography>
          </Stack>
        ))}
        <Stack width={"100px"} height={"6.5vh"}></Stack>
      </Stack>
    </Stack>
  );
};

export default Termsandcondition;

