import React from 'react';
import styled from '@emotion/styled';
import { IoChevronDownCircle } from 'react-icons/io5';
import { useState } from 'react';
import { authService, dbService } from '../firebase';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { BsTrashFill, BsFillPencilFill } from 'react-icons/bs';
import Button from './Button';
import { CommentItem } from './ContentsList';

type ContentProps = {
  item: CommentItem;
  isLoggedIn: boolean;
};

export default function Content({ item, isLoggedIn }: ContentProps) {
  const [editContentValue, setEditContentValue] = useState(item.text);
  const [isEdit, setIsEdit] = useState(false);

  // Content delete하기
  const deleteContent = async (id: string) => {
    let con = window.confirm('정말 삭제하시겠습니까?');
    if (con === true) {
      await deleteDoc(doc(dbService, 'test', id));
      alert('삭제하였습니다.');
    } else {
      alert('취소하였습니다.');
    }
  };

  // Content edit하기
  const EditContent = async (id: string) => {
    const editContent = editContentValue?.trim();
    if (!editContent) {
      setEditContentValue('');
      return alert('입력한 글이 없습니다.');
    }
    await updateDoc(doc(dbService, 'test', id), {
      text: editContent,
    });
    setIsEdit(false);
  };

  const EditCancel = () => {
    setIsEdit(false);
    setEditContentValue(item.text);
  };

  return (
    <ContentsItem key={item.id}>
      {isEdit ? (
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
                  EditCancel();
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
            {isLoggedIn && authService.currentUser?.uid === item.userId ? (
              <DropDown>
                <IoChevronDownCircle size={24} />
                <DropDownBox className="DropDownBox">
                  <HoverButton>
                    <BsFillPencilFill
                      size={24}
                      onClick={() => {
                        setIsEdit(true);
                      }}
                    />
                  </HoverButton>
                  <HoverButton>
                    <BsTrashFill
                      size={24}
                      onClick={() => {
                        deleteContent(item.id);
                      }}
                    />
                  </HoverButton>
                </DropDownBox>
              </DropDown>
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
  display: none;
  flex-direction: column;
  justify-content: space-around;
  background-color: black;
  border-radius: 12px;
  z-index: 1;
  height: 72px;
  width: 40px;
  top: 24px;
  right: 0;
`;
const ContentsIdContainer = styled.div`
  position: relative;
  display: flex;
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
const DropDown = styled.div`
  width: 48px;
  position: relative;
  display: inline-block;
  &:hover {
    cursor: pointer;
    color: #7c7c7c;
    .DropDownBox {
      display: flex;
    }
  }
`;

const HoverButton = styled.div`
  color: 656565;
  &:hover {
    color: white;
  }
`;
