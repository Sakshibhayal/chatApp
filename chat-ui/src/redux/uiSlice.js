import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    unreadMessages: {},
  },
  reducers: {
    incrementUnread(state, action) {
      const visitorId = action.payload;
      state.unreadMessages[visitorId] = (state.unreadMessages[visitorId] || 0) + 1;
    },
    clearUnread(state, action) {
      const visitorId = action.payload;
      delete state.unreadMessages[visitorId];
    },
  },
});

export const { incrementUnread, clearUnread } = uiSlice.actions;
export default uiSlice.reducer;
