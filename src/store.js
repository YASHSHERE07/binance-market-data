import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from "./slices/cryptoSlice";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cryptoState");
    if (serializedState === null) {
      return undefined;
    }
    return { crypto: JSON.parse(serializedState) };
  } catch (err) {
    console.error("Failed to load state from localStorage:", err);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.crypto);
    localStorage.setItem("cryptoState", serializedState);
  } catch (err) {
    console.error("Failed to save state to localStorage:", err);
  }
};

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});
