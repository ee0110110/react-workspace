import ReduxCom from "./ReduxCom"
import { configureStore, createSlice } from "@reduxjs/toolkit"
import {useDispatch, useSelector} from "react-redux"
//createSlice : state 정의 및 switch의 case "up" 설정
const counterSlice = createSlice({
    name : "counter", //고유 식별하기 위한 값
    initialState : {value:100},
    reducers : { //기능 정의 영역
        up : (state, action) =>{
            console.log("up state : ", {...state})
            console.log("up action : ", action)
            state.value = state.value + action.data ;
            //return { value: 100} 리덕스 하면 깊은 복사 할 필요가 없음
        },
        down : (state, action) =>{
            console.log("down state : ", {...state})
            console.log("down action : ", action)
            state.value = state.value + action.payload ; //payload > 1을 감소 시켜서 다시 넣어주겠다
        }
    }
});
export const store = configureStore({ // state 저장소
    reducer : { //state와 저장소 설정, cnt는 저장소 이름 같이 명시하는 것, counterSlice과 연결 결과적으로 {value:100},
        cnt : counterSlice.reducer    
    }
})
const ReduxCon =()=>{
    //기능을 호출할때 사용
    const dispatch = useDispatch();
    const upClick = () =>{
        dispatch( {type:"counter/up", data : 2 } ) //어떤함수를 호출할거냐 적음 "이름/기능"
    }
    const downClick = () =>{
        dispatch(counterSlice.actions.down(-1) )
    }
    //저장소에 저장된 데이터를 가져오는 역할
    const value = useSelector( state => { //유즈셀렉터로 저장소 값을 꺼내옴 / state는 자기 자신값
        console.log("state : ", state);
        return state.cnt.value;
    })
    return(<>
        <ReduxCom upClick={upClick} downClick={downClick} value={value} />
    </>)
}
export default ReduxCon;