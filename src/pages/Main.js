import Modal from './Modal';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import YoutubeBoard from '../components/YoutubeBoard';
import Navbar from '../components/Navbar';
import CateContent from '../components/CateContent';

function Main() {
  const [category, setCategory] = useState('');

  return (
    <MainWrapper>
      <Navbar category={category} setCategory={setCategory} />
      {category ? <CateContent category={category} /> : null}
      <YoutubeBoard category={category}></YoutubeBoard>
    </MainWrapper>
  );
}

export default Main;

const MainWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  border: 1px solid red;
`;
