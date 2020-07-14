import React from 'react';

import { Container } from '../../components/Container/styles';
import { Row } from './styles';

import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import Content from '../../components/Content';

function Main() {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Navigation />
          <Content />
        </Row>
      </Container>
    </>
  );
}

export default Main;
