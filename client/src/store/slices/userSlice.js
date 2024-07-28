import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: "user-data",
  initialState,
  reducers: {
    handleSignin: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { handleSignin } = userSlice.actions;
export default userSlice.reducer;
