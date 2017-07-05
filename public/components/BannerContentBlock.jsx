import React from 'react';
import PropTypes from 'prop-types';

import LineBreak from '../components/LineBreak';

const BannerContentBlock = (props) => (
  <div className='banner_content'>
    <h2>{props.headerText}</h2>
    <h4>{props.subheaderText}</h4>
    {props.optionalSubheaderText &&
      <h4 className='banner_subheader'>{props.optionalSubheaderText}</h4>
    }
    <LineBreak/>
    <p>{props.contentText}</p>
    {props.children}
  </div>
) // end BannerContentBlock

BannerContentBlock.propTypes = {
  headerText: PropTypes.string.isRequired,
  subheaderText: PropTypes.string.isRequired,
  optionalSubheaderText: PropTypes.string,
  contentText: PropTypes.string.isRequired
} // end propTypes

export default BannerContentBlock;
