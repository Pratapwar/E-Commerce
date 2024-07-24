import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>
            Welcome to ZenithZone. We are committed to protecting your privacy and ensuring your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and protect your information when you visit our e-commerce website.
          </p>
          <h3>1. Information We Collect</h3>
          <h4>1.1 Personal Information</h4>
          <p>
            We may collect personal information that you provide directly to us when you:
            <ul>
              <li>Register for an account</li>
              <li>Place an order</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact our customer service team</li>
              <li>Participate in promotions or surveys</li>
            </ul>
            This information may include your name, email address, phone number, shipping and billing addresses, payment information, and any other details you provide.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
