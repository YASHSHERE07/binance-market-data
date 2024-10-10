import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCoin: "ETHUSDT",
  interval: "1m",
  data: {},
};

export const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    setSelectedCoin: (state, action) => {
      state.selectedCoin = action.payload;
    },
    setInterval: (state, action) => {
      state.interval = action.payload;
    },
    updateData: (state, action) => {
      const { coin, interval, kline } = action.payload;
      const key = `${coin}_${interval}`;
      if (!state.data[key]) {
        state.data[key] = [];
      }

      const lastKline = state.data[key][state.data[key].length - 1];
      if (lastKline && lastKline.time === kline.time) {
        state.data[key][state.data[key].length - 1] = kline;
      } else {
        state.data[key].push(kline);
      }
    },
    setData: (state, action) => {
      const { coin, interval, data } = action.payload;
      const key = `${coin}_${interval}`;
      state.data[key] = data;
    },
  },
});

export const { setSelectedCoin, setInterval, updateData, setData } =
  cryptoSlice.actions;
export default cryptoSlice.reducer;
