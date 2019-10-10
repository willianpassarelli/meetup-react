import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  align-self: flex-end;

  button {
    height: 42px;
    width: 162px;
    background: #f94d6a;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.05, '#f94d6a')};
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
`;
