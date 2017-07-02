import React from 'react';
import PropTypes from 'prop-types';

const Banner = (props) => (
  <div className={'banner banner_' + props.type}>
    <h3>{props.title}</h3>
    {props.children}
  </div>
) // end Banner

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
} // end Banner.propTypes


export default Banner;
