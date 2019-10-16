import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      color: #fff;
      font-size: 32px;
      font-weight: bold;
    }
  }

  ul {
    display: flex;
    margin-top: 50px;
    flex-direction: column;

    a {
      margin-top: 10px;
    }
  }
`;

export const List = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 62px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 20px 30px;
  transition: background 0.2s;

  cursor: pointer;

  &:hover {
    background: ${lighten(0.05, 'rgba(0, 0, 0, 0.1)')};
  }

  & + li {
    margin-top: 10px;
  }

  strong {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    span {
      align-self: flex-end;
      color: rgba(255, 255, 255, 0.6);
      font-size: 16px;
    }

    svg {
      margin-left: 30px;
    }
  }
`;
