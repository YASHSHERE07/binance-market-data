import React, { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";
import { useSelector, useDispatch } from "react-redux";
import { updateData, setData } from "../slices/cryptoSlice";

function Chart() {
  const chartContainerRef = useRef();
  const chartRef = useRef();
  const candleSeriesRef = useRef();

  const dispatch = useDispatch();
  const { selectedCoin, interval, data } = useSelector((state) => state.crypto);
  const key = `${selectedCoin}_${interval}`;
  const chartData = data[key] || [];

  useEffect(() => {
    // Initialize the chart
    if (chartContainerRef.current) {
      chartRef.current = createChart(chartContainerRef.current, {
        width: chartContainerRef.current.clientWidth,
        height: chartContainerRef.current.clientHeight,
        layout: {
          backgroundColor: "transparent",
          textColor: "#000",
        },
        grid: {
          vertLines: {
            color: "#eee",
          },
          horzLines: {
            color: "#eee",
          },
        },
        crosshair: {
          mode: 0,
        },
        priceScale: {
          borderColor: "#ccc",
        },
        timeScale: {
          borderColor: "#ccc",
          timeVisible: true,
          secondsVisible: false,
        },
      });
      candleSeriesRef.current = chartRef.current.addCandlestickSeries();
    }

    // window resize
    const handleResize = () => {
      if (chartContainerRef.current && chartRef.current) {
        chartRef.current.applyOptions({
          width: chartContainerRef.current.clientWidth,
          height: chartContainerRef.current.clientHeight,
        });
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (chartRef.current) {
        chartRef.current.remove();
      }
    };
  }, []);

  useEffect(() => {
    // chart interval changes
    if (candleSeriesRef.current) {
      candleSeriesRef.current.setData(chartData);
    }
  }, [chartData]);

  useEffect(() => {
    // Fetch data 
    if (chartData.length === 0) {
      const fetchHistoricalData = async () => {
        try {
          const response = await fetch(
            `https://api.binance.com/api/v3/klines?symbol=${selectedCoin}&interval=${interval}&limit=500`
          );
          const klines = await response.json();

          const historicalData = klines.map((k) => ({
            time: k[0] / 1000,
            open: parseFloat(k[1]),
            high: parseFloat(k[2]),
            low: parseFloat(k[3]),
            close: parseFloat(k[4]),
          }));

          dispatch(
            setData({ coin: selectedCoin, interval, data: historicalData })
          );

          if (candleSeriesRef.current) {
            candleSeriesRef.current.setData(historicalData);
          }
        } catch (error) {
          console.error("Failed to fetch historical data:", error);
        }
      };

      fetchHistoricalData();
    } else {
      if (candleSeriesRef.current) {
        candleSeriesRef.current.setData(chartData);
      }
    }
  }, [selectedCoin, interval, chartData.length, dispatch]);

  // updates WebSocket
  useEffect(() => {
    const ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${selectedCoin.toLowerCase()}@kline_${interval}`
    );

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      const k = message.k;

      const kline = {
        time: k.t / 1000,
        open: parseFloat(k.o),
        high: parseFloat(k.h),
        low: parseFloat(k.l),
        close: parseFloat(k.c),
      };

      if (candleSeriesRef.current) {
        candleSeriesRef.current.update(kline);
      }

      dispatch(updateData({ coin: selectedCoin, interval, kline }));
    };

    return () => {
      ws.close();
    };
  }, [selectedCoin, interval, dispatch]);

  return (
    <div className="flex justify-center">
      <div
        ref={chartContainerRef}
        className="w-full max-w-6xl h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem] bg-gray-50"
      />
    </div>
  );
}

export default Chart;
