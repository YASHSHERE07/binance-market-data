// src/components/Toggle.jsx

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedCoin, setInterval } from "../slices/cryptoSlice";

function Toggle() {
  const dispatch = useDispatch();
  const { selectedCoin, interval } = useSelector((state) => state.crypto);

  const coins = ["ETHUSDT", "BNBUSDT", "DOTUSDT"];
  const intervals = ["1m", "3m", "5m"];

  return (
    <div>
      <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
        Charts
      </h1>
      <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-4 mb-4">
        {/* Coin Selection */}
        <div className="mb-2 sm:mb-0">
          <label htmlFor="coin-select" className="sr-only">
            Select Cryptocurrency
          </label>
          <select
            id="coin-select"
            value={selectedCoin}
            onChange={(e) => dispatch(setSelectedCoin(e.target.value))}
            className="border border-blue-500 bg-blue-50 text-blue-800 p-2 sm:px-6 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-800 hover:text-white"
          >
            {coins.map((coin) => (
              <option key={coin} value={coin}>
                {coin.replace("USDT", "/USDT")}
              </option>
            ))}
          </select>
        </div>

        {/* Interval Selection */}
        <div>
          <label htmlFor="interval-select" className="sr-only">
            Select Time Interval
          </label>
          <select
            id="interval-select"
            value={interval}
            onChange={(e) => dispatch(setInterval(e.target.value))}
            className="border border-blue-500 bg-blue-50 text-blue-800 p-2 sm:px-6 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-800 hover:text-white"
          >
            {intervals.map((intvl) => (
              <option key={intvl} value={intvl}>
                {intvl}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Toggle;
