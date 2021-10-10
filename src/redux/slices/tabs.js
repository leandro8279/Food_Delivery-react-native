import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedTab: "",
};

const tabsSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    setSelectedTab: (state, action) => {
      state.selectedTab = action.payload;
    },
  },
});

export const { setSelectedTab } = tabsSlice.actions;
export const tabSelector = (state) => state.tabs;

const tabReducer = tabsSlice.reducer;
export default tabReducer;
