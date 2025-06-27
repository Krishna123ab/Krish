// ContactUs.jsx
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import contactImage from "../assets/contact-us-animate.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/toast.css";

const ContactUs = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_j1ntppw",        // ✅ Your service ID
      "template_oo6b7v4",       // ✅ Your template ID
      form.current,
      "jnObydFyhVFI_kAQD"       // ✅ Your public key
    ).then(
      () => {
       toast.success("Message sent successfully", {
  icon: false,
});
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        toast.error("Failed to send message", {
  icon: false,
});
        console.error(error);
      }
    );
  };

  return (
    <div id="Contact" className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col lg:flex-row">
        
        {/* Left Image */}
        <div className="w-full flex items-center justify-center p-6">
          <img src={contactImage} alt="Contact Us" className="w-full max-w-[400px] h-auto" />
        </div>

        {/* Contact Form */}
        <div className="w-full p-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[red] to-[black] inline-block text-transparent bg-clip-text mb-4">
            Contact Us
          </h2>
          <form ref={form} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-2 border rounded-lg"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-black transition-all duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnHover={false}
        hideProgressBar={true} 
        closeButton={false}  
        draggable={false}
        toastClassName={({ type }) =>
          `max-w-[90%] mx-auto text-center font-medium rounded-xl shadow-lg custom-toast ${
            type === "success"
              ? "success-toast"
              : "error-toast"
          }`
        }
        bodyClassName="text-sm"
        progressClassName="bg-white"
      />
    </div>
  );
};

export default ContactUs;
