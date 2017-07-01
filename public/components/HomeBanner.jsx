import React from 'react';
import PropTypes from 'prop-types';

const HomeBanner = (props) => (
  <div className={'home_banner home_banner_' + props.type}>
    <h3>{props.title}</h3>
    {props.children}
  </div>
) // end HomeBanner

HomeBanner.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
} // end HomeBanner.propTypes


export default HomeBanner;
