import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteMember, updateMember } from '../service/authThunk';
import HeaderCom from '../components/common/HeaderCom';

const MemberDetailPage = () => {
  const { username } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { detail } = useSelector((state) => state.memberData);
  
  const [isEdit, setIsEdit] = useState(false);
  const [editUsername, setEditUsername] = useState('');
  const [editPassword, setEditPassword] = useState('');
  const [editRole, setEditRole] = useState('');

  // 데이터 로드되면 input에 넣기
  useEffect(() => {
    if(detail) {
      setEditUsername(detail.username);
      setEditPassword(detail.password);
      setEditRole(detail.role);
    }
  }, [detail]);

  // 삭제
  const handleDelete = () => {
    if(window.confirm('정말 삭제하시겠습니까?')) {
      dispatch(deleteMember(username));
      alert('삭제되었습니다.');
      navigate('/members');
    }
  };

  // 수정
  const handleUpdate = () => {
    const updatedMember = {
      username: editUsername,
      password: editPassword,
      role: editRole
    };
    dispatch(updateMember(updatedMember));
    alert('수정되었습니다.');
    setIsEdit(false);
  };

  if(!detail) return <div>데이터 없음</div>;

  return (
    <>
      <HeaderCom />
      
      <div style={{ 
        border: "1px solid #ccc", 
        padding: "1rem", 
        width: "300px",
        margin: "50px auto"
      }}>
        <h3>개인 정보</h3>
        
        {!isEdit ? (
          <>
            <p>username - {detail.username}</p>
            <p>password - {detail.password}</p>
            <p>role - {detail.role}</p>
            
            <div style={{ marginTop: '20px' }}>
              <button onClick={() => setIsEdit(true)}>수정</button>
              <button onClick={handleDelete} style={{ marginLeft: '10px' }}>삭제</button>
              <button onClick={() => navigate('/members')} style={{ marginLeft: '10px' }}>목록</button>
            </div>
          </>
        ) : (
          <>
            <p>
              username - 
              <input 
                type="text"
                value={editUsername}
                onChange={(e) => setEditUsername(e.target.value)}
              />
            </p>
            <p>
              password - 
              <input 
                type="password"
                value={editPassword}
                onChange={(e) => setEditPassword(e.target.value)}
              />
            </p>
            <p>
              role - 
              <input 
                type="text"
                value={editRole}
                onChange={(e) => setEditRole(e.target.value)}
              />
            </p>
            
            <div style={{ marginTop: '20px' }}>
              <button onClick={handleUpdate}>저장</button>
              <button onClick={() => setIsEdit(false)} style={{ marginLeft: '10px' }}>취소</button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MemberDetailPage;