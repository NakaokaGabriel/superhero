import styled from 'styled-components';

export const Container = styled.div`
  margin: 10px 10px;

  @media screen and (min-width: 779px) {
    margin: 20px auto;
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
