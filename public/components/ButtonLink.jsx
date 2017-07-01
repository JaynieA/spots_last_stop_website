import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const ButtonLink = (props) => (
  <Link to={props.to} className='link_btn'>
    <button className={'btn btn_' + props.color + ' btn_' + props.type}>
      {props.text}
    </button>
  </Link>
)

ButtonLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequiredtus,
  type: PropTypes.string
}

export default ButtonLink;
