import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  login: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },

    setLogin(state, action) {
      state.login = action.payload;
    },

    logout(state, action) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, logout, setLogin } = userSlice.actions;

export default userSlice.reducer;
