import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import SocketAPI from "../api/SocketAPI";

export const userLogin = createAsyncThunk("user/userLogin", (name) => {
  SocketAPI.login({ name });
  return name;
});

const user = createSlice({
  name: "user",
  initialState: {
    name: "",
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.name = action.payload;
    });
  },
});

export const { setNameTest } = user.actions;

export default user.reducer;
