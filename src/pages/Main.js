import React from 'react';
import { useState } from 'react';
import Modal from './Modal';

function Main() {
  const [releaseModal, setReleaseModal] = useState(false);

  const releasePopup = () => {
    setReleaseModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeReleasePopup = () => {
    setReleaseModal(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <div>
      <h2>메인입니다.</h2>
      <button onClick={() => releasePopup()}>모달 바로 가기</button>
      {releaseModal && <Modal closeReleasePopup={closeReleasePopup} />}
    </div>
  );
}

export default Main;
