import React from 'react';
import { useState } from 'react';
import styled from '@emotion/styled';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { authService } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidateEmail, setIsValidateEmail] = useState(false);
  const [isValidatePassword, setIsValidatePassword] = useState(false);
  const auth = authService;
  const navigate = useNavigate();

  const email_validation = new RegExp(
    /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/,
  );

  const loginEmail = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        alert('로그인 성공');
        navigate('/', { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        alert('로그인 실패');
      });
  };

  return (
    <Container>
      <div className="container">
        <div className="containerTop">
          <span>로그인</span>
          <a href="http://localhost:3000/signup" style={{ width: '90px' }}>
            회원가입
          </a>
        </div>
        <InputContainer>
          <input
            className="idInput"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (email_validation.test(e.target.value)) {
                setIsValidateEmail(true);
              } else {
                setIsValidateEmail(false);
              }
            }}
            type="email"
            placeholder="이메일 (example@gmail.com)"
          ></input>
          <CheckBox>
            {email ? (
              isValidateEmail ? (
                <CheckCircleOutlined style={{ color: 'green' }} />
              ) : (
                <CloseCircleOutlined style={{ color: 'red' }} />
              )
            ) : null}
          </CheckBox>
        </InputContainer>
        <InputPasswordContainer>
          <input
            className="pwInput"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (e.target.value.length > 7) {
                setIsValidatePassword(true);
              } else {
                setIsValidatePassword(false);
              }
            }}
            type="password"
            placeholder="비밀번호 8글자 이상"
          ></input>
          <CheckBox>
            {password ? (
              isValidatePassword ? (
                <CheckCircleOutlined style={{ color: 'green' }} />
              ) : (
                <CloseCircleOutlined style={{ color: 'red' }} />
              )
            ) : null}
          </CheckBox>
        </InputPasswordContainer>

        <LoginButton
          isdisabled={!isValidateEmail || !isValidatePassword}
          disabled={!isValidateEmail || !isValidatePassword}
          onClick={() => {
            loginEmail();
          }}
        >
          로그인
        </LoginButton>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-image: url('https://blog.kakaocdn.net/dn/pHPot/btqZIy4Tzr8/8KllKwKLpi9sT8Ahdi6KYk/img.jpg');
  background-repeat: no-repeat;
  background-size: cover;

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: white;
  }

  a {
    text-decoration: none;
    color: white;
  }

  .containerTop {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  span {
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -1px;
  }

  .idInput {
    flex: 1;
    height: 45px;
    padding: 10px;
    border-radius: 8px 8px 0 0;
    border: none;
    &:focus {
      outline: none;
    }
  }
  .pwInput {
    flex: 1;
    height: 45px;
    padding: 10px;
    border-radius: 0 0 8px 8px;
    border: none;
    &:focus {
      outline: none;
    }
  }
`;

const LoginButton = styled.button`
  margin-top: 10px;

  background-color: ${({ isdisabled }) =>
    isdisabled ? 'rgba(248, 47, 98, 0.5)' : 'rgb(248, 47, 98)'};

  color: rgb(255, 255, 255);
  font-weight: 700;
  letter-spacing: -0.1px;
  text-align: center;
  width: 300px;
  border-radius: 40px;
  font-size: 16px;
  line-height: 47px;
  height: 48px;
  border: none;

  cursor: ${({ isdisabled }) => (isdisabled ? 'default' : 'pointer')};
`;

const InputContainer = styled.div`
  display: flex;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 300px;
  background-color: white;
  border-radius: 8px 8px 0px 0px;
  color: black;
`;

const InputPasswordContainer = styled(InputContainer)`
  border-radius: 0 0 8px 8px;
`;

const CheckBox = styled.div`
  width: 30px;
  padding-right: 10px;
`;

export default Login;
