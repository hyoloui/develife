import styled from '@emotion/styled';
import { useQuery } from 'react-query';
import { getAll, getHomeTrainning, getProgramming, getItItem } from '../api';
import { useState } from 'react';
import Modal from '../pages/Modal';

function YoutubeBoard({ category }) {
  const { data: AllPlayList, isLoading: isLoadingAP } = useQuery('All', getAll);
  const { data: HometrainningPlayList, isLoading: isLoadingHP } = useQuery(
    'HomeTrainning',
    getHomeTrainning,
  );
  const { data: ProgrammingPlayList, isLoading: isLoadingPG } = useQuery(
    'Programming',
    getProgramming,
  );
  const { data: ItItemPlayList, isLoading: isLoadingIT } = useQuery(
    'ItItem',
    getItItem,
  );

  const isLoading = isLoadingAP || isLoadingHP || isLoadingPG || isLoadingIT;

  const [releaseModal, setReleaseModal] = useState(false);

  const closeReleasePopup = () => {
    setReleaseModal(false);
    document.body.style.overflow = 'unset';
  };

  const clickImg = (id) => {
    setReleaseModal(true);
    document.body.style.overflow = 'hidden';
  };

  if (isLoading) {
    return <h3>로딩중 입니다.</h3>;
  }

  if (category === 'training') {
    return (
      <>
        <CateMainWarpper>
          <YoutubeBox>
            <YoutubeImg
              src={`${HometrainningPlayList.items[0].snippet.thumbnails.maxres.url}`}
              alt={`${HometrainningPlayList.items[0].snippet.title}`}
            />
          </YoutubeBox>
          <DescriptionBox>카테고리 설명</DescriptionBox>
        </CateMainWarpper>
        <YoutubeList>
          {HometrainningPlayList.items
            .filter((item) => item.id !== HometrainningPlayList.items[0].id)
            .map((item) => (
              <YoutubeBox key={item.id}>
                <YoutubeImg
                  src={`${item.snippet.thumbnails.high.url}`}
                  alt={`${item.snippet.title}`}
                  onClick={() => clickImg(item.snippet.resourceId.videoId)}
                />
              </YoutubeBox>
            ))}
          {releaseModal && <Modal closeReleasePopup={closeReleasePopup} />}
        </YoutubeList>
      </>
    );
  } else if (category === 'programing') {
    return (
      <>
        <CateMainWarpper>
          <YoutubeBox>
            <YoutubeImg
              src={`${ProgrammingPlayList.items[0].snippet.thumbnails.maxres.url}`}
              alt={`${ProgrammingPlayList.items[0].snippet.title}`}
            />
          </YoutubeBox>
          <DescriptionBox>카테고리 설명</DescriptionBox>
        </CateMainWarpper>
        <YoutubeList>
          {ProgrammingPlayList.items
            .filter((item) => item.id !== ProgrammingPlayList.items[0].id)
            .map((item) => (
              <YoutubeBox key={item.id}>
                <YoutubeImg
                  src={`${item.snippet.thumbnails.high.url}`}
                  alt={`${item.snippet.title}`}
                  onClick={() => clickImg(item.snippet.resourceId.videoId)}
                />
              </YoutubeBox>
            ))}
          {releaseModal && <Modal closeReleasePopup={closeReleasePopup} />}
        </YoutubeList>
      </>
    );
  } else if (category === 'review') {
    return (
      <>
        <CateMainWarpper>
          <YoutubeBox>
            <YoutubeImg
              src={`${ItItemPlayList.items[0].snippet.thumbnails.maxres.url}`}
              alt={`${ItItemPlayList.items[0].snippet.title}`}
            />
          </YoutubeBox>
          <DescriptionBox>카테고리 설명</DescriptionBox>
        </CateMainWarpper>
        <YoutubeList>
          {ItItemPlayList.items
            .filter((item) => item.id !== ItItemPlayList.items[0].id)
            .map((item) => (
              <YoutubeBox key={item.id}>
                <YoutubeImg
                  src={`${item.snippet.thumbnails.high.url}`}
                  alt={`${item.snippet.title}`}
                  onClick={() => clickImg(item.snippet.resourceId.videoId)}
                />
              </YoutubeBox>
            ))}
          {releaseModal && <Modal closeReleasePopup={closeReleasePopup} />}
        </YoutubeList>
      </>
    );
  }
  return (
    <YoutubeList>
      {AllPlayList.items.map((item) => (
        <YoutubeBox key={item.id}>
          <YoutubeImg
            src={`${item.snippet.thumbnails.high.url}`}
            alt={`${item.snippet.title}`}
            onClick={() => clickImg(item.snippet.resourceId.videoId)}
          />
        </YoutubeBox>
      ))}
      {releaseModal && <Modal closeReleasePopup={closeReleasePopup} />}
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
  background-color: #ccc;
`;
const YoutubeImg = styled.img`
  width: 100%;
  cursor: pointer;
`;
const CateMainWarpper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 35px;
  margin-bottom: 30px;
`;
const DescriptionBox = styled.div``;
