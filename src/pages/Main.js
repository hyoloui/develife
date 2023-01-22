import React from 'react';
import styled from '@emotion/styled';

function Main() {
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
