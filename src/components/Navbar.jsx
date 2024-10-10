import React from "react";

function Navbar({ scrollToAbout, scrollToGraph }) {
  return (
    <nav className="bg-white mt-5 bg-opacity-80 text-gray-800 shadow-md sticky top-0 z-50 mx-4 md:mx-32 rounded-2xl py-2">
      <div className="container mx-auto px-4 max-w-7xl flex justify-between items-center">
        <div className="py-3">
          <a href="#" className="text-lg md:text-xl font-bold">
            Crypto Market Viewer
          </a>
        </div>
        <div className="flex space-x-4 py-3">
          <button
            onClick={scrollToAbout}
            className="text-gray-800 hover:text-blue-600 focus:outline-none"
          >
            About
          </button>
          <button
            onClick={scrollToGraph}
            className="text-gray-800 hover:text-blue-600 focus:outline-none"
          >
            Charts
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
