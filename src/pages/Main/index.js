import React from 'react';

import { Container } from '../../components/Container/styles';
import { Row } from './styles';

import Header from '../../components/Header';
import Content from '../../components/Content';

function Main() {
  return (
    <Container>
      <Row>
        <Header />
        <Content />
      </Row>
    </Container>
  );
}

export default Main;
