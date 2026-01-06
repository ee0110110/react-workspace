import { useEffect, useState } from "react";

function IndexPage(){
    const [num, setNum] = useState(0)
    const [num2, setNum2] = useState(0)
    useEffect(()=>{
        console.log("useEffect 실행 : ", num)
    },[ num2 ])
    const onClick = () => { setNum(num+1); }
    const onClick2 = () => { setNum2(num2 + 1); }
    return (<>
        num : {num}, num2 : {num2} <hr></hr>
        <button onClick={onClick}>클릭</button>
        <button onClick={onClick2}>클릭222</button>
    </>)
    // useEffect의 의존성 : 제일 뒤 대괄호 안에 한번 더 넣어서 의존성 역할로 변수 변경시 한번더 실행할 수 있게됨
}
export default IndexPage;