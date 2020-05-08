import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import SocketAPI from "../api/SocketAPI";

export const getUsers = createAsyncThunk("user/getUsers", async () => {
  const res = await SocketAPI.getUsers();
  return res;
});

const platform = createSlice({
  name: "platform",
  initialState: {
    users: [],
    isDuelModalOpen: false,
    duelingUser: "",
    isChatModalOpen: false,
    duelDetails: {
      what: "",
      when: "",
      wager: 0,
    },
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    addUser: (state, action) => {
      const name = action.payload;

      state.users.push(name);
    },
    setDuelModalOpen: (state, action) => {
      state.isDuelModalOpen = action.payload;
    },
    setDuelingUser: (state, action) => {
      state.duelingUser = action.payload;
    },
    setChatModalOpen: (state, action) => {
      state.isChatModalOpen = action.payload;
    },
    setDuelDetails: (state, action) => {
      state.duelDetails = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export const {
  setUsers,
  addUser,
  setDuelModalOpen,
  setDuelingUser,
  setChatModalOpen,
  setDuelDetails,
} = platform.actions;

export default platform.reducer;
