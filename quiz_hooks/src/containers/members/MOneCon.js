import { useNavigate, useSearchParams } from "react-router-dom";
import MOneCom from "../../components/member/MOneCom";
import { getOne } from "../../service/member/member";
import { useEffect, useState } from "react";

function MOneCon(){
    //?username=???
    const [params] = useSearchParams();
    //console.log(params.get("userId")
    //const result = getOne(params.get("userId"))
    //getone은 서비스에 있는 함수임
    //console.log("result : ", result)
    const [data , setData] = useState()
    useEffect( ()=>{
        const id = params.get("userId");
        setData( getOne( id ) );
        /*
        const getData = async ()=>{
            const id = params.get("userId");
            const result = await getOne( id )

            const data = await result.json();
            console.log("data", data)
            
            setData( result );
            }
        getData();
        */
    } , [params] );
    const navigate = useNavigate();
    const onDelete = (userId) => {
        //navigate("/member/delete/"+userId) 밑에랑 같은 표현
        navigate(`/member/delete/${userId}`)
        //console.log("del:",userId);
    }
    return (<>
        <MOneCom data={data} onDelete={onDelete} />
    </>)
}
export default MOneCon;