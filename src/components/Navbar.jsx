import { useState } from "react";
import logo from "../assets/appLogo.svg";
import icon from "../assets/veggie menu icon.webp";
import { FaTimes } from "react-icons/fa"; // Close Icon
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <div className="w-full flex items-center justify-between px-16 lm:px-5 tb:px-8 py-3 bg-white/20 backdrop-blur-md border-b-[1.4px] border-zinc-300 fixed z-50">
        {/* Logo & Title */}
        <div className="flex items-center">
         <NavLink to="/" className="flex text-xl items-center"> <img src={logo} className="w-10" alt="Logo" />
      MovaFlix</NavLink>
        </div>

        {/* Desktop Navigation */}
        <div className="flex gap-5 items-center">
          <NavLink to="/contact" className="text-lg cursor-pointer vlm:hidden">Contact Us</NavLink>
          <NavLink to="/download" className="border-[1.5px] border-zinc-300 hover:border-zinc-600 duration-500 p-3 rounded-lg">
            Download App
          </NavLink>
        </div>
      </div>

      {/* Overlay (Darkened Background when Sidebar is Open) */}
      {sidebarOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </>
  );
};
