import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import panelToggleReducer from "./panelToggleSlicer";
import forecastToggleReducer from "./forecastToggleSlicer";

export const store = configureStore({
  reducer: {
    panelToggle: panelToggleReducer,
    forecastToggle: forecastToggleReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
