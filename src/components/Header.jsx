import React from "react";

function Header() {
  return (
    <div className="mx-auto my-10 mb-10 max-w-7xl flex flex-col items-center justify-center text-center h-screen bg-[#19191B] shadow-2xl shadow-black rounded-2xl p-6 sm:p-8">
      <h1 className="text-5xl sm:text-7xl md:text-9xl font-extrabold text-white mb-4">
        Crypto Market Viewer
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
        Real-Time Data, Real-Time Decisions
      </p>
    </div>
  );
}

export default Header;
