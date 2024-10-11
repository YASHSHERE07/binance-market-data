# Crypto Market Viewer

A real-time cryptocurrency charting application built with React, Redux Toolkit, and Lightweight Charts. Connects to Binance's WebSocket API to display live candlestick charts for selected cryptocurrencies.

## Features

- **Real-Time Charts**: Live candlestick charts for ETH/USDT, BNB/USDT, and DOT/USDT.
- **Multiple Intervals**: Choose from 1-minute, 3-minute, or 5-minute intervals.
- **Data Persistence**: Candlestick data is persisted using `localStorage`.
- **Responsive Design**: Optimized for mobile, tablet, and desktop using Tailwind CSS.

## Getting Started

### Prerequisites

- **Node.js** (version 14 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/YASHSHERE07/binance-market-data.git
   cd binance-market-data

2. **Install dependencies**

   ```bash
   npm install

3. **Start the development server:**

   ```bash
   npm run dev

4.**Open the application in your browser: Visit http://localhost:3000.**

## Usage

- **Select Cryptocurrency**: Use the dropdown to choose ETH/USDT, BNB/USDT, or DOT/USDT.
- **Select Time Interval**: Choose 1m, 3m, or 5m intervals.
- **View Charts**: Observe real-time candlestick charts updating live.
- **Data Persistence**: Switch between coins and intervals; previously received data is retained.

## Technologies Used

- **React**
- **Redux Toolkit**
- **Tailwind CSS**
- **Lightweight Charts**
- **Binance WebSocket API**
- **Vite**

## License

This project is licensed under the [MIT License](LICENSE).


