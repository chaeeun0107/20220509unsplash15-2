import styled from 'styled-components';

import { useLocation } from 'react-router-dom';

import TopicsNavigation from './TopicsNavigation';

function TopicsLnb({ slug }) {
  const location = useLocation();
  const isVisible = location.pathname === '/' || location.pathname === '/topics' || location.pathname.startsWith('/topics/');
  if (!isVisible) return null;

  return (
    <TopicsNavigation />
  );
}

const Container = styled.div`

`;

export default TopicsLnb;
