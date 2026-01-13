const Input01Com = ( {input, onChange2, onSubmit01 } ) => {
    //input = {username: "연습", addr: ""} 컨테이너에서 받아와서 출력함 //버튼에 타입이 없으면 서브밋과 같음 이동함
    return (<>
        <form onSubmit={onSubmit01} action="https://www.naver.com">
            <input type="text" value={input.username} name="username" onChange={onChange2} /><br></br>
            <input type="text" value={input.addr} name="addr" onChange={onChange2} /><br></br>
            <input type="submit" value="input" />
            <input type="button" value="input" />
            <button type="button">btn</button>
            <button type="submit">btn</button>
            <button>btn</button>
        </form>
    </>)
}
export default Input01Com;