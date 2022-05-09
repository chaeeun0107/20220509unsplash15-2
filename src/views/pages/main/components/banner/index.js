import styled from 'styled-components';

import SearchBox from '../../../../shared/searchBox';

function Banner() {
  return (
    <Container>
      <Contents>
        <h1>Unsplash</h1>
        <p>
          The internet’s source of
          {' '}
          <a href="#">freely-usable images.</a>
          <br />
          Powered by creators everywhere.
        </p>
        <SearchBox shape="square" />
      </Contents>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  background: url('https://images.unsplash.com/photo-1646330098429-425365acc972?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60') 50% 50% / cover no-repeat;
`;

const Contents = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 700px;
`;

export default Banner;
