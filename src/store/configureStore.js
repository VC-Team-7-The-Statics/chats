import { configureStore } from "@reduxjs/toolkit";

import chatroomSlice from "../features/chatroom/chatroomSlice";

const store = configureStore({
  reducer: {
    chatroom: chatroomSlice,
  },
});

export default store;
