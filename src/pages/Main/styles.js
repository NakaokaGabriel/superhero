import styled from 'styled-components';

export const Row = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;

    div {
      flex: 1;
    }

    div + div {
      flex: 3;
      margin-left: 40px;
    }
  }
`;
