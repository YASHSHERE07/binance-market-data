import React from "react";
import Toggle from "./Toggle";
import Chart from "./Chart";
import img2 from "../assets/img.png";

function Content({ aboutRef, graphRef }) {
  return (
    <main className="flex-grow container mx-auto p-4 sm:p-6 md:p-12 max-w-7xl">
      <section
        ref={aboutRef}
        className="mb-10 flex flex-col md:flex-row items-center justify-between bg-white p-6 sm:p-8 rounded-lg shadow-md transition-all hover:shadow-xl"
      >
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-800 mb-4">
            About This Project
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 mb-4">
            This application connects to Binance's WebSocket API to display live
            candlestick charts for selected cryptocurrencies. Switch between
            different coins and timeframes to see real-time market data.
          </p>
          <p className="text-base sm:text-lg text-neutral-600">
            Stay informed with real-time updates on market trends, and enhance
            your trading strategy by leveraging the live data from Binance's
            API.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src={img2}
            alt="Crypto Chart Visualization"
            className="max-w-full h-auto rounded-lg shadow-lg transition-transform hover:scale-105"
          />
        </div>
      </section>

      <div
        ref={graphRef}
        className="bg-white p-6 sm:p-8 rounded-lg shadow-md transition-all hover:shadow-xl"
      >
        <Toggle />
        <Chart />
      </div>
    </main>
  );
}

export default Content;
