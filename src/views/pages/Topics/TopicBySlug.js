import styled from 'styled-components';

import { useParams } from 'react-router-dom';

import TopicDetail from './components/topicDetail';

function TopicBySlug() {
  const params = useParams();
  const { slug } = params;
  // console.log('@@ slug', slug);
  return (
    <Container>
      {/* <TopicsLnb slug={slug} /> */}
      <TopicDetail slug={slug} />
    </Container>
  );
}

const Container = styled.div`

`;

export default TopicBySlug;
