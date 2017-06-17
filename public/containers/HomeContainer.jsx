import React from 'react';
import {Jumbotron} from 'react-bootstrap';

const JumboSvg = (props) => (
  <div className={'jumbo_svg_contain'}>
    <svg className={'jumbo_svg'} width={'192'} height={'61'} version={'1.1'} x={'0px'} y={'0px'} viewBox={'0 0 160.7 61.5'} enableBackground={'new 0 0 160.7 61.5'} xmlSpace={'preserve'}>
      <path fill={'#fff'} d={'M80.3,61.5c0,0,22.1-2.7,43.1-5.4s41-5.4,36.6-5.4c-21.7,0-34.1-12.7-44.9-25.4S95.3,0,80.3,0c-15,0-24.1,12.7-34.9,25.4S22.3,50.8,0.6,50.8c-4.3,0-6.5,0,3.5,1.3S36.2,56.1,80.3,61.5z'}></path>
    </svg>
  </div>
) // end JumboSvg

const SvgArrow = (props) => (
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
        <JumboSvg/>
        <SvgArrow/>
      </div>
    )
  }
}

export default HomeContainer;
