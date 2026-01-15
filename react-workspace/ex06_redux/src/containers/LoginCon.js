import { useDispatch, useSelector } from "react-redux";
import LoginCom from "../components/LoginCom";
import inputSlice from "../redux/inputSlice";
import { loginThunk } from "../service/authThunk";
import {useNavigate} from "react-router-dom"
const LoginCon = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //저장소에 저장되어 있는 state를 꺼내는 역할
    //변수.id, 변수.pwd로 쓰거나 밑에는 직접적으로 꺼내옴
    //const 변수 = useSelector( state => {
    const {id, pwd} = useSelector( state => {
        //console.log("logincon state : ", state)
        return state.input.login; //{id:"", pwd:""}
    })
    const {result, loading, error} = useSelector( state => state.input )

    const onChange = (e) => {
        const {name, value} = e.target
        //console.log(name)
        //console.log(value)
        dispatch( inputSlice.actions.changeinput({name, value, form:"login"}) ) //온체인지 하면 체인지 인풋 호출..payload에 저장됨
    }
    const onSubmit = async (e) => { //사용자가 만든 함수라 어싱크 붙일 수 있음
        e.preventDefault();
        //console.log(e.target)
        const resultThunk = await dispatch( loginThunk( {id:id, pwd } ) )
        //console.log("resultThunk : ", resultThunk);
        if(resultThunk.payload ===0){
            navigate("/")
        }
    }
    return (<>
     <LoginCom result={result} loading={loading} error={error}
     onSubmit={onSubmit} onChange={onChange} username={id} pwd={pwd}/>
    </>)
}
export default LoginCon;