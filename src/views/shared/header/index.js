import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';

import { IconLogo } from '../../../icons';
import Nav from './components/Nav';
import SearchBox from '../searchBox';

function Header() {
  const navigate = useNavigate();

  return (
    <Container className="Header">
      <Logo onClick={() => navigate('/')}>
        <IconLogo />
      </Logo>
      <SearchBox shape="round" />
      <Nav />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
`;
const Logo = styled.div`
  margin-right: 20px;
`;

export default Header;
