import styled from "styled-components";
import StyledInput from "./StyleInput";
import StyledForm from "./StyleForm";
import StyledButton from "./StyleButton";

const AuthBlock = styled.div`
  position: absolute;
  left: 0; top: 0; right: 0; bottom: 0;
  background-color: rgba(0,0,0,0.1);
`;

const RegisterBox = styled.div`
  position: absolute;
  width: 360px;
  top: 150px;
  left: calc(50% - 180px);
  background: white;
  padding: 20px;
  box-shadow: 0 0 8px rgba(0,0,0,0.3);
  border-radius: 5px;
`;

const RegisterCom = ({ username, password, role, onChange, onSubmit }) => {
  return (
    <AuthBlock>
      <RegisterBox>
        <StyledForm onSubmit={onSubmit}>
          <StyledInput
            name="username"
            placeholder="username"
            value={username}
            onChange={onChange}
          />
          <StyledInput
            name="password"
            type="password"
            placeholder="password"
            value={password}
            onChange={onChange}
          />
          <StyledInput
            name="role"
            placeholder="role"
            value={role}
            onChange={onChange}
          />          
          <StyledButton width="100%">회원가입</StyledButton>
        </StyledForm>
      </RegisterBox>
    </AuthBlock>
  );
};

export default RegisterCom;