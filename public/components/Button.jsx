import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Button = (props) => (
  <div className={'btn'}>
    {props.text}
  </div>
)

Button.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Button;
