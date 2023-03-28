import React from 'react';
import PropTypes from 'prop-types';

const Screen = ({ result }) => <p id="bottom-value">{result}</p>;

Screen.propTypes = { result: PropTypes.string.isRequired };

export default Screen;
