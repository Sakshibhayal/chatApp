import {configureStore} from '@reduxjs/toolkit';
import visitorsReducer from '../redux/visitorSlice';
import chatsReducer from '../redux/chatsSlice';
import messagesReducer from '../redux/uiSlice';

const store = configureStore({
  reducer: {
    visitors: visitorsReducer,
    chats: chatsReducer,
    ui: messagesReducer,
  },
});

export default store;