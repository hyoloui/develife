import React, { useState } from 'react';
import styled from '@emotion/styled';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { authService } from '../firebase';

const Signup = () => {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerPasswordCheck, setRegisterPasswordCheck] = useState('');

  const register = async () => {
    try {
      const createdUser = await createUserWithEmailAndPassword(
        authService,
        registerEmail,
        registerPassword,
      );
      console.log(createdUser);
      setRegisterEmail('');
      setRegisterPassword('');
    } catch (err) {
      console.log(err.code);
    }
  };
  return (
    <Container>
      <div className="signContainer">
        <div className="containerTop" style={{ marginBottom: '30px' }}>
          <h3> 회원 가입</h3>
        </div>
        <form>
          <div className="inputContainer">
            <label className="labelInput" htmlFor="inputId">
              아이디
            </label>
            <input
              id="inputId"
              type="email"
              value={registerEmail}
              onChange={(e) => {
                setRegisterEmail(e.target.value);
              }}
              placeholder="이메일 입력해주세요."
            />
          </div>
          <div className="inputContainer">
            <label className="labelInput" htmlFor="inputNickname">
              닉네임
            </label>
            <input id="inputNickname" placeholder="닉네임 입력해주세요." />
          </div>
          <div className="inputContainer">
            <label className="labelInput" htmlFor="inputPw">
              비밀번호
            </label>
            <input
              id="inputPw"
              type={'password'}
              value={registerPassword}
              onChange={(e) => {
                setRegisterPassword(e.target.value);
              }}
              placeholder="비밀번호 입력해주세요."
            />
          </div>
          <div className="inputContainer">
            <label className="labelInput" htmlFor="inputPwCheck">
              2차 확인
            </label>
            <input
              id="inputPwCheck"
              type={'password'}
              value={registerPasswordCheck}
              onChange={(e) => {
                setRegisterPasswordCheck(e.target.value);
              }}
              placeholder="비밀번호 2차 입력해주세요."
            />
          </div>
          <button
            onClick={() => {
              register();
            }}
          >
            회원가입
          </button>
        </form>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-image: url('https://mblogthumb-phinf.pstatic.net/MjAxNzAxMTJfMjE0/MDAxNDg0MjI4ODU5Mjc2.sQxFE9oQ2BFC6ZHtoilp44-EpcWN5QiWnqn1h2HWs1Ag.62dDmPKu1_h9Rii4SsfsmSPmSmnBH8Sw07LHH7NQKXAg.JPEG.ohs6888/%EC%82%AC%EB%B3%B8_-gNuN03I.jpg?type=w800');
  background-repeat: no-repeat;
  background-size: cover;

  width: 100vw;
  height: 100vh;

  font-size: 24px;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  .signContainer {
    background-color: #333;
    width: 400px;
    height: 450px;

    border-radius: 10px;
    padding: 50px;
  }

  .inputContainer {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  input {
    width: 500px;
    height: 40px;

    border-radius: 10px;
    padding-left: 10px;
  }

  button {
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

export default Signup;
