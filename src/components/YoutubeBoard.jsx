import styled from '@emotion/styled';

function YoutubeBoard() {
  const clickImg = (id) => {
    console.log(`${id}`);
    // router 연결 시 detail page 이동
    // 이동 시 params이용 id 전달
  };
  return (
    <YoutubeList>
      <YoutubeBox>
        <YoutubeImg
          src="https://i.ytimg.com/vi/XJ7M6Ztb0yE/mqdefault.jpg"
          alt="title 넣기"
          onClick={() => clickImg('HI')}
        />
      </YoutubeBox>
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
  // 유튜브 들어오면 지워주기
  background-color: #ccc;
  //
`;
const YoutubeImg = styled.img`
  width: 100%;
  cursor: pointer;
`;
