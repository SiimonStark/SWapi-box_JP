import React from 'react';
import PropTypes from 'prop-types';

const Button = ({name, updateTab}) => {
  return (
    <button id={name} onClick={updateTab}>
      {name}
    </button>
  )
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  updateTab: PropTypes.func.isRequired
}

export default Button;