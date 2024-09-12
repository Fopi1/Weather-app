import { createSlice } from "@reduxjs/toolkit";
import { PanelOpenState } from "@/types/types";

const initialState: PanelOpenState = {
  isPanelOpen: false,
};

const panelToggleSlice = createSlice({
  name: "panel",
  initialState,
  reducers: {
    openPanel: (state) => {
      state.isPanelOpen = true;
    },
    closePanel: (state) => {
      state.isPanelOpen = false;
    },
  },
});

export const { openPanel, closePanel } = panelToggleSlice.actions;
export default panelToggleSlice.reducer;
