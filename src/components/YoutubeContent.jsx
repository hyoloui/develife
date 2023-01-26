import React from 'react';
import styled from '@emotion/styled';

const YoutubeContent = ({ item, clickImg }) => {
  return (
    <YoutubeBox key={item.id}>
      <YoutubeImg
        src={`${item.snippet.thumbnails.high.url}`}
        alt={`${item.snippet.title}`}
        onClick={() => clickImg(item.snippet)}
      />
    </YoutubeBox>
  );
};
const YoutubeBox = styled.div`
  background-color: #ccc;
  display: flex;
  align-items: center;
  width: 100%;
  height: 74%;
  overflow: hidden;
  transition-duration: 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;
const YoutubeImg = styled.img`
  width: 100%;
  cursor: pointer;
`;
export default YoutubeContent;
