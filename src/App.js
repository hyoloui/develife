import styled from '@emotion/styled';
import { useState } from 'react';
import CateContent from './components/CateContent';
import Navbar from './components/Navbar';
import Main from './pages/Main';

function App() {
  const [category, setCategory] = useState('');
  return (
    <PageWrpper>
      <Navbar category={category} setCategory={setCategory} />
      {category ? <CateContent /> : null}
      <Main />
    </PageWrpper>
  );
}

const PageWrpper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
export default App;
