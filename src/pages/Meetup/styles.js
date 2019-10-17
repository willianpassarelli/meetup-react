import styled from 'styled-components';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    input {
      width: 100%;
      height: 50px;
      border: 0;
      padding: 0 15px;
      margin: 0 0 10px;
      color: #fff;
      font-weight: 700;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.1);

      &:focus {
        border-left: 2px solid #d44059;
      }
    }

    textarea {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 200px;
      padding: 15px;
      color: #fff;
      margin: 0 0 10px;
      font-weight: 700;
      resize: none;

      &:focus {
        border-left: 2px solid #d44059;
      }
    }

    span {
      color: #f94d6a;
      align-self: flex-start;
      margin: 0 0 10px 5px;
      font-weight: bold;
    }
  }
`;
