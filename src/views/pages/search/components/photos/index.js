import styled from 'styled-components';

import _ from 'lodash';

import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { searchPhotos } from '../../../../services/searchPhotos';
import MasonryList from '../../../../shared/list/MasonryList';
import IosSpinner from '../../../../shared/loader/IosSpinner';
import { ContentContainer } from '../../../../shared/layout/Layout.Styled';

function SearchPhotos() {
  const { query } = useParams();
  const dispatch = useDispatch();
  const { status, results } = useSelector((state) => state.search.photos);

  useEffect(() => {
    dispatch(searchPhotos({ query }));
  }, [query]);

  if (status === 'loading') return <IosSpinner />;
  if (status === 'error') return <p>error!!!</p>;
  if (_.isEmpty(results)) return <p>데이터가 없습니다.</p>;

  return (
    <Container>
      <MasonryList data={results} />
    </Container>
  );
}

const Container = styled(ContentContainer)`

`;

export default SearchPhotos;
