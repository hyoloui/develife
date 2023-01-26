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
`;
const YoutubeImg = styled.img`
  width: 100%;
  cursor: pointer;
`;
export default YoutubeContent;
