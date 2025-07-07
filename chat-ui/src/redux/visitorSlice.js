import { createSlice } from "@reduxjs/toolkit";

const visitorsSlice = createSlice({
  name: "visitors",
  initialState: {
    list: [],
    selectedVisitorId: null,
    loading: false,
    error: null,
  },
  reducers: {
    setVisitors(state, action) {
      state.list = action.payload;
    },
    addVisitor: (state, action) => {
      const exists = state.list.find((v) => v.id === action.payload.id);
      if (!exists) {
        state.list.push(action.payload);
      }
    },
    selectVisitor(state, action) {
      state.selectedVisitorId = action.payload;
    },
  },
});

export const { setVisitors, addVisitor, selectVisitor } = visitorsSlice.actions;
export default visitorsSlice.reducer;
