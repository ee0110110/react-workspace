import { useEffect, useState } from "react";
import MListCom from "../../components/member/MListCom";
import { getData } from "../../service/member/member";
import { useNavigate } from "react-router-dom";

let num = 0;
function MListCon(){
    const[ list, setList ] = useState([])
    //console.log( getData() )

    useEffect( ()=>{
        //console.log("useEffect 실행")
        setList(getData())
        //list = [{},{},[}]
    }, [])
    //[]를 넣으면 한번만 실행되게 만듦, 반복되지 않음
    const [n, setN] = useState(0);
    const onClickOk = () => { setN(n+1) }
    const onClickNo = ( id ) => { console.log(id+" : 랜더링 안됨") }

    const navigate = useNavigate();
    const onDelete = ( id ) => {
        //console.log("/member/delete/" + id);
        navigate("/member/delete/"+id)
    }
    //onDelete("aaaa")
    //list = [{},{},{}] 위에 if문으로 넘이 한번만 되어서 무한반복을 방지함, if문삭제
    return (<>
        {/*console.log("return 랜더링 됨!!!")*/}
        <button onClick={onClickOk}>랜더링</button>
        <button onClick={ () =>{ onClickNo("bbbb") }  }>안됨</button>
       <MListCom list={list} onDelete={onDelete} />
    </>)
    //클릭 시 안됨 눌러서 함수실행하려면 안에 또 함수를 걸어준다
}
export default MListCon;