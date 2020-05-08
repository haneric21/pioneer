import { configureStore } from "@reduxjs/toolkit";
import user from "./userSlice";
import platform from "./platformSlice";

const store = configureStore({
  reducer: {
    user,
    platform,
  },
});

export default store;
