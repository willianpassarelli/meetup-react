import React from 'react';
import PropTypes from 'prop-types';

import { MdAddCircleOutline } from 'react-icons/md';

import { Container } from './styles';

export default function Button({ text }) {
  return (
    <Container>
      <button type="submit">
        <div>
          <MdAddCircleOutline size={20} color="#fff" />
          <strong>{text}</strong>
        </div>
      </button>
    </Container>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
