import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  margin: 0 !important;
  display: ${props => (props.modal ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  padding: 0 10px;
`;

export const Container = styled.div`
  background: #fbfcfc;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;

  @media screen and (min-width: 559px) {
    display: flex;
  }

  @media screen and (min-width: 779px) {
    max-width: 700px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 900px;
  }

  img {
    height: 180px;
    width: 100%;
    border-radius: 4px 0 0 4px;

    @media screen and (min-width: 559px) and (max-width: 1024px) {
      height: auto;
      width: 250px;
    }

    @media screen and (min-width: 1024px) {
      height: auto;
      width: 350px;
    }
  }

  .content {
    overflow-y: scroll;
    height: 50vh;
    padding: 10px 5px;
    margin-left: 10px;

    @media screen and (min-width: 559px) {
      flex: 2;
    }

    h3 {
      color: #474c5f;
      font-size: 28px;
      text-align: center;
    }

    h4 {
      margin-top: 20px;
      color: #474c5f;

      @media screen and (min-width: 559px) {
        font-size: 18px;
      }
    }

    ul {
      margin-top: 5px;

      li {
        font-size: 12px;
        color: #474c5f;

        @media screen and (min-width: 559px) {
          font-size: 14px;
        }

        & + li {
          margin-top: 5px;

          @media screen and (min-width: 559px) {
            margin-top: 10px;
          }
        }
      }
    }
  }
`;

export const Close = styled.button`
  position: absolute;
  top: 10px;
  right: 5px;
  background: #474c5f;
  z-index: 100;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;

  @media screen and (min-width: 559px) {
    top: 10px;
    right: 10px;
  }
`;
