import { createAsyncThunk } from "@reduxjs/toolkit";

let data_set = [
{username:"aaa",password :"aaa", role : "USER"},
{username:"bbb",password :"bbb", role : "USER"},
{username:"ccc",password :"ccc", role : "USER"},
]
//로그인
export const loginThunk = createAsyncThunk(
    "loginThunk",
    async ( user ) => {
        const data = data_set.filter(data => data.username === user.username )[0]
        let result = 1;
        if( data?.password === user.password )
        result = 0;
        return {result, username:user.username}; //성공 0, 실패 1
}
);
// 회원가입(퀴즈4)
export const registerThunk = createAsyncThunk(
    "auth/register",
    async (user) => {
        data_set.push(user); // 실제 서버 대신 배열에 추가
        return user; // {username, password, role}
    }
);
// 회원 목록 조회(퀴즈5)
export const memberListThunk = createAsyncThunk(
  "memberData/list",
  async () => {
    return data_set;
  }
);
  
// 로그인 체크용 - 안되어있으면 로그인 페이지로(퀴즈6)
export const checkAuthThunk = createAsyncThunk(
  "auth/check",
  async (_, thunkAPI) => {
    const token = localStorage.getItem("token"); // 로그인 여부 체크
    if (!token) return thunkAPI.rejectWithValue("로그인 필요");
    return true;
  }
);
// 회원 상세 조회(퀴즈6)
export const memberDetailThunk = createAsyncThunk(
  "member/fetchDetail",
  async (id) => {
    const member = data_set.find(data => data.id === parseInt(id));
    if(member) {
      return member;
    } else {
      throw new Error("회원을 찾을 수 없습니다.");
    }
  }
);

// 삭제(퀴즈7)
export const deleteMember = createAsyncThunk(
  "member/delete",
  async (id) => {
    data_set = data_set.filter(data => data.id !== parseInt(id));
    return id;
  }
);

// 수정(퀴즈8)
export const updateMember = createAsyncThunk(
  "member/update",
  async (member) => {
    const index = data_set.findIndex(data => data.id === member.id);
    if(index !== -1) {
      data_set[index] = member;
    }
    return member;
  }
);