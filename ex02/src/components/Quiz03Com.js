function Quiz03Com( {inBtn, outBtn, msg, inData, outData} ){
   let msg2;
    if(msg===""){
        msg2 = <b>오픈 전</b>
   }else{
    msg2 = <b>        
        inData : {inData}<br></br>d
        outData : {outData}<br></br>
        in - out = {inData - outData}<br></br>
        </b>
    }
    //msg가 공백이랑 일치하면 오픈전, msg에 뭐가 있으면 오픈 // 삼항연산자거나 if문 활용함
    console.log( msg === "" ) // 메시지에 아무값도 없나 확인

    return (<>
    {msg}<hr></hr>
    {(msg === "")? <b>오픈 전</b> 
    : <b>
        inData : {inData}<br></br>
        outData : {outData}<br></br>
        in - out = {inData - outData}<br></br>
        </b>}
       
       <button onClick={inBtn}>IN</button>
       <button onClick={outBtn}>OUT</button>
    </>)
}
export default Quiz03Com;