import { useState } from "react";
import Input01Com from "../components/Input01Com";

const Input01Con = () => {
   const [input, setInput] = useState(
        {username:"연습", addr : ""} //여기서 인풋한게 컴포넌트 파일의 인풋에 들어감
    )
    const onChange2 =( e )=>{
        //console.log( e )
        console.log( e.target.name ) //username 또는 addr 불러옴
        //if(e.target.value === "username") 이렇게 쓰지는 않음
        //input = {username: "연습", addr:""} 이걸 변경할 수 있도록 밑에 산식 적음 리렌더링 후 인풋으로 연결하고 다시 반복함 컴포넌트에서 그렇게 출력함
        //setInput( {username: e.target.value, addr: ""}) 이건 확인용
        setInput( {...input, [e.target.name]:e.target.value } ) //어드레스면 어드레스에 입력된 값으로 변경하고 그건 깊은복사로 넣어준다.. 키는 대괄호로 묶음
    }
    const onSubmit01 = (e) =>{
        e.preventDefault(); //페이지 이동 방지 함수
        //alert("실행??") //서브밋 버튼을 누르면 이 경고창이 뜸
        //console.log(e.target) //e,target이 폼태그여서 폼태그를 로그에 불러옴
        console.log("사용자 입력값")
        console.log(input) //서버로 전송함
    }
    return(<>
    <Input01Com input={input} onSubmit01={onSubmit01} onChange2={onChange2} />
    </>)
}
export default Input01Con;