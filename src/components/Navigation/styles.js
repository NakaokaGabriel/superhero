import styled from 'styled-components';

export const Container = styled.div`
  overflow-x: hidden;

  h1 {
    color: #c4c4c4;
    font-size: 32px;
    text-align: center;

    @media screen and (min-width: 779px) and (max-width: 1024px) {
      font-size: 36px;
    }

    @media screen and (min-width: 1024px) and (max-width: 1440px) {
      font-size: 46px;
    }

    @media screen and (min-width: 1440px) {
      font-size: 46px;
    }
  }

  p {
    font-weight: 300;
    color: #fbfcfc;
    margin-bottom: 20px;
    text-align: center;
    font-size: 14px;

    @media screen and (min-width: 779px) and (max-width: 1024px) {
      font-size: 20px;
    }

    @media screen and (min-width: 1024px) and (max-width: 1440px) {
      font-size: 24px;
    }

    @media screen and (min-width: 1440px) {
      font-size: 24px;
    }
  }

  @media screen and (min-width: 779px) {
    h1,
    p {
      text-align: left;
    }
  }

  form {
    margin: 20px 0;

    h3 {
      color: #474c5f;
      font-size: 32px;
    }

    .input {
      margin-top: 5px;
      position: relative;
      overflow: hidden;

      input {
        display: block;
        width: 100%;
        border: none;
        background: #fbfcfc;
        border-radius: 4px;
        height: 40px;
        padding-left: 10px;

        &::placeholder {
          color: #c4c4c4;
        }
      }

      button {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        background: transparent;
        border: none;
        padding: 0 10px;

        &::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          height: 70%;
          width: 1px;
          background: #c4c4c4;
          transform: translate3d(0, -50%, 0);
        }
      }
    }
  }
`;

export const Famous = styled.div`
  margin: 20px 0;

  h3 {
    color: #474c5f;
    font-size: 32px;
  }

  .heroes {
    display: flex;
    align-items: center;
    width: 100%;
    overflow-x: scroll;
    margin-top: 5px;

    button {
      border: none;
      background: none;

      & + button {
        margin-left: 10px;
      }

      img {
        border-radius: 4px;
        max-width: 80px;
      }
    }
  }
`;
