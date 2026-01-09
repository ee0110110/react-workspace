import { useNavigate, useParams } from "react-router-dom";
import { memberDelete } from "../../service/member/member";
import { useEffect } from "react";

function MDeleteCon(){
    /*
    const params = useParams();
    //params = {id:bbb}
    id = {id:bbb} 이렇게 저장되어있으므로 밑의 형태로 꺼냄
    console.log("del:",params.id)
    */
    const {id} = useParams();
   //console.log("del id : ", id )
    
   memberDelete( id );

   const navigate = useNavigate();
    useEffect( () => {
        alert("삭제 성공")
        navigate("/member/list")
    })
    //렌더링이 끝난후 유즈이펙트 실행해주세요

   return null
}
export default MDeleteCon;