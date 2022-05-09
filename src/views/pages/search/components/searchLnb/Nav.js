import styled from 'styled-components';

import { Link, useParams } from 'react-router-dom';

import cn from 'classnames';

import { IconCollections, IconImage, IconUsers } from '../../../../../icons';

function Nav() {
  const { category, query } = useParams();

  const menus = [
    { name: 'photos', icon: <IconImage /> },
    { name: 'collections', icon: <IconCollections /> },
    { name: 'users', icon: <IconUsers /> },
  ];

  return (
    <Container>
      {
        menus.map((menu, index) => (
          <NavItem key={index} className={cn({ isActive: category === menu.name })}>
            <Link to={`/search/${menu.name}/${query}`}>
              {menu.icon}
              {menu.name}
            </Link>
          </NavItem>
        ))
      }
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;

`;

const NavItem = styled.div`
  padding: 0 16px;

  &.isActive{
    a{
      border-bottom-color: #111;
    }
  }
  a{
    display: flex;
    align-items: center;
    height: 56px;
    font-size: 14px;
    color: #767676;
    font-weight: 500;
    text-transform: capitalize;
    transition: 0.4s;
    border-bottom: 2px solid transparent;
    &:hover{
      color: #111;
      svg{
        fill: #111;
      }
    }
  }
  svg {
    width: 18px;
    margin-right: 8px;
    fill: #bbb;
  }

`;

export default Nav;
