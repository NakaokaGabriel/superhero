import React from 'react';

import { Container } from '../Container/styles';
import { Wrapper } from './styles';

function Header() {
  return (
    <Wrapper>
      <Container>
        <h1>Hero explorer</h1>
        <p>Search your favorite hero</p>
      </Container>
    </Wrapper>
  );
}

export default Header;
