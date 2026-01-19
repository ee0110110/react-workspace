import HeaderCom from "../components/common/HeaderCom";
import LoginCom from "../components/LoginCom";
import { useDispatch, useSelector} from "react-redux";
import { changeInput } from "../redux/inputSlice";
import { loginThunk } from "../service/authThunk";

const LoginCon = () => {
    const dispatch = useDispatch();
    const input = useSelector(state => state.input);

    const onChange = (e) => {
        dispatch(changeInput({
            name: e.target.name,
            value: e.target.value
        }));
    };
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(input); // 로그인시 리덕스에 저장된 내용 출력 (퀴즈1)
        dispatch(loginThunk({ //로그인 요청하기 (퀴즈3)
            username: input.username,
            password: input.password}));
    };
    return (<>
        <HeaderCom />
        <LoginCom onChange={onChange} onSubmit={onSubmit} 
        username={input.username} password={input.password} />
    </>)
};
export default LoginCon;