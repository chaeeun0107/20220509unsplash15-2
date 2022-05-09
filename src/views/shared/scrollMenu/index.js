import styled, { css } from 'styled-components';

import { useEffect, useRef, useState } from 'react';

import { IconChevronLeft, IconChevronRight } from '../../../icons';

function ScrollMenu({ data = [], children }) {
  const navRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [maxScroll, setMaxScroll] = useState(1);

  const handleClickLeft = () => {
    // navRef.current.scrollLeft = navRef.current.scrollLeft - 300;
    navRef.current.scrollLeft += -300;
  };

  const handleClickRight = () => {
    // navRef.current.scrollLeft = navRef.current.scrollLeft + 300;
    navRef.current.scrollLeft += 300;
  };

  const handleScroll = (e) => {
    setScrollLeft(e.target.scrollLeft);
  };

  useEffect(() => {
    if (navRef.current) {
      setScrollLeft(navRef.current.scrollLeft);
      setMaxScroll(navRef.current.scrollWidth - navRef.current.clientWidth);
    }
  }, [data]);

  const start = scrollLeft === 0;
  const end = scrollLeft >= maxScroll;

  return (
    <Container>
      {
        !start && (
          <>
            <FogLeft />
            <ButtonPrev onClick={handleClickLeft}>
              <IconChevronLeft />
            </ButtonPrev>
          </>
        )
      }

      <Nav
        className="Nav"
        ref={navRef}
        onScroll={handleScroll}
      >
        {
          data.map((item) => children(item))
        }
      </Nav>
      {
        !end && (
          <>
            <ButtonNext onClick={handleClickRight}>
              <IconChevronRight />
            </ButtonNext>
            <FogRight />
          </>
        )
      }

    </Container>
  );
}

const Container = styled.div`
  position: relative;
  overflow: hidden;
`;

const Nav = styled.div`
  display: flex;
  overflow: auto;
  scroll-behavior: smooth;
`;

const buttonStyle = css`
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  cursor: pointer;
`;

const ButtonPrev = styled.div`
  ${buttonStyle};
  left: 0;
`;

const ButtonNext = styled.div`
  ${buttonStyle};
  right: 0;
`;

const fogStyle = css`
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 10;
  width: 200px;
  pointer-events: none;
`;

const FogLeft = styled.div`
  ${fogStyle};
  left: 0;
  background: linear-gradient(270deg, #fff0 0, #fff 90%, #fff);
`;

const FogRight = styled.div`
  ${fogStyle};
  right: 0;
  background: linear-gradient(90deg, #fff0 0, #fff 90%, #fff);
`;

export default ScrollMenu;
