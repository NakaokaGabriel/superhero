import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 10px;

  @media screen and (min-width: 779px) {
    margin: 0 auto;
  }

  @media screen and (min-width: 779px) and (max-width: 1024px) {
    max-width: 779px;
  }

  @media screen and (min-width: 1024px) and (max-width: 1440px) {
    max-width: 1024px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;
