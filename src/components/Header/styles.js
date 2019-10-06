import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  height: 92px;
  background: #18161f;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 92px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      width: 31px;
      height: 32px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;

  div {
    text-align: right;
    margin-right: 30px;

    strong {
      display: block;
      color: #fff;
    }

    a {
      display: block;
      margin-top: 5px;
      color: #999;
    }
  }

  button {
    width: 71px;
    height: 42;
    border: 0;
    border-radius: 4px;
    background: #d44059;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    transition: background 0.2s;

    &:hover {
      background: ${lighten(0.03, '#d44059')};
    }
  }
`;
