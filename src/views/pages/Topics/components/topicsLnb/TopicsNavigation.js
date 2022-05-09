import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import cn from 'classnames';

import { Link } from 'react-router-dom';

import { fetchTopics } from '../../../../services/fetchTopics';
import ScrollMenu from '../../../../shared/scrollMenu';

function TopicsNavigation({ slug }) {
  const dispatch = useDispatch();
  const { list, status } = useSelector((state) => state.topics);

  useEffect(() => {
    dispatch(fetchTopics());
  }, []);

  if (status === 'loading') return <p>loading..</p>;
  if (list.length === 0 || status === 'error') return null;

  return (
    <Container>
      <MenuItem to="/" className="Editorial">
        Editorial
        <span />
      </MenuItem>
      <ScrollMenu data={list}>
        {(item) => <MenuItem to={`/topics/${item.slug}`} className={cn('MenuItem', { isActive: item.slug === slug })}>{item.title}</MenuItem>}
      </ScrollMenu>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  white-space: nowrap;
  margin: 0 12px;
  font-size: 14px;
  color: #767676;
  height: 56px;
  border-bottom: 2px solid transparent;
  &.isActive{
    border-bottom-color: #000;
  }
  &.Editorial {
    position: relative;
    span {
      width: 1px;
      height: 32px;
      background: #bbb;
      margin-left: 20px;
    }
  }
`;

export default TopicsNavigation;
