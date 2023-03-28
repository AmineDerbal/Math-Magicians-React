import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ button, handleClick }) => (
  <button
    type="button"
    onClick={handleClick}
    id={button.id || null}
    className={button.class || null}
  >
    {button.value}
  </button>
);

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  button: PropTypes.shape({
    id: PropTypes.string,
    class: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
};

export default Button;
