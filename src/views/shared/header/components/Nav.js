import styled from 'styled-components';

import { IconBell, IconMenu } from '../../../../icons';

function Nav() {
  const active = false;
  return (
    <Container className={active ? 'active' : ''}>
      <NavItem>
        Advertise
      </NavItem>
      <NavItem>
        Blog
      </NavItem>
      <NavItem>
        <SubmitPhoto>
          Submit a photo
        </SubmitPhoto>
      </NavItem>
      <NavItem>
        <IconBell />
      </NavItem>
      <NavItem className="userMenu">
        <UserAvatar>
          <img
            src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
            alt="유저 아바타 이미지"
          />
        </UserAvatar>
      </NavItem>
      <NavItem>
        <IconMenu />
      </NavItem>
    </Container>
  );
}

const Container = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 30px;
  &.active{
    background-color: #18f;
  }
`;

const NavItem = styled.div`
  font-size: 14px;
  color: #767676;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
  padding: 12px;

  &:hover {
    color: #333;
  }

  &.userMenu{
    img{
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }
`;

const SubmitPhoto = styled.div`

`;

const UserAvatar = styled.div`

`;

export default Nav;
