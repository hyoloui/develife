import React from 'react';
import { useState } from 'react';
import styled from '@emotion/styled';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { authService } from '../firebase';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = authService;
  const navigate = useNavigate();

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
          <a style={{ width: '90px' }}>회원가입</a>
        </div>
        <input
          className="idInput"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          placeholder="이메일 (example@gmail.com)"
        ></input>
        <input
          className="pwInput"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="비밀번호 8글자 이상"
        ></input>
        <button
          className="loginButton"
          onClick={() => {
            loginEmail();
          }}
        >
          로그인
        </button>
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
    width: 300px;
    height: 45px;
    padding: 10px;
    border-radius: 8px 8px 0 0;
    border: none;
  }
  .pwInput {
    width: 300px;
    height: 45px;
    padding: 10px;
    border-radius: 0 0 8px 8px;
    border: none;
  }

  .loginButton {
    margin-top: 10px;
    background-color: rgb(248, 47, 98);
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
  }
`;

export default Login;
