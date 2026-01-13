import { useState } from "react";
import Input02Com from "../components/Input02Com";
const Input02Con = () => {
    const [name, setName ] = useState("");
    const [addr, setAddr ] = useState("");
    const [age, setAge ] = useState("");
    const [data, setData] = useState({name01:"1", addr01:"2", age01:"3"})
    const onChange = ( e ) => {
        //date = {name01:"1변경", addr01:data.addr01, age01:"3"} 온체인지 작동하면 밑에 데이터로 초기화됨
        //setData( {name01:data.name01, addr01:"새로운 값", age01:"data.age01"} ) 밑에랑 똑같은 처리방식임 깊은복사 활용
        //setData({...data, addr01:"새롭게 변경"})
        setData( {...data, [e.target.name] : e.target.value}) //이렇게 하면 깔끔하게 한줄로 됨.. 위에는 서로 보내고 해야해서 길어짐

        console.log( e.target )
        if( e.target.name === "name")
            setName( e.target.value )
        else if( e.target.name === "addr")
            setAddr( e.target.value )
        else if( e.target.name === "age")
            setAge( e.target.value )
    }
    return (<>
        <Input02Com data={data} age={age} onChange={onChange} name={name} addr={addr}/>
    </>)
} //여기서 리턴 컴포넌트로 보내버리면 컴포넌트에서 const로 받음
export default Input02Con;