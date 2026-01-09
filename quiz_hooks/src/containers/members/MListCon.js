import { useEffect, useState } from "react";
import MListCom from "../../components/member/MListCom";
import { getList } from "../../service/member/member";
function MListCon(){
    const [data, setData] = useState();
    useEffect( ()=>{
        setData( getList() )
        /*const getData = async ()=>{
            const res = await getList()
            console.log("res:", res)
            const data = await res.json();
            console.log("data:", data)
            setData(data)
        }
        getData();
        */
    } , [] );

    //처음 한번만 실행해주고 재렌더링하지 말라고 useEffect 사용함 데이터가 변경되면 재렌딩 함수가 실행,,
    return (<>
        <MListCom data={data}/>
    </>)
}
export default MListCon;