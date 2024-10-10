import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto px-4 text-center max-w-7xl">
        <p>
          © {new Date().getFullYear()} Crypto Market Viewer. All rights
          reserved.
        </p>
        <p>
          Data provided by{" "}
          <a
            href="https://www.binance.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            Binance
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
