import styled from 'styled-components';

import Banner from './components/banner';
import PhotoList from './components/photoList';

const getPhotos = () => {

};
function Main() {
  return (
    <Container
      className="Main"
      ref={(el) => console.log('@@ ref', el)}
    >
      <Banner />
      <PhotoList />
    </Container>
  );
}

const Container = styled.div`
`;

export default Main;
