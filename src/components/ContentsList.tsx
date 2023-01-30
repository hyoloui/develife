import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Content from './Content';
import { query, collection, onSnapshot, orderBy } from 'firebase/firestore';
import { dbService } from '../firebase';
import { Snippet } from '../index.data';

type ListProps = {
  modalPlayItem: Snippet | null;
  isLoggedIn: boolean;
};

export type CommentItem = {
  id: string;
  boardId?: string;
  text?: string;
  isEdit?: boolean;
  userName?: string;
  userId?: string;
};

export default function ContentsList({ modalPlayItem, isLoggedIn }: ListProps) {
  const [contents, setContents] = useState<CommentItem[]>([]);

  // collection 불러오기
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
  }, []);

  return (
    <ContentsScroll>
      {contents.map((item) => {
        if (modalPlayItem?.resourceId.videoId === item.boardId) {
          return <Content key={item.id} item={item} isLoggedIn={isLoggedIn} />;
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
