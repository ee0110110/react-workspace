import {Link, Outlet} from "react-router-dom"

function HeaderCom(){
    return(
        <div>
            <header>
                <Link to="/">Home</Link> &nbsp;
                <Link to="/member/list">MEMBER</Link> &nbsp;
                <Link to="/member/register">회원가입</Link>
                <hr></hr>
            </header>
            <main>
                <Outlet />
            </main>
       </div>
    )
}
export default HeaderCom;