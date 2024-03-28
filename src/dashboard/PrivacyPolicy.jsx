import { Stack, Typography } from '@mui/material'
import React from 'react'
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
   const navigate = useNavigate();
   const handleBackHome = () => {
     navigate(-1);
   };
   const lists = [
     {
       heading: "1. Introduction",
       description:
         "1. Privily is committed to protecting the privacy and security of your personal information. This Privacy and Data Protection Policy outlines how we collect, use, disclose, and safeguard your information when you use our Privacy Work Pod services.",
     },
     {
       heading: "2. Information We Collect",
       description:
         "1. Personal Information: We may collect personal information, including but not limited to names, contact details, and payment information, when you use our platform to book work pods. 2. Booking Information: We collect data related to your work pod bookings, including dates, times, and preferences. 3. Usage Data: We may collect information about your use of Privily's services, including session times and duration.",
     },
     {
       heading: "3. How We Use Your Information",
       description:
         "1. Service Provision: We use your information to provide and improve our Privacy Work Pod services, including booking confirmations, access management, and customer support. 2. Communication: We may use your contact information to communicate with you about your bookings, service updates, and promotional offers. 3. Analytics: We use aggregated and anonymized data for analytical purposes to enhance our services and user experience.",
     },
     {
       heading: "4. Data Security",
       description:
         "1. Personal Information: We may collect personal information, including but not limited to names, contact details, and payment information, when you use our platform to book work pods. 2. Booking Information: We collect data related to your work pod bookings, including dates, times, and preferences. 3. Usage Data: We may collect information about your use of Privily's services, including session times and duration.",
     },
     {
       heading: "5. Data Retention",
       description:
         "1. Retention Period: We retain personal information for as long as necessary for the purposes outlined in this policy, unless a longer retention period is required or permitted by law. 2. User Control: Users can request deletion of their personal information, subject to legal obligations.",
     },
     {
       heading: "6. Third-Party Disclosures",
       description:
         "1. Service Providers: We may share your information with third-party service providers who assist us in delivering our services. 2. Legal Compliance: We may disclose information to comply with legal obligations or respond to lawful requests.",
     },
     {
       heading: "7. Your Rights",
       description:
         "1. Access and Correction: You have the right to access and correct your personal information. 2. Withdrawal of Consent: You can withdraw consent for processing personal information at any time.",
     },
     {
       heading: "8. Changes to the Policy",
       description:
         "1. Notification: Users will be notified of any material changes to this Privacy and Data Protection Policy. 2. Acceptance: Continued use of our services after policy changes constitutes acceptance.",
     },
     {
       heading: "9. Contact Information",
       description:
         "For any questions, concerns, or requests regarding your privacy, please contact us at contact@privily.co.za",
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
          Privacy Policy
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
}

export default PrivacyPolicy