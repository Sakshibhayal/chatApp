import { createSlice } from "@reduxjs/toolkit";

const chatsSlice = createSlice({
  name: "chats",
  initialState: {
    conversations: {},
  },
  reducers: {
    addMessage: (state, action) => {
      const { visitorId } = action.payload;
      const messages = state.conversations[visitorId] || [];

      const alreadyExists = messages.some(
        (msg) => msg.id === action.payload.id
      );
      if (!alreadyExists) {
        if (!state.conversations[visitorId]) {
          state.conversations[visitorId] = [];
        }
        state.conversations[visitorId].push(action.payload);
      }
    },
  },
});

export const { addMessage } = chatsSlice.actions;
export default chatsSlice.reducer;
