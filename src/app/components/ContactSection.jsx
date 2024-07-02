"use client";
import React, { useState } from "react";

const ContactSection = () => {
  const initialState = {
    name: "",
    message: "",
    email: ""
  };

  const [formDetails, setFormDetails] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // State for showing popup

  const onValueChange = (fieldName, value) => {
    setFormDetails(prevDetails => ({ ...prevDetails, [fieldName]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const name in formDetails) {
        formData.append(name, formDetails[name]);
    }
    try {
        const response = await fetch("https://devform.vercel.app/api/submit/29", {
            method: "POST",
            body: formData,
        });
        if (response.ok) {
            setFormDetails(initialState);
            setSubmitted(true);
            setShowPopup(true); // Show popup on successful submission
            console.log("Form submitted successfully:", formDetails);
        } else {
            console.error('Failed to submit form:', response.statusText);
        }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  // Function to close popup
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <section id="contact" className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="md:col-span-1">
        {/* Content on the left */}
        <div className="p-6 bg-[#181818] rounded-lg shadow-lg mt-8">
          <h1 className="text-4xl text-left font-bold my-6 text-white">Contact Me</h1>
          <p className="text-white mb-6">
            Interested in working together? Contact me at{" "}
            <a href="mailto:brandonphan12@hotmail.com" className="text-blue-400 hover:underline">brandonphan12@hotmail.com</a>
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-white mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-700 bg-white rounded-md text-black"
                placeholder="Your Name"
                value={formDetails.name}
                onChange={(e) => onValueChange("name", e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-white mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-700 bg-white rounded-md text-black"
                placeholder="Your Email"
                value={formDetails.email}
                onChange={(e) => onValueChange("email", e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-white mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                className="w-full px-3 py-2 border border-gray-700 bg-white rounded-md text-black"
                placeholder="Your Message"
                rows="4"
                value={formDetails.message}
                onChange={(e) => onValueChange("message", e.target.value)}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md"
            >
              Send Message
            </button>
          </form>
          {showPopup && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-xl text-green-500">Your message has been sent!</p>
                <button
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                  onClick={handleClosePopup}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="md:col-span-1">
        {/* Contact card on the right */}
        <section className="grid md:grid-cols-2 my-12 md:my-16 py-24 gap-4 relative">
          <div className="z-10">
            <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
              I&apos;m currently seeking new job opportunities, my inbox is always open.
              I&apos;ll try my best to get back to you immediately!
            </p>
            <div className="socials flex flex-row gap-2">
              <a href="https://github.com/B-Phan/" target="_blank" className="hover:text-white">
                <img src="/github-mark.svg" alt="Github Mark" className="h-12 w-12" />
              </a>
              <a href="https://www.linkedin.com/in/br-phan/" target="_blank" className="hover:text-white">
                <img src="/linkedin-mark.svg" alt="LinkedIn Icon" className="h-12 w-12" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ContactSection;
