import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';

function Impression({ children, onImpression }) {
  const ref = useRef();
  const [inView, setInView] = useState();

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setInView(entry.isIntersecting);
      });
    }, {
      rootMargin: '10px 20px 0px 40px',
    });

    observer.observe(ref.current);
    return () => {
      observer.unobserve(ref.current);
    };
  }, [ref.current]);

  useEffect(() => {
    if (!inView) return;
    onImpression?.();
  }, []);

  return (
    <Container ref={ref}>
      { children }
    </Container>
  );
}

const Container = styled.div`
`;

export default Impression;
