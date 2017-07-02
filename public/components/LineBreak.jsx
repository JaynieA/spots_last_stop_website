import React from 'react';
import PropTypes from 'prop-types';

const LineBreak = (props) => (
  <div className={'break break_' + props.color}></div>
) // end LineBreak

LineBreak.propTypes = {
  color: PropTypes.string.isRequired
} // end LineBreak.propTypes

LineBreak.defaultProps = {
  color: 'red'
} // LineBreak.defaultProps

export default LineBreak;
