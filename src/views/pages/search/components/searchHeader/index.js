import styled from 'styled-components';

import { Link, useParams } from 'react-router-dom';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { ContentContainer } from '../../../../shared/layout/Layout.Styled';
import ScrollMenu from '../../../../shared/scrollMenu';
import { searchRelated } from '../../../../services/searchRelated';

function SearchHeader() {
  const dispatch = useDispatch();
  const related = useSelector((state) => state.search.related);
  const { query } = useParams();

  useEffect(() => {
    dispatch(searchRelated({
      query,
      per_page: 30,
    }));
  }, [query]);

  return (
    <ContentContainer>
      <Container>
        <h1>{query}</h1>
        <ScrollMenu data={related}>
          {(item) => <MenuItem to={`/search/photos/${item.title.replace(' ', '-')}`}>{item.title}</MenuItem>}
        </ScrollMenu>
      </Container>
    </ContentContainer>
  );
}

const Container = styled.div`
  padding: 60px 0 72px;

  h1 {
    font-size: 46px;
    margin-bottom: 20px;
    font-weight: bold;
    color: #111;
    text-transform: uppercase;
  }
`;

const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 143px;
  height: 40px;
  white-space: nowrap;
  margin: 0 4px;
  flex-shrink: 0;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  color: #777;
  text-transform: capitalize;
  padding-top: 2px;

  &:hover {
    border-color: #111;
    color: #111;
    cursor: pointer;
  }
`;

export default SearchHeader;
