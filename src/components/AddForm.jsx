import React from 'react';
import styled from '@emotion/styled';
import { addDoc, collection } from 'firebase/firestore';
import { dbService } from '../firebase';
export default function AddForm({ newcontent, contentValue, setContentValue }) {
  // Content add하기
  const addContent = async (e) => {
    // 새로고침 방지
    e.preventDefault();
    // text좌우공백 제거
    const content = contentValue.trim();
    // 빈칸 등록시 submit 안됨
    if (!content) {
      setContentValue('');
      return alert('입력한 글이 없습니다.');
    }
    // add content 하기

    await addDoc(collection(dbService, 'test'), newcontent);
    setContentValue('');
  };

  return (
    <FormWrapper onSubmit={addContent}>
      <InputBox>
        <InputValue
          type="text"
          value={contentValue}
          placeholder="댓글을 작성해주세요."
          onChange={(e) => {
            setContentValue(e.target.value);
          }}
          maxLength="32"
          autoFocus={true}
        />
        <button>등록</button>
      </InputBox>
    </FormWrapper>
  );
}

const InputBox = styled.div`
  display: flex;
  width: 100%;
  height: 15%;
  justify-content: center;
  gap: 10px;
  align-items: center;
`;
const InputValue = styled.input`
  width: 60%;
  height: 40%;
  font-size: 12px;
  border: none;
  border-radius: 8px;
  padding: 0px 12px;
  :focus {
    outline: none;
  }
`;
const FormWrapper = styled.form`
  flex-direction: row;
  justify-content: space-between;
  height: 95%;
`;
