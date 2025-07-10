import { createSlice } from "@reduxjs/toolkit";

const chatsSlice = createSlice({
  name: "chats",
  initialState: {
    conversations: {}, // { [visitorId]: [message, ...] }
  },
  reducers: {
    sendMessage: {
      reducer(state, action) {
        const { visitorId, id } = action.payload;
        const msgs = state.conversations[visitorId] || [];
        const exists = msgs.some(m => m.id === id);
        if (!exists) {
          state.conversations[visitorId] = [...msgs, action.payload];
        }
      },
      prepare({ visitorId, content }) {
        return {
          payload: {
            visitorId,
            content,
            id: Date.now(),       // unique timestamp-based ID
            sender: "agent",      // mark as sent by agent
          }
        };
      }
    },
    addMessage: (state, action) => {
      // use this for incoming messages (from visitor)
      const { visitorId, id } = action.payload;
      const msgs = state.conversations[visitorId] || [];
      if (!msgs.some(m => m.id === id)) {
        state.conversations[visitorId] = [...msgs, action.payload];
      }
    }
  }
});

export const { sendMessage, addMessage } = chatsSlice.actions;
export default chatsSlice.reducer;
