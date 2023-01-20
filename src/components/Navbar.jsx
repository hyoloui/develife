import styled from '@emotion/styled';
import Button from './Button';

function Navbar() {
  return (
    <HeaderWrapper>
      <NavWrapper>
        <h1>Develife</h1>
        <NavMenu>Home</NavMenu>
        <NavMenu>홈트레이닝</NavMenu>
        <NavMenu>프로그래밍</NavMenu>
        <NavMenu>IT용품리뷰</NavMenu>
      </NavWrapper>
      <AuthWrapper>
        <Button width="90px" height="35px">
          로그인
        </Button>
        <Button width="90px" height="35px">
          회원가입
        </Button>
      </AuthWrapper>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: auto;
`;
const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  font-size: 18px;
  width: 70%;
`;
const AuthWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const NavMenu = styled.nav`
  padding: 10px;
  display: flex;
  width: 10%;
  justify-content: center;
  &:hover {
    border-bottom: 3px solid black;
    font-weight: 700;
  }
`;
const AuthBtn = styled.button`
  width: 90px;
  height: 35px;
  border-radius: 10px;
  border: none;
  background-color: darkgray;
  color: #fff;
`;
export default Navbar;
