import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  image: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, { payload: { id, name, image } }) => {
      state.id = id;
      state.name = name;
      state.image = image;
    },
  },
});

export const selectUser = (state) => state.user;

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
