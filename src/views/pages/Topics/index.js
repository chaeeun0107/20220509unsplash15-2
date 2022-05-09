import styled from 'styled-components';
import { useSelector } from 'react-redux';

function Topics() {
  // const { topics, loading, error } = useTopics();
  const { list, status } = useSelector((state) => state.topics);

  // if (loading) return <p>loading...</p>;
  if (status === 'loading') return <p>loading..</p>;
  if (status === 'error') return <p>error!!!</p>;
  if (list.length === 0) return <p>데이터가 존재하지 않습니다.</p>;

  return (
    <Container>
      {
        list.map((item) => (
          <p key={item.title}>{item.title}</p>
        ))
      }
    </Container>
  );
}

const Container = styled.div`

`;

export default Topics;
