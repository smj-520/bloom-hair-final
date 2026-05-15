import { createSlice } from "@reduxjs/toolkit";

const getUserFromStorage = () => {
  if (typeof localStorage !== "undefined") {
    return JSON.parse(localStorage.getItem("user")) || null;
  }

  return null;
};

const saveUserToStorage = (user) => {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("user", JSON.stringify(user));
  }
};

const removeUserFromStorage = () => {
  if (typeof localStorage !== "undefined") {
    localStorage.removeItem("user");
  }
};

const initialState = {
  user: getUserFromStorage(),
  isLoggedIn: getUserFromStorage() ? true : false,
};

const userSlice = createSlice({
  name: "user",

  initialState,

  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;

      saveUserToStorage(action.payload);
    },

    logoutUser: (state) => {
      state.user = null;
      state.isLoggedIn = false;

      removeUserFromStorage();
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;