import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, registerThunk } from "../service/authThunk";
import { createLoadingReducers } from "./commonLoadingHandlers";

const initialState = {isLoggedIn : false, username : null, loading : false, error : null, result : 0};
const savedAuth = sessionStorage.getItem("auth");
const authSlice = createSlice({
    name : "auth",
    initialState : savedAuth ? JSON.parse(savedAuth) : initialState ,
    // 동기 처리(로그아웃)
    reducers : {
        logout: ()=>{
            sessionStorage.clear();
            return initialState;
        },
    },
    // 비동기 처리(로그인)
    extraReducers : (builder) => {
    // 로그인 성공
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.result = action.payload.result;

      if (action.payload.result === 0) {
                state.isLoggedIn = true;
                state.username = action.payload.username;
                sessionStorage.setItem(
                    "auth",
                    JSON.stringify({ // 로그인 성공시 사용자 이름과 로그인 트루 설정
                        isLoggedIn: true,
                        username: action.payload.username }) );
            }
        });
    // 로그인 로딩/에러
    createLoadingReducers(builder, loginThunk);        
    // 회원가입 성공
    builder.addCase(registerThunk.fulfilled, (state, action) => {
            state.loading = false;
            // 회원가입 성공 후 바로 로그인 처리
            //state.isLoggedIn = true;
            //state.username = action.payload.username;
            //sessionStorage.setItem("auth", JSON.stringify(state));
        });
    // 회원가입 로딩/에러
    createLoadingReducers(builder, registerThunk);
    }
});


export const { logout } = authSlice.actions;
export default authSlice.reducer;