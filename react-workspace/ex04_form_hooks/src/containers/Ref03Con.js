import {useRef, useState} from "react";
import Ref03Com from "../components/Ref03Com";

const Ref03Con =()=>{
    const number = useRef(0);
    const [num, setNum]= useState(0);
    const onState = ()=>{setNum(num+100); } //밑 ref에 나타내는 랜더링 용도로 만든것임
    const onRef =()=> {number.current = number.current +1; } //연산은 하는데 랜더링은 안됨
return(<>
    <Ref03Com number= {number} onRef={onRef} onState={onState} />
    </>)
}
export default Ref03Con;