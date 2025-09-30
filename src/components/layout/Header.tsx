import React, { useState } from "react";
import Button from "../common/Button";
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between p-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="src/assets/icons/logoipsum-398.svg"
            alt="logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#home" className="hover:text-blue-500">Home</a>
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#services" className="hover:text-blue-500">Services</a>
          <a href="#portfolio" className="hover:text-blue-500">Portfolio</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button text="Contact Us" />
        </div>

        {/* Hamburger - Mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(true)}
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Side Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col space-y-6 p-4">
          <a href="#home" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>About</a>
          <a href="#services" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#portfolio" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Portfolio</a>
          <a href="#contact" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Contact</a>
          <Button text="Contact Us" />
        </nav>
      </div>
    </header>
  );
}

export default Header;
