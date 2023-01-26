import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Content from './Content';
import { query, collection, onSnapshot, orderBy } from 'firebase/firestore';
import { dbService } from '../firebase';

export default function ContentsList({ modalPlayItem }) {
  const [contents, setContents] = useState([]);
  useEffect(() => {
    const q = query(
      collection(dbService, 'test'),
      orderBy('createdAt', 'desc'),
    );
    onSnapshot(q, (snapshot) => {
      const newcontents = snapshot.docs.map((doc) => {
        const newcontent = {
          id: doc.id,
          ...doc.data(),
        };
        return newcontent;
      });
      setContents(newcontents);
    });
  });

  return (
    <ContentsScroll>
      {contents.map((item) => {
        if (modalPlayItem.resourceId.videoId === item.boardId) {
          return <Content key={item.id} item={item} contents={contents} />;
        }
        return null;
      })}
    </ContentsScroll>
  );
}

const ContentsScroll = styled.div`
  padding: 5%;
  height: 65%;
  width: 80%;
  margin: auto;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 4px;
  overflow: auto;
`;
