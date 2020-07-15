import styled, { keyframes } from 'styled-components';

const loadAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  margin: 40px 0;
  border-radius: 4px;
  width: 100%;
  overflow: hidden;

  @media screen and (min-width: 779px) {
    overflow: unset;
  }

  .loading {
    width: 100%;
    text-align: center;
    animation: ${loadAnimation} 2s linear infinite;
  }
`;

export const Heroes = styled.div`
  display: flex;
  background: #fbfcfc;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.3s, opacity 0.2s;
  opacity: 1;

  &:hover {
    transform: translate3d(20px, 0, 0);
    opacity: 0.8;
  }

  + div {
    margin-top: 20px;
  }

  img {
    width: 80px;
    border-radius: 4px 0 0 4px;

    @media screen and (min-width: 779px) {
      width: 180px;
    }
  }
`;

export const Description = styled.div`
  flex: 1;
  margin-left: 20px;
  overflow-y: scroll;
  padding: 10px;

  @media screen and (min-width: 779px) {
    overflow-y: hidden;
  }

  h2 {
    color: #474c5f;
    font-size: 22px;

    @media screen and (min-width: 1024px) and (max-width: 1440px) {
      font-size: 26px;
    }

    @media screen and (min-width: 1440px) {
      font-size: 28px;
    }
  }

  .race {
    margin-top: 15px;

    h4 {
      font-weight: 300;
      color: #474c5f;
      font-size: 18px;
    }

    span {
      color: #474c5f;
      font-weight: 800;
      font-size: 18px;
      margin-top: 5px;
    }
  }
`;
