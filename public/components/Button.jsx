import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Button = (props) => (
  <button className={'btn btn_' + props.color}>
    {props.text}
  </button>
)

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export default Button;
