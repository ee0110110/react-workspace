import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
  name: "input",
  initialState: {
    username: "",
    password: ""
  },
  reducers: {
    changeInput: (state, action) => {
      state[action.payload.name] = action.payload.value;
    }
  }
});

export const { changeInput } = inputSlice.actions;
export default inputSlice.reducer;