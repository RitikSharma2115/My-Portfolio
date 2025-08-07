import React, { useState, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import theme_pattern from "../assets/theme_pattern.svg";
import mail_icon from "../assets/mail_icon.svg";
import call_icon from "../assets/call_icon.svg";
import location_icon from "../assets/location_icon.svg";

const Contacts = () => {
  const [status, setStatus] = useState("Submit Now");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;


  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  const validateForm = () => {
    const newErrors = {};

    if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error when typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors before submitting.");
      return;
    }

    setStatus("Sending...");

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);

    try {
      const res = await fetch( formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        setFormData({ name: "", email: "", message: "" });
        setStatus("Message Sent!");
        toast("Message sent successfully! ✅");
      } else {
        setStatus("Failed! Try again.");
        toast.error("Submission failed ❌. Try again.");
      }
    } catch (error) {
      setStatus("Failed! Try again.");
      toast.error("Something went wrong 😓.");
    } finally {
      setTimeout(() => setStatus("Submit Now"), 3000);
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="contacts"
      className="flex flex-col items-center justify-center px-4 pt-24 md:px-10 py-10 md:py-20"
    >
      <ToastContainer position="top-right" autoClose={2500} />

      {/* Header */}
      <div className="relative mb-12 text-center">
        <h1 className="text-3xl md:text-6xl font-bold relative z-10">
          Get In Touch
        </h1>
        <img
          src={theme_pattern}
          alt="Pattern"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-48 md:w-72 opacity-30 z-0"
        />
      </div>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row gap-12 w-full max-w-6xl">
        {/* Left Side - Contact Info */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-2xl font-semibold">Let's Talk</h2>
          <p className="leading-relaxed">
            I'm currently available to take on new projects. Feel free to send
            me a message about anything you'd like me to work on. You can
            contact me anytime!
          </p>

          <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-center gap-4">
              <img src={mail_icon} alt="Mail" className="w-6 h-6" />
              <p>rithiksharma1521@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <img src={call_icon} alt="Call" className="w-6 h-6" />
              <p>+91 9996327053</p>
            </div>
            <div className="flex items-center gap-4">
              <img src={location_icon} alt="Location" className="w-6 h-6" />
              <p>Gurugram, Haryana (India)</p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex-1 p-6 md:p-8 rounded-lg shadow-md space-y-4"
        >
          {/* Name Field */}
          <div>
            <label className="block font-medium mb-1">Your Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Your Name"
              className="w-full p-3 bg-[#32323c] text-[#A0A0A0] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block font-medium mb-1">Your Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              className="w-full p-3 bg-[#32323c] text-[#A0A0A0] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label className="block font-medium mb-1">
              Write Your Message Here:
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              placeholder="Enter Your Message"
              className="w-full p-3 bg-[#32323c] text-[#A0A0A0] rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-700 transition-all hover:scale-105 duration-300"
          >
            {status}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
