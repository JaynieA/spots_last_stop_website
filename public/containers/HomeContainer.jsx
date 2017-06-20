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
  constructor(props) {
    super(props);
  }

  handleSvgClick = () => {
    console.log('handle svg click--> scroll down a bit');
  }

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
        <BlurpSvg
          color={'#fff'}
          containerClass={'jumbo_svg_contain'}
          svgClass={'jumbo_svg'}
          controlFunc={this.handleSvgClick}
        />
        <SvgArrow/>
        <div className={'home_banner home_banner_spotlight'}></div>
        <div className={'home_banner'}></div>
        <div className={'home_banner'}></div>
      </div>
    )
  }
}

export default HomeContainer;
