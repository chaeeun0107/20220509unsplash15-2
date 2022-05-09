import styled from 'styled-components';

function PhotoItem({ item }) {
  const onClick = () => {
    console.log('@@ 1', 1);
  };

  return (
    <Container
      className="photoItem"
      onClick={onClick}
    >
      <img src={item?.urls?.regular} alt="" />
      <Desc>
        <p>{item?.user?.name}</p>
      </Desc>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  
  img {
    width: 100%;
    object-fit: cover;
  }
`;

const Desc = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: 0.4s;
  padding: 10px;
  color: #fff;

  .PhotoItem:hover & {
    opacity: 1;
  }
`;

export default PhotoItem;
