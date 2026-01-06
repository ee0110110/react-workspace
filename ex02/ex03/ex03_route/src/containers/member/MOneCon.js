import { useSearchParams } from "react-router-dom";
import MOneCom from "../../components/member/MOneCom";
import { getOne } from "../../service/member/member";
import { useEffect, useState } from "react";

function MOneCon(){
    const [params] = useSearchParams();
    //params.get("id") : aaa,bbb,ccc 중 하나
    //console.log( getOne(params.get("id")) )
    const [user, setUser] = useState({})
    useEffect(()=>{
        setUser( getOne(params.get("id")) )
    },[ params ] )
    // 뒤에 []이걸 붙여서 한번만 반복하게 함
    
    return(<>
        <MOneCom user={user} />
    </>)
}
export default MOneCon;