import React from 'react';
import PropTypes from 'prop-types';

const BlurpSvg = (props) => (
  <div className={props.containerClass}>
    <svg className={props.svgClass} width={'192'} height={'61'} version={'1.1'} x={'0px'} y={'0px'} viewBox={'0 0 160.7 61.5'} enableBackground={'new 0 0 160.7 61.5'} xmlSpace={'preserve'}>
      <path fill={props.color} d={'M80.3,61.5c0,0,22.1-2.7,43.1-5.4s41-5.4,36.6-5.4c-21.7,0-34.1-12.7-44.9-25.4S95.3,0,80.3,0c-15,0-24.1,12.7-34.9,25.4S22.3,50.8,0.6,50.8c-4.3,0-6.5,0,3.5,1.3S36.2,56.1,80.3,61.5z'}></path>
    </svg>
  </div>
) // end JumboSvg

BlurpSvg.propTypes = {
  color: PropTypes.string.isRequired,
  containerClass: PropTypes.string.isRequired,
  svgClass: PropTypes.string.isRequired
} // end JumboSvg.propTypes

export default BlurpSvg;
