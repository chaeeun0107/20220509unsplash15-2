import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';

import { useEffect, useState } from 'react';

import { fetchPhotos } from '../../../../services/fetchPhotos';
import MasonryList from '../../../../shared/list/MasonryList';
import InfiniteScroll from '../../../../shared/infiniteScroll';

function PhotoList() {
  const dispatch = useDispatch();

  const { status, list } = useSelector((state) => state.photos);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchPhotos({
      per_page: 10,
      page,
    }));
  }, [page]);

  const handleNext = () => {
    console.log('@@ next');
    setPage((p) => p + 1);
  };

  // if (status !== 'success') return <p>error!!!</p>;
  if (status === 'error') return <p>error!!!</p>;
  if (list.length === 0) return <p>loading..</p>;

  return (
    <Container>
      <InfiniteScroll onNext={handleNext}>
        <MasonryList data={list} />
      </InfiniteScroll>
    </Container>
  );
}

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 15px;
`;

export default PhotoList;
