import RegisterCom from "../components/common/RegisterCom";
import { useDispatch, useSelector } from "react-redux";
import { changeInput } from "../redux/inputSlice";
import { registerThunk } from "../service/authThunk";
import HeaderCom from "../components/common/HeaderCom";
import { useNavigate } from "react-router-dom";

const RegisterCon = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // inputSlice에서 값 가져오기
  const input = useSelector(state => state.input);

  // input 변경
  const onChange = (e) => {
    dispatch(changeInput({
      name: e.target.name,
      value: e.target.value,
    }));
  };

  // 회원가입 요청
  const onSubmit = async(e) => {
    e.preventDefault();

    console.log("username:", input.username, "password:", input.password, "role:", input.role);

      const result = await dispatch(registerThunk({
      username: input.username,
      password: input.password,
      role: input.role,
    }));
    
    // 회원가입 성공 시 로그인 페이지 이동 (퀴즈4)
        if (registerThunk.fulfilled.match(result)) {
            navigate("/login");
        }
    };

  return (
    <>
      <HeaderCom />
      <RegisterCom
        username={input.username}
        password={input.password}
        role={input.role}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default RegisterCon;