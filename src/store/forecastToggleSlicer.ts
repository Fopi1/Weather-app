import { createSlice } from "@reduxjs/toolkit";
import { ForecastRevealState } from "../types/types";

const initialState: ForecastRevealState = {
  isForecastRevealed: false,
};
const forecastToggleSlice = createSlice({
  name: "forecastReveal",
  initialState,
  reducers: {
    revealForecast: (state) => {
      state.isForecastRevealed = true;
    },
    closeForecast: (state) => {
      state.isForecastRevealed = false;
    },
  },
});

export const { revealForecast, closeForecast } = forecastToggleSlice.actions;
export default forecastToggleSlice.reducer;
