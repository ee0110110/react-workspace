import { createAsyncThunk } from "@reduxjs/toolkit"

const url="http//localhost:4000/"
export const memberThunk = createAsyncThunk(
    "memThunk", //이름 설정 
    async( user ) =>{
        //method : get => 데이터를 보내는 경우 또는 데이터를 저장
        //post 방식은 대용량의 데이터 처리 가능
        //모든 데이터 또는 검색 특정 데이터를 받아오는 경우 사용
        //user : {id:"", pwd:""} => js objects 타입
        const res = await fetch( url, {
            method : "get",
            headers : {"Content Type": "application/json"}, //데이터 처리 방식 지정
            body : JSON.stringify(user) // header에 지정된 방식으로 데이터를 포장해서 보냄
        } );
        //console.log("thunk 실행")
        //throw new Error("서버 에러 발생")
        return await res.json();
    }
)