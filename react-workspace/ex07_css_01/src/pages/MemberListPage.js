import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { memberListThunk, memberDetailThunk, checkAuthThunk } from "../service/authThunk";
import HeaderCom from "../components/common/HeaderCom";

const MemberListPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { list, loading } = useSelector((state) => state.memberData);

  useEffect(() => {
    dispatch(memberListThunk()); // 페이지 들어오자마자 멤버 목록 요청하는 것임
  }, [dispatch]);

  // 상세 조회 및 페이지 이동
  const handleClick = async (username) => {
    try {
      await dispatch(checkAuthThunk()).unwrap(); // 로그인 체크
      await dispatch(memberDetailThunk(username)).unwrap(); // 상세 조회
      navigate(`/members/${username}`); // 상세 페이지 이동
    } catch (err) {
      console.log("로그인 필요:", err);
      navigate("/login");
    }
  };

  if (loading) return <div>로딩중...</div>;

  return (
    <>
      <HeaderCom />
   
      <h3 style={{ textAlign: "center", color: "red" }}>회원 목록</h3>
  
    <table border={0} style={{ width: "50%", textAlign: "center", marginTop: "300px", fontSize: "20px", padding: '10px 20px' }}>
      <thead>
        <tr>
          <th>아이디</th>
          <th>비밀번호</th>
          <th>ROLE</th>
        </tr>
      </thead>
      <tbody>
        {list.map((member) => (
          <tr key={member.username}>
            <td
              style={{ cursor: "pointer", color: "green" }}
              onClick={() => handleClick(member.username)}
            >
              {member.username}
            </td>
            <td>{member.password}</td>
            <td>{member.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  
  </>);
};

export default MemberListPage;