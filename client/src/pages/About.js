import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to ZenithZone, your one-stop shop for  "the latest in tech gadgets, fashion, and home essentials". Founded in 2020, we are committed to providing high-quality products at unbeatable prices. Our mission is to deliver an exceptional shopping experience with a focus on customer satisfaction, fast shipping, and hassle-free returns. We source our products from trusted suppliers to ensure reliability and value. Join our community of happy customers and discover the difference with ZenithZone. Thank you for choosing us as your preferred shopping destination. Happy shopping!


          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
