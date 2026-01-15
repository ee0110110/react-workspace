import { createAsyncThunk } from "@reduxjs/toolkit";

const url = "http//localhost:4000/"
export const loginThunk = createAsyncThunk(
    "loginThunk",
    async(user)=>{
        console.log("login thunk user:",user)
        //const res = await fetch(url)
        return user;
    }
)