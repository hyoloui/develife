import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { IoChevronDownCircle } from 'react-icons/io5';
import { useState } from 'react';
import { authService, dbService } from '../firebase';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { BsTrashFill, BsFillPencilFill } from 'react-icons/bs';
import Button from './Button';

export default function Content({ item, contents }) {
  const [dropDown, setDropDown] = useState(false);
  const [editContentValue, setEditContentValue] = useState(item.text);

  // Content delete하기
  const deleteContent = async (id) => {
    let con = window.confirm('정말 삭제하시겠습니까?');
    if (con === true) {
      await deleteDoc(doc(dbService, 'test', id));
      alert('삭제하였습니다.');
    } else {
      alert('취소하였습니다.');
      setDropDown(false);
    }
  };
  // Content edit하기
  const Edit = async (id) => {
    const idx = contents.findIndex((item) => item.id === id);
    await updateDoc(doc(dbService, 'test', id), {
      isEdit: !contents[idx].isEdit,
    });
  };

  const EditContent = async (id) => {
    const editContent = editContentValue.trim();
    if (!editContent) {
      setEditContentValue('');
      return alert('입력한 글이 없습니다.');
    }
    await updateDoc(doc(dbService, 'test', id), {
      text: editContent,
      isEdit: false,
    });
    setDropDown(false);
  };

  const EditCancel = async (id) => {
    await updateDoc(doc(dbService, 'test', id), {
      isEdit: false,
    });
    setDropDown(false);
    setEditContentValue(item.text);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  });

  return (
    <ContentsItem key={item.id}>
      {item.isEdit ? (
        <div>
          <ContentsIdContainer>
            <ContentsId>{item?.userName}</ContentsId>
            <EditButtonWrapper>
              <Button
                width="62px"
                height="28px"
                onClick={() => {
                  EditContent(item.id);
                }}
              >
                확인
              </Button>
              <Button
                width="62px"
                height="28px"
                onClick={() => {
                  EditCancel(item.id);
                }}
              >
                취소
              </Button>
            </EditButtonWrapper>
          </ContentsIdContainer>
          <InputValue
            onChange={(e) => {
              setEditContentValue(e.target.value);
            }}
            type="text"
            autoFocus={true}
            value={editContentValue}
            placeholder="수정할 댓글을 입력해주세요."
            maxLength="32"
          />
        </div>
      ) : (
        <div>
          <ContentsIdContainer>
            <ContentsId>{item?.userName}</ContentsId>
            {isLoggedIn && authService.currentUser.uid === item.userId ? (
              <IconWrapper>
                <IoChevronDownCircle
                  onClick={() => {
                    setDropDown(!dropDown);
                  }}
                  size={24}
                />
              </IconWrapper>
            ) : null}

            {dropDown === true ? (
              <DropDownBox>
                <BsFillPencilFill
                  size={24}
                  color="white"
                  onClick={() => {
                    Edit(item.id);
                  }}
                />
                <BsTrashFill
                  size={24}
                  color="white"
                  onClick={() => {
                    deleteContent(item.id);
                  }}
                />
              </DropDownBox>
            ) : null}
          </ContentsIdContainer>
          <ContentsText>
            <p>{item.text}</p>
          </ContentsText>
        </div>
      )}
    </ContentsItem>
  );
}

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
  padding: 8px 12px;
  height: auto;
  overflow-wrap: break-word;
  font-size: 100%;
`;
const DropDownBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: black;
  border-radius: 12px;
  z-index: 300;
  height: 72px;
  width: 40px;
  top: 24px;
  right: -1vw;
`;
const ContentsIdContainer = styled.div`
  position: relative;
  display: flex;
`;
const IconWrapper = styled.div`
  width: 48px;
`;
const EditButtonWrapper = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-around;
`;
const InputValue = styled.input`
  width: 100%;
  height: 40px;
  font-size: 12px;
  border: none;
  border-radius: 8px;
  padding: 0px 12px;
  :focus {
    outline: none;
  }
`;
