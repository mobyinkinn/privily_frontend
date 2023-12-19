
import { Stack } from "@mui/material";
import React from "react";
import Faq from "react-faq-component";
import "./Faq.css"; // Import a CSS file for custom styling
import CustomFaq from "./Faqss";

const data = {
  rows: [
    {
      
      title: `Booking Requirements`,
      content: `The maximum booking duration is  90 minutes.
      To book an office pod, users must first register and create an account on the Privily app or website. Ensure your contact information is up-to-date for seamless communication.`,
    },
    {
      title: "Availability",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "Cancellation Policy",
      content: `Cancellation Time Frame: Cancellations must be made at least 1 hour before the scheduled booking time.  `,
    },
    {
      title: "Safety & property",
      content: (
        <p>
          Users are expected to treat the pod and its contents with care. Any
          damages or malfunctions should be reported immediately through the
          app.
        </p>
      ),
    },
  ],
};

const config = {
  animate: true,
  tabFocus: true,
};

const Faqs = () => {
  return <CustomFaq data={data} />;
};

export default Faqs;
