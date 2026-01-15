import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./inputSlice";
import memberDataSlice from "./memberDataSlice";

const store = configureStore({
    reducer : {
        //state.input = {login:{id, pwd}}
        input : inputSlice.reducer,
        //state.memberData : {data : null}
        memberData : memberDataSlice.reducer
    }
}) //이걸 프로바이더 스토어에서 함 저장해놓고 씀..?
export default store;