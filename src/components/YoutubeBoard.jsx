import styled from '@emotion/styled';

function YoutubeBoard() {
  return (
    <YoutubeList>
      <YoutubeBox>YoutubeBoard 컴포넌트</YoutubeBox>
      <YoutubeBox>YoutubeBoard 컴포넌트</YoutubeBox>
      <YoutubeBox>YoutubeBoard 컴포넌트</YoutubeBox>
      <YoutubeBox>YoutubeBoard 컴포넌트</YoutubeBox>
      <YoutubeBox>YoutubeBoard 컴포넌트</YoutubeBox>
      <YoutubeBox>YoutubeBoard 컴포넌트</YoutubeBox>
      <YoutubeBox>YoutubeBoard 컴포넌트</YoutubeBox>
      <YoutubeBox>YoutubeBoard 컴포넌트</YoutubeBox>
      <YoutubeBox>YoutubeBoard 컴포넌트</YoutubeBox>
      <YoutubeBox>YoutubeBoard 컴포넌트</YoutubeBox>
      <YoutubeBox>YoutubeBoard 컴포넌트</YoutubeBox>
      <YoutubeBox>YoutubeBoard 컴포넌트</YoutubeBox>
    </YoutubeList>
  );
}

export default YoutubeBoard;

const YoutubeList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 35px;
`;
const YoutubeBox = styled.div`
  display: inline-block;
  // 유튜브 들어오면 지워주기
  height: 250px;
  border: 1px solid black;
  background-color: #ccc;
  //
`;
