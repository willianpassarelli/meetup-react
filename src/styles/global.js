import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

/**
  * Edit Styles toasts
  */

.Toastify__toast-container {
    width: 320px;
  }

  .Toastify__toast--default {
    background: #fff;
    color: #aaa;
  }

  .Toastify__toast--info {
    background: #3498db;
  }

  .Toastify__toast--success {
    background: #07bc0c;
  }

  .Toastify__toast--warning {
    background: #f1c40f;
  }

  .Toastify__toast--error {
    background: #7159c1;
    border-radius: 4px;
    padding: 10px 20px;
    font: 14px Roboto, sans-serif;
  }
`;
