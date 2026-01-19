import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "./inputSlice";
import authReducer from "./authSlice";
import memberDataReducer from "./memberDataSlice";

export const store = configureStore({
  reducer: {
    input: inputReducer, auth: authReducer, memberData: memberDataReducer
  }
});