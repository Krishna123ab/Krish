import React from "react";
import HelpImage from "../assets/admin-animate.svg"; // update path based on your folder structure
import { NavLink } from "react-router-dom";

export const HelpSupport = () => {
  return (
    <div className="pt-20">

<div className="flex vtb:flex-col mtb:flex-col lD:flex-row bg-white rounded-2xl shadow-lg overflow-hidden p-6 lm:p-0 max-w-7xl mx-auto ">
      {/* Image Section */}
      <div className="w-full flex justify-center items-center mb-6 lD:mb-0">
        <img
          src={HelpImage}
          alt="Help and Support Illustration"
          className="w-[500px]"
        />
      </div>

      {/* Text Section */}
      <div className="w-full text-left px-4">
        <h2 className="text-4xl font-bold mb-4 text-[#2c3e50] bg-gradient-to-r from-[red] to-[black] inline-block text-transparent bg-clip-text">Help & Support</h2>

        <p className="mb-4 text-lg mt-3">
          At <strong className="text-lg">MovaFlix Movies</strong>, we're committed to making your experience as smooth and enjoyable as possible. If you're experiencing issues or have any questions, our support team is here to help!
        </p>

        <ul className="list-disc list-inside space-y-3 text-sm">
          <li className="text-lg">
            <strong>Account Issues:</strong> Reset your password, update profile info, or manage subscriptions easily from your account settings.
          </li>
          <li className="text-lg">
            <strong>Streaming Problems:</strong> Buffering or playback issues? Check your internet connection or try switching devices.
          </li>
          <li className="text-lg">
            <strong>Billing & Payments:</strong> View your transaction history and manage payment methods from your billing dashboard.
          </li>
          <li className="text-lg">
            <strong>Technical Support:</strong> Our team is available 24/7 to assist you with any platform-related concerns.
          </li>
          <li className="text-lg">
            <strong>Contact Us:</strong> Reach out via our <NavLink to="/contact" className="text-blue-600 underline">support form</NavLink> or email <a href="mailto:support@movaflixmovies.com" className="text-blue-600 underline">movaflixmovies@gmail.com</a>.
          </li>
        </ul>

        <p className="mt-4 text-lg mb-8">
          Thank you for choosing MovaFlixMovies — we’re here whenever you need us!
        </p>
      </div>
    </div>

    </div>
  );
};
