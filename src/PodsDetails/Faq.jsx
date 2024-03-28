
import React from "react";
import Faq from "react-faq-component";
import "./Faq.css"; // Import a CSS file for custom styling
import CustomFaq from "./Faqss";

const data = {
  rows: [
    {
      title: `Booking Requirements`,
      content: `For your own convenience and autonomy make your bookings early using the Privily App. The maximum booking duration is 90 minutes. To book an office pod, users must first register and create an account on the Privily app or website. Ensure your contact information is up-to-date for seamless communication.`,
    },
    {
      title: "Availability",
      content:
        "Upon successful booking users are sent a confirmation email with the booked time slot and Pod. This is to ensure that your booking remains yours without dispute. Feel free to share your booking confirmation with a fellow privily pod user to resolve any issues. If you do not resolve the issue you may contact our Operations team via Whatsapp +27 83 212 8647.",
    },
    {
      title: "Cancellation Policy",
      content: `If you should decide to cancel your booking, you may use the Privily App to do the cancellation. Cancellations will be accepted at least 1 hour before the scheduled time. `,
    },
    {
      title: "Safety & property",
      content: (
        <p>
          Privily and our community of users display respect for each other’s
          privacy. We are a community of change-makers who respect each other’s
          craft. The Privily pod is a place of world-class work that is readily
          available for us. We know that awesome work needs great focus and
          order. It also needs other people to have great focus and order. So we
          leave the pods as well as we find them.
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
