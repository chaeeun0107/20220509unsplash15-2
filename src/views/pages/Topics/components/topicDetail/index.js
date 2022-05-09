import styled from 'styled-components';

import useTopicBySlug from '../../hooks/useTopicBySlug';
import TopicHeader from './TopicHeader';
import useTopicPhotos from '../../hooks/useTopicPhotos';
import MasonryList from '../../../../shared/list/MasonryList';

function TopicDetail({ slug }) {
  const { data, loading, error } = useTopicBySlug(slug);
  const { data: photos, loading: photosLoading } = useTopicPhotos(slug);

  if (loading) return <p>loading..</p>;
  if (error) return <p>error!!!</p>;

  return (
    <Container>
      <TopicHeader data={data} />
      <MasonryList data={photos} />
    </Container>
  );
}

const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
`;

export default TopicDetail;
