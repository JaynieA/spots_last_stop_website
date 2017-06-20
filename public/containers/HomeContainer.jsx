import React from 'react';
import PropTypes from 'prop-types';
import {Jumbotron} from 'react-bootstrap';

import BlurpSvg from '../components/BlurpSvg';

const SvgArrow = () => (
  <div className={'svg_arrow_contain'}>
    <div className={'jumbo_svg_arrow'}></div>
  </div>
) // end SvgArrow

class HomeContainer extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <div className={'jumbo_contain_half'}>
            <h1 className={'jumbo_header_half'}>
              Spot's Last Stop Canine Rescue
            </h1>
            <p className={'jumbo_subheader_half'}>
              Rescued is our favorite breed
            </p>
          </div>
        </Jumbotron>
        <BlurpSvg color={'#fff'} className={'jumbo_svg_contain'}/>
        <SvgArrow/>
        <div className={'home_banner home_banner_spotlight'}></div>
        <div className={'home_banner'}></div>
        <div className={'home_banner'}></div>
      </div>
    )
  }
}

export default HomeContainer;
