import styled from '@emotion/styled';
import React from 'react';
import YoutubeBoard from '../components/YoutubeBoard';

function Main() {
  return (
    <MainWrapper>
      <YoutubeBoard></YoutubeBoard>
    </MainWrapper>
  );
}

export default Main;

const MainWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  border: 1px solid red;
`;
