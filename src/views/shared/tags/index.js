import styled from 'styled-components';

function Tags({ tags }) {
  return (
    <Container>
      {
        tags.map((item) => <Tag key={item.title}>{item.title}</Tag>)
      }
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.div`
 padding: 0 8px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  color: #333;
  background: #eee;
  border-radius: 3px;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  margin-right: 8px;
  margin-top: 8px;
  text-transform: capitalize;
`;

export default Tags;
