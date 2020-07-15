import React from 'react';

import { Container } from '../../components/Container/styles';

import Header from '../../components/Header';
import Search from '../../components/Search';
import Content from '../../components/Content';

function Main() {
  return (
    <>
      <Header />
      <Container>
        <Search />
        <Content />
      </Container>
    </>
  );
}

export default Main;
