import styled from 'styled-components';

import { useParams } from 'react-router-dom';

import SearchLnb from './components/searchLnb';
import SearchPhotos from './components/photos';
import SearchCollections from './components/collections';
import SearchUsers from './components/users';
import SearchHeader from './components/searchHeader';

function Search() {
  const { category } = useParams();

  return (
    <Container>
      <SearchLnb />
      <SearchHeader />
      {
        category === 'photos'
            && <SearchPhotos />
      }

      {
        category === 'collections'
            && <SearchCollections />
      }

      {
        category === 'users'
            && <SearchUsers />
      }
    </Container>
  );
}

const Container = styled.div`

`;

export default Search;
