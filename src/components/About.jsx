import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="bg-white shadow-md rounded-lg p-8 lg:w-3/4 mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
            About Us
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed text-center mb-8">
            We are passionate about providing the best quality service to our
            customers. Our team works tirelessly to ensure that you have a
            seamless experience, whether you're browsing through our offerings
            or interacting with our support team. At the heart of everything we
            do is our commitment to excellence and customer satisfaction.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed text-center">
            Our mission is to deliver exceptional value and reliability. With
            years of experience in the industry, we have built a reputation for
            being a trusted provider. We take pride in our work and constantly
            strive to innovate and improve in all aspects of our business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
