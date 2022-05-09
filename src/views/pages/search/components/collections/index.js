import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import { searchCollections } from '../../../../services/searchCollections';
import GridList from '../../../../shared/list/GridList';
import CollectionsItem from './CollectionsItem';
import { ContentContainer } from '../../../../shared/layout/Layout.Styled';

function SearchCollections() {
  const { query } = useParams();
  const dispatch = useDispatch();

  const { loading, results } = useSelector((state) => state.search.collections);

  useEffect(() => {
    dispatch(searchCollections({
      query,
      page: 1,
      per_page: 20,
    }));
  }, []);

  if (loading === 'loading') return <p>loading</p>;
  if (loading === 'error') return <p>error</p>;
  if (results?.length === 0) return <p>데이터가 존재하지 않습니다.</p>;

  return (
    <Container>
      <ContentContainer>
        <GridList data={results}>
          {(item) => <CollectionsItem key={item.id} item={item} />}
        </GridList>
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`

`;

export default SearchCollections;
