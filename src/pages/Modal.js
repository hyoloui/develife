import React from 'react';
import styled from '@emotion/styled';
import AddForm from '../components/AddForm';

const Modal = ({ closeReleasePopup }) => {
  return (
    <>
      <Layer onClick={() => closeReleasePopup()}></Layer>
      <ModalLayer>
        <CloseButton onClick={() => closeReleasePopup()}>X</CloseButton>
        <ModalContainer>
          <YoutubeBox>
            <YoutubeContents>영상 여기!</YoutubeContents>
            <div>
              <YoutubeTitle>Title</YoutubeTitle>
              <ContentsText>상세내용</ContentsText>
            </div>
          </YoutubeBox>
          <ContentsContainer>
            <ContentsTitle>댓글</ContentsTitle>
            <ContentsBox>
              <ContentsScroll>
                <ContentsItem>
                  <ContentsId>닉네임</ContentsId>
                  <ContentsText>contents</ContentsText>
                </ContentsItem>
                <ContentsItem>
                  <ContentsId>닉네임2</ContentsId>
                  <ContentsText>contents2</ContentsText>
                </ContentsItem>
              </ContentsScroll>
              <AddForm />
            </ContentsBox>
          </ContentsContainer>
        </ModalContainer>
      </ModalLayer>
    </>
  );
};

export default Modal;

const Layer = styled.div`
  z-index: 1500;
  display: block;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const ModalLayer = styled.div`
  z-index: 2000;
  width: 80%;
  height: 80vh;
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: white;
  border-radius: 16px;
  transform: translate(-50%, -50%) !important;
`;
const ModalContainer = styled.div`
  width: 85%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 30px;
`;
const YoutubeBox = styled.div`
  margin-right: 12px;
  width: 60%;
  height: 80%;
  border-radius: 16px;
`;
const ContentsContainer = styled.div`
  background-color: lightgray;
  width: 45%;
  height: 80%;

  border-radius: 16px;
`;
const ContentsTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 24px;
  width: 100%;
  height: 18%;
`;
const ContentsBox = styled.div`
  flex-direction: row;
  justify-content: space-between;
  height: 95%;
`;
const ContentsScroll = styled.div`
  padding: 5%;
  height: 65%;
  width: 80%;
  margin: auto;
  flex-direction: row;
  justify-content: space-around;
  border-radius: 4px;
  overflow: auto;
`;
const ContentsItem = styled.div`
  margin-bottom: 12px;
`;
const ContentsId = styled.div`
  font-weight: 600;
  margin-bottom: 10px;
`;
const ContentsText = styled.div`
  border-radius: 8px;
  background-color: #fff;
  padding-left: 12px;
  height: 4vh;
  overflow-wrap: break-word;
`;
const CloseButton = styled.button`
  position: absolute;
  font-size: 24px;
  font-weight: 600;
  width: 40px;
  height: 40px;
  right: 12px;
  top: 12px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
const YoutubeContents = styled.div`
  width: 100%;
  height: 60%;
  background-color: aliceblue;
`;
const YoutubeTitle = styled.p`
  font-weight: 800;
  font-size: 24px;
  overflow-wrap: break-word;
`;
