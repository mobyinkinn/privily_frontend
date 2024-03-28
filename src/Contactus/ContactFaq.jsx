import React from "react";
import Faq from "react-faq-component";
// import "./Faq.css"; // Import a CSS file for custom styling
import ContactCustomFaq from "./ContactCustomFaq";
import { Typography } from "@mui/material";

const data = {
  rows: [
    {
      title: `What are the differences between SmartDesk Core & SmartDesk Pro?`,
      content: `The maximum booking duration is  90 minutes.
      To book an office pod, users must first register and create an account on the Privily app or website. Ensure your contact information is up-to-date for seamless communication.`,
    },
    {
      title: "Can I reschedule delivery date?",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "How can I track my order?",
      content: `Cancellation Time Frame: Cancellations must be made at least 1 hour before the scheduled booking time.  `,
    },
    {
      title: "Why was only part of my order delivered?",
      content: (
        <p>
          Users are expected to treat the pod and its contents with care. Any
          damages or malfunctions should be reported immediately through the
          app.
        </p>
      ),
    },
    {
      title: "How do I assemble my Autonomous SmartDesk?",
      content: `Cancellation Time Frame: Cancellations must be made at least 1 hour before the scheduled booking time.  `,
    },
  ],
};

const config = {
  animate: true,
  tabFocus: true,
};

const ContactFaq = () => {
  return (
    <>
      <Typography
        fontWeight={"bold"}
        color={"black"}
        display={"flex"}
        justifyContent={"Center"}
        fontSize={"40px"}
        p={{ lg: "30px 30px 30px 88px", sm: "30px 30px 30px 66px" }}
      >
        Frequently Asked&nbsp;
        <span
          style={{
            fontWeight: "bold",
            color: "#ED3327",
            fontSize: "40px",
          }}
        >
          Questions
        </span>
      </Typography>
      <ContactCustomFaq data={data} />
    </>
  );
};

export default ContactFaq;
