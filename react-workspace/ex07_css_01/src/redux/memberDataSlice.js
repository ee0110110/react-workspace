import { createSlice } from "@reduxjs/toolkit";
import { memberDetailThunk, memberListThunk } from "../service/authThunk";
import { createLoadingReducers } from "./commonLoadingHandlers";

const initialState = {
  list: [],
  detail: null, //상세 정보 저장
  loading: false,
  error: null,
};

const memberDataSlice = createSlice({
  name: "memberData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // 목록 성공
    builder.addCase(memberListThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload;
    });
    // 목록 상세로 가기
    builder.addCase(memberDetailThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.detail = action.payload;
    });
    // 공통 로딩/에러
    createLoadingReducers(builder, memberListThunk);
    createLoadingReducers(builder, memberDetailThunk);  // 상세 조회용도 추가
  },
});

export default memberDataSlice.reducer;