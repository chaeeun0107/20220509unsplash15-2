import styled from 'styled-components';

import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { GlobalStyle } from './styles/GlobalStyle';
import Header from './views/shared/header';
import Main from './views/pages/main';
import Search from './views/pages/search';
import Topics from './views/pages/Topics';
import TopicBySlug from './views/pages/Topics/TopicBySlug';
import NotFound from './views/pages/results/NotFound';
import TopicsLnb from './views/pages/Topics/components/topicsLnb';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <TopicsLnb />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search/:category/:query" element={<Search />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/:slug" element={<TopicBySlug />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}

const Container = styled.div` 

`;

export default App;
