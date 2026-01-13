import { useRef, useState } from "react";
import Ref04Com from "../components/Ref04Com";
const initInput ={username:"",password : "", addr: "", age: "" }
const Ref04Con =( )=>{
    const [input, setInput] =useState(initInput);

    const inputId = useRef(); //이번 챕터 주요내용 useRef
    const inputPwd = useRef();

    const inputArr = useRef([]);

    const onChange =(e)=>{
        setInput({...input, [e.target.name]:e.target.value})
    }
    const onSubmit =(e) =>{
        e.preventDefault(); //페이지 이동 방지
        console.log(inputArr.current[0])
        console.log(inputArr.current[1])
        for(let i=0; i < inputArr.current.length ; i++){
            if(inputArr.current[i].value === ""){
                alert(inputArr.current[i].name + "값은 필수");
                inputArr.current[i].focus();
                return;
            }
        }
        
        /*
        console.log(inputId)
        console.log(inputId.current) //컴포넌트 리턴 input 태그 형태 그대로 나옴
        console.log(input.username) // 입력된 글자가 나옴
        if(inputId.current.value === ""){
            alert("id는 필수 항목입니다")
            inputId.current.focus(); // 아이디가 공백이니까 포커스 커서를 아이디창에 대줌
        }else if(input.password === ""){
            alert("pwd 필수 항목")
            inputPwd.current.focus(); // 비번이 공백이니까 포커스 커서를 아이디창에 대줌
        }
        */
    }
    return(<>
    const inputId = useRef();
        <Ref04Com inputArr={inputArr} inputId={inputId} inputPwd={inputPwd} input={input} onChange={onChange} onSubmit={onSubmit}/>
    </>)
}
export default Ref04Con;