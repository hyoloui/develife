import React from 'react';
import styled from '@emotion/styled';
import { getAuth } from 'firebase/auth';

function Main() {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;

    console.log('displayName', user);
    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const uid = user.uid;
  }

  return (
    <>
      <h1>Main 페이지</h1>
      <NavigateBar>
        <button>home</button>
        <button>홈트</button>
        <button>개발영상</button>
        <button>개발템 추천</button>
      </NavigateBar>

      <BoardContainer>유튜브 영상 썸네일 (클릭시 모달창) </BoardContainer>
    </>
  );
}

const NavigateBar = styled.div`
  background-color: beige;

  button {
    width: 200px;
  }
`;

const BoardContainer = styled.div`
  width: 450px;
  height: 250px;
  background-color: aqua;

  margin: 100px;
`;

export default Main;
