import React from 'react';
import PropTypes from 'prop-types';

import LineBreak from '../components/LineBreak';

const BannerHeaders = (props) => (
  <div>
    <h2 className='banner_header'>{props.headerText}</h2>
    <h4 className='banner_subheader'>{props.subheaderText}</h4>
    {props.optionalSubheaderText &&
      <h4 className='banner_subheader'>{props.optionalSubheaderText}</h4>
    }
    <LineBreak/>
  </div>
) // end BannerHeaders

BannerHeaders.propTypes = {
  headerText: PropTypes.string.isRequired,
  subheaderText: PropTypes.string.isRequired,
  optionalSubheaderText: PropTypes.string
} // end propTypes

export default BannerHeaders;
