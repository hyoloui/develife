import styled from '@emotion/styled';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

function Navbar({ setCategory }) {
  const navigate = useNavigate();
  return (
    <HeaderWrapper>
      <NavWrapper>
        <h1>Develife</h1>
        <NavMenu onClick={() => setCategory('')}>
          <p>Home</p>
        </NavMenu>
        <NavMenu onClick={() => setCategory('training')}>
          <p>홈트레이닝</p>
        </NavMenu>
        <NavMenu onClick={() => setCategory('programing')}>
          <p>프로그래밍</p>
        </NavMenu>
        <NavMenu onClick={() => setCategory('review')}>
          <p>IT용품리뷰</p>
        </NavMenu>
      </NavWrapper>
      <AuthWrapper>
        <Button
          onClick={() => {
            navigate('/login');
          }}
          width="90px"
          height="35px"
        >
          로그인
        </Button>
        <Button
          onClick={() => {
            navigate('/signup');
          }}
          width="90px"
          height="35px"
        >
          회원가입
        </Button>
      </AuthWrapper>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  height: 100px;
`;
const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  font-size: 18px;
  width: 60%;
`;
const AuthWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
`;
const NavMenu = styled.nav`
  padding: 10px;
  display: flex;
  justify-content: center;
  text-align: center;
  width: 320px;
  &:hover {
    border-bottom: 3px solid black;
    font-weight: 700;
    cursor: pointer;
  }
`;

export default Navbar;
