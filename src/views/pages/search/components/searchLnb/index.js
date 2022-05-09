import styled from 'styled-components';

import Nav from './Nav';

function SearchLnb() {
  return (
    <Container>
      <Nav />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  border-bottom: 1px solid #bbb;
  height: 56px;
`;

export default SearchLnb;
