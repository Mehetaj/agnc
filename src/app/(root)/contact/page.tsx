import Banner from "@/app/Components/Contact/Banner/Banner";
import ContactForm from "@/app/Components/Contact/ContactForm/ContactForm";
import Component from "@/app/Shared/Component/Component";
import React from "react";

const Contact_Us = () => {
  return (
    <div>
      <Component>
        <Banner />
        <ContactForm />
      </Component>
    </div>
  );
};

export default Contact_Us;
