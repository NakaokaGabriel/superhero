import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #474c5f;
  padding: 30px 0;

  @media screen and (min-width: 779px) and (max-width: 1024px) {
    padding: 40px 0;
  }

  @media screen and (min-width: 1024px) and (max-width: 1440px) {
    padding: 50px 0;
  }

  @media screen and (min-width: 1440px) {
    padding: 60px 0;
  }

  h1,
  p {
    color: #f0f0f4;
  }

  @media screen and (min-width: 779px) and (max-width: 1024px) {
    h1 {
      font-size: 36px;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1440px) {
    h1 {
      font-size: 42px;
    }
  }

  @media screen and (min-width: 1440px) {
    h1 {
      font-size: 44px;
    }
  }

  p {
    font-weight: 300;
    margin-top: 5px;
  }
`;
