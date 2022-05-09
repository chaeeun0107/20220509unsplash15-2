import styled from 'styled-components';

function GridList({ children, data = [], loading }) {
  if (loading) return 'loading...';
  return (
    <Container>
      <Row>
        {
          data.map((item, index) => (
            <Col key={item.id}>
              {children(item, index)}
            </Col>
          ))
        }
      </Row>
    </Container>
  );
}

const Container = styled.div`
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
`;

const Col = styled.div`
  width: 33.33%;
  padding: 0 10px;
  margin-bottom: 20px;
`;

export default GridList;
