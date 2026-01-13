import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./inputSlice";

const store =configureStore({
    reducer : {
        //input={login:{id,pwd}}
        input : inputSlice.reducer
    }
}) //이걸 프로바이더 스토어에서 함 저장해놓고 씀..?
export default store;