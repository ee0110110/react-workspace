const LoginCom = ({result, loading, error, onSubmit, onChange, username, pwd}) => {
    return (<>
    <form onSubmit={onSubmit}>
        <input type="text" value={username} name="id" onChange={onChange} /><br />
        <input type="text" value={pwd} name="pwd" onChange={onChange} /><br />
        <button>로그인</button>0
        {loading && <p>로그인 중입니다...</p>}
        {error && <p>문제발생 : {error}</p>}
        {result === 1 && <p>아이디 또는 비번 불일치</p>}
    </form>
    </>)
}
export default LoginCom;