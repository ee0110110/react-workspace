import { Link, useNavigate } from "react-router-dom"

const NotFound =()=> {
    const navigate =useNavigate();
    return(<>
        <h1>member/없는 경로 페이지는 존재하지 않습니다.</h1>
        <button onClick={ ()=> navigate("/") }>HOME이동</button>
        <Link to="/">HOME 이동</Link>

    </>)
}
export default NotFound;