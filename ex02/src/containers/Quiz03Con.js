import { useState } from "react";
import Quiz03Com from "../components/Quiz03Com";

function Quiz03Con(){
    const [store, setStore] = useState(
        {msg : "", inData : 0, outData: 0} )
        console.log(store)
        //const[num, setNum] = useState(0) 뒤쪽 함수를 써야 앞 num이 변함
        //setNum( num +1 ) => num = num + 1 이전엔 이렇게 했는데
        //store = {msg: '', inData:0, outData:0}
        //store.inData => 0 => store.inData = store.inData(0) + 1
        
    
    const inBtn =()=>{
        //store.msg = "값처리"
        const num = store.inData;
        setStore({msg : "어서오세요", inData : num + 1, outData: store.outData});
    }
    const outBtn =()=>{
        if(store.inData - store.outData === 0)
            alert("나갈 손님 없음")
        else
            setStore({...store, msg:"안녕히가세요", outData : store.outData + 1 }) 
        //깊은 복사 활용해서 간단하게 위처럼 함, 다 복사하기 보단 깊은복사 활용
    }
    return (<>
        <Quiz03Com inBtn={inBtn} outBtn={outBtn} msg={store.msg} 
        inData={store.inData} outData={store.outData} />
    </>)
}
export default Quiz03Con;