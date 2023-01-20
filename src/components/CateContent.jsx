import React from 'react';
import styled from '@emotion/styled';

const CateContent = () => {
  return (
    <CateMainWarpper>
      <YoutubeBox>인기영상</YoutubeBox>
      <DescriptionBox>카테고리 설명</DescriptionBox>
    </CateMainWarpper>
  );
};
const CateMainWarpper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 35px;
  margin-bottom: 30px;
`;
const YoutubeBox = styled.div`
  display: inline-block;
  // 유튜브 들어오면 지워주기
  height: 347px;
  width: 625px;
  border: 1px solid black;
  background-color: #ccc;
  //
`;
const DescriptionBox = styled.div`
  display: inline-block;
  // 유튜브 들어오면 지워주기
  height: 347px;
  border: 1px solid black;
  background-color: #ccc;
  //
`;
export default CateContent;
