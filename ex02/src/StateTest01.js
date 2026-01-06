//src -> components : 화면에 보여지는 기능
//src -> containers : 연산을 담당하는 기능

import { useState } from "react";
function StateTest01(){
    const [ num, setNum ] = useState(0)
    const [ str, setStr ] = useState("안녕")
    //let num = 0; 위에 num은 변수이고 setNum은 함수같은 것
    //useState를 하면 리턴에 의한 화면을 다시 그려주는 식으로 변경됨(재렌더링)
    //let str = "안녕하세요";
    console.log("start"+num)
    const click =() =>{
        console.log("click : ", num);
        //num = num + 1;
        setNum( num + 1 )// =num = num + 1; 같은 뜻임
    }
    const click2 =() =>{
        setStr= " 반갑"
    }
    console.log("end : " + num)

    return(<>
        str : { str }<br></br>
        <button onClick={click2}>클릭str</button>
        num : { num }<br></br>
        <button onClick={click}>클릭</button>
    </>)
}
export default StateTest01;
