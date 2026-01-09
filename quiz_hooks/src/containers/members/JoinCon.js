import { useRef, useState } from "react";
import JoinCom from "../../components/member/JoinCom"
import { register } from "../../service/member/member";
import { useNavigate } from "react-router-dom";
const registerInput = {
    id:"", pwd:"", pwdChk:"", name:"", addr:""
}

const JoinCon=()=> {
    const [reg,setReg] = useState(registerInput);
    const navigate =useNavigate()
    const inputCheck = useRef([])
    const onChange =(e)=>{
        setReg({...reg, [e.target.name]:e.target.value})
    }
    
    //arr = [1,2,3] => arr.forEach
    const onSubmit=(e)=>{
        e.preventDefault();
        for(let input of inputCheck.current){
            console.log(input)
            if(input.value === ""){
                alert(input.name + "필수!")
                input.focus();
            return; 
            //break; 다음 문장 실행을 위해서 리턴을 쓴다ㅏ..?
            }
        }
        if(inputCheck.current[1].value === inputCheck.current[2].value){
            alert("회원가입 축하")
            const saveData = {...reg}
            delete saveData.pwdChk
            register(saveData) // 위에 고정된 [1] [2] 이런건 실무에선 고정값으로 두지 않음.. 아무튼 입력된 거 등록함
            navigate("/member/list") //네비로 회원등록된 리스트로 이동됨
        }else{
            alert("비밀번호 다르다~")
            setReg({...reg, pwd: "", pwdChk: ""})
            inputCheck.current[1].focus(); //다르면 다시 입력하라고 포커스 이동
        }
        /*
        inputCheck.current.forEach((v,i)=>{
            //console.log(v, ":" + i)
            if(v.value === ""){
                alert(v.name + "필수!")
            }
        })
        //위엔 포이치를 써도 되고 포문을 써도 됨 근데 return으로 빠져나오는게 행동안되서 위에 다른걸로 함, 포이치니까 배열크기만큼 반복함, current는 배열임
        */
        /*
        console.log(reg)

        const saveData = {...reg}
        
        delete saveData.pwdChk
        console.log(saveData)
//import {register} from
        register(saveData)
        navigate("/member/list")
    */
        }
    return(<>
        <JoinCom inputCheck={inputCheck} reg={reg} onChange={onChange} onSubmit={onSubmit}/>
    </>)
}
export default JoinCon