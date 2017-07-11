import React from 'react';
import PropTypes from 'prop-types';

const Banner = (props) => (
  <div className={'banner banner_' + props.type}>
    <h3>{props.title}</h3>
      <div className={props.hasWrap ? 'banner_wrap' : ''}>
        {props.children}
      </div>
  </div>
) // end Banner

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  hasWrap: PropTypes.bool
} // end Banner.propTypes


export default Banner;
