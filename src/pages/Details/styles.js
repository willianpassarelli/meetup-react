import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    color: #fff;
    font-size: 32px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-self: flex-end;

    button {
      height: 42px;
      width: 116px;
      background: #4dbaf9;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.09, '#4DBAF9')};
      }

      div {
        display: flex;
        align-items: center;
        justify-content: center;

        strong {
          font-size: 16px;
        }

        svg {
          margin-right: 10px;
        }
      }
    }

    span {
      margin-left: 15px;

      button {
        height: 42px;
        width: 138px;
        background: #d44059;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s;

        &:hover {
          background: ${darken(0.05, '#D44059')};
        }

        div {
          display: flex;
          align-items: center;
          justify-content: center;

          strong {
            font-size: 16px;
          }

          svg {
            margin-right: 10px;
          }
        }
      }
    }
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 300px;
    margin-top: 50px;
    border-radius: 4px;
    object-fit: cover;
    background: rgba(0, 0, 0, 0.4);
  }

  p {
    font-size: 18px;
    font-weight: normal;
    color: #fff;
    margin-top: 25px;
  }

  span {
    display: flex;
    flex-direction: row;

    div {
      display: flex;
      margin: 30px 30px 0 0px;
      align-items: center;

      strong {
        font-weight: normal;
        font-size: 16px;
        color: rgba(255, 255, 255, 0.6);
      }

      svg {
        margin-right: 10px;
        color: rgba(255, 255, 255, 0.6);
      }
    }
  }
`;
