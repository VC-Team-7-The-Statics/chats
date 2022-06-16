import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  image: "",
  chatrooms: [],
};

const chatroomSlice = createSlice({
  name: "chatroom",
  initialState: initialState,
  reducers: {
    setChatroom: (state, { payload: { id, name, image, chatrooms } }) => {
      state.id = id;
      state.name = name;
      state.image = image;
      state.chatrooms = chatrooms;
    },
  },
});

export const selectChatroom = (state) => state.chatroom;

export const { setChatroom } = chatroomSlice.actions;

export default chatroomSlice.reducer;
