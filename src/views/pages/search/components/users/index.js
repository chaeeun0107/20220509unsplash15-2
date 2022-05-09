import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { searchUsers } from '../../../../services/searchUsers';
import GridList from '../../../../shared/list/GridList';
import UsersItem from './UsersItem';

function SearchUsers() {
  const { query } = useParams();
  const dispatch = useDispatch();

  const { loading, results } = useSelector((state) => state.search.users);

  useEffect(() => {
    dispatch(searchUsers({
      page: 1,
      per_page: 30,
      query,
    }));
  }, []);

  if (loading === 'loading') return <p>loading</p>;
  if (loading === 'error') return <p>error</p>;
  if (results?.length === 0) return <p>데이터가 존재하지 않습니다.</p>;

  return (
    <Container>
      <GridList data={results}>
        {(item) => <UsersItem key={item.id} item={item} />}
      </GridList>
    </Container>
  );
}

const Container = styled.div`

`;

export default SearchUsers;
