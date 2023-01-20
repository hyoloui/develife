import React, { useState } from 'react';
import styled from '@emotion/styled';

export default function AddForm() {
  const [contentValue, setContentValue] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <FormWrapper onSubmit={submitHandler}>
      <InputBox>
        <InputValue type="text" placeholder="댓글을 작성해주세요." />
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
`;
const FormWrapper = styled.form`
  flex-direction: row;
  justify-content: space-between;
  height: 95%;
`;
