import React from "react";
import aboutUsImage from "../assets/about-us-page-animate.svg";

export const About = () => {
  return (
    <div id="About" className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-2xl overflow-hidden flex mtb:flex-col vtb:flex-col tb:flex-col lD:flex-row">
        
        {/* Left Side - Image */}
        <div className="w-full flex items-center justify-center p-6 pt-20">
          <img
            src={aboutUsImage}
            alt="About Us Illustration"
            className="w-full max-w-[400px] h-auto"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full p-6 flex flex-col justify-center text-lg text-gray-800 space-y-4">
          <h1 className="text-2xl laptop:text-4xl font-bold bg-gradient-to-r from-[red] to-[black] inline-block text-transparent bg-clip-text">
            Welcome to MovaFlix Movies
          </h1>
          <p>
            Your ultimate destination for endless entertainment! At MovaFlix, we are passionate about bringing the best of cinema, TV shows, and original content directly to your screens. Whether you’re a fan of thrilling blockbusters, heartfelt dramas, or binge-worthy series, we’ve got something for everyone.
          </p>
          <p>
            Our mission is to redefine how you experience entertainment by offering a platform that combines variety, quality, and convenience. With a curated library of titles spanning multiple genres, MovaFlix Movies is committed to delivering unparalleled viewing experiences for audiences worldwide.
          </p>
          <p>
            Have questions or need support? We’d love to hear from you! Contact us at <a href="mailto:movaflixmovies@gmail.com" className="text-blue-500 underline">movaflixmovies@gmail.com</a> for inquiries, feedback, or assistance.
          </p>
          <p className="font-semibold">
            Let MovaFlix Movies be your guide to unforgettable entertainment. Sit back, relax, and enjoy the show!
          </p>
        </div>
      </div>
    </div>
  );
};
