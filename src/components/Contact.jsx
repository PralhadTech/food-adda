import React, { useState } from "react";
import photo from "../assets/photo.jpg";

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { message, name, phone, email } = e.target;

    const updatedFormData = {
      message: message.value,
      name: name.value,
      phone: phone.value,
      email: email.value,
    };

    alert("Form submitted successfully!");
    console.log(updatedFormData);

    // Optionally clear the form after submission
    // setContactData({ message: "", phone: "", name: "", email: "" });
  };

  return (
    <div className="container flex flex-col md:flex-row items-center justify-center max-w-4xl p-8 mx-auto mt-10 bg-white shadow-lg rounded-lg border border-gray-300">
      <div className="md:w-1/2 p-4">
        <h1 className="text-3xl font-bold text-gray-700 mb-4">Contact Me!</h1>
        <img
          src={photo}
          alt="contactIMG"
          className="w-full border rounded-lg shadow-md"
        />
      </div>
      <form
        action=""
        onSubmit={handleFormSubmit}
        className="md:w-1/2 w-full mt-8 md:mt-0 p-4 space-y-4"
      >
        <input
          name="email"
          value={contactData.email}
          onChange={handleChange}
          type="email"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="Email..."
          required
        />
        <input
          name="name"
          value={contactData.name}
          onChange={handleChange}
          type="text"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="Full Name..."
          required
        />
        <input
          name="phone"
          type="tel"
          value={contactData.phone}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="Phone Number..."
          required
        />
        <textarea
          value={contactData.message}
          onChange={handleChange}
          name="message"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 h-28"
          placeholder="Enter your message..."
          required
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
