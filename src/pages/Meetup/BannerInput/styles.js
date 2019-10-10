import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 20px;

  label {
    display: flex;
    width: 100%;
    height: 300px;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.4);

    cursor: pointer;

    div {
      display: flex;
      align-items: center;
      flex-direction: column;

      svg {
        color: rgba(255, 255, 255, 0.3);
      }

      strong {
        font-size: 20px;
        color: rgba(255, 255, 255, 0.3);
      }
    }

    &:hover {
      opacity: 0.7;
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
      object-fit: cover;
    }

    input {
      display: none;
    }
  }
`;
