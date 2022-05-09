import styled from 'styled-components';

import Impression from '../impression';

function InfiniteScroll({ children, onNext }) {
  return (
    <Container>
      { children }
      <Impression onImpression={onNext}>
        <Sentinel />
      </Impression>
    </Container>
  );
}

const Container = styled.div`

`;

const Sentinel = styled.div`

`;

export default InfiniteScroll;
