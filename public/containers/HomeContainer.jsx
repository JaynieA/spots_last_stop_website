import React from 'react';
import PropTypes from 'prop-types';
import {Jumbotron} from 'react-bootstrap';
import Scroll from 'react-scroll';

import BlurpSvg from '../components/BlurpSvg';
import ButtonLink from '../components/ButtonLink';
import Banner from '../components/Banner';
import BannerHeaders from '../components/BannerHeaders';

const SvgArrow = () => (
  <div className={'svg_arrow_contain'}>
    <div className={'jumbo_svg_arrow'}></div>
  </div>
) // end SvgArrow

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
  } // end constructor

  handleSvgClick = () => {
    //Scroll down 1 full height of window
    const windowHeight = window.innerHeight;
    const scroll = Scroll.animateScroll;
    scroll.scrollTo(windowHeight);
  } // end handleSvgClick

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
          iconClass={'svg_arrow_contain'}
          controlFunc={this.handleSvgClick}
        >
          <div className={'jumbo_svg_arrow'}></div>
        </BlurpSvg>
        <Banner
          title='spotlight'
          type='spotlight'>
          <BannerHeaders
            headerText='Name Here'
            subheaderText='Breed Here'
          />
          <ButtonLink
            to='/adopt'
            text='More about *DogName*'
            type='content'
          />
        </Banner>
        <Banner
          title='News and Events'
          type='news'>
          <BannerHeaders
            headerText='Event Name Here'
            subheaderText='Date Here'
            optionalSubheaderText='Time Here'
          />
          <ButtonLink
            to='/events'
            text='Learn More'
            type='content'
          />
        <BannerHeaders
          headerText='Pupdate!'
          subheaderText='Where are they now?'
        />
          <ButtonLink
            to='/adopt'
            text='More about *DogName*'
            type='content'
          />
        </Banner>
        <Banner
          title='resources and partners'
          type='resources'>
          <BannerHeaders
            headerText='Resources'
            subheaderText='Helpful tips & tricks'
          />
          <ButtonLink
            to='/resources'
            text='Read More'
            type='content'
          />
        <BannerHeaders
          headerText='Our Partners'
          subheaderText='Training, Boarding, and Veterinary Care'
        />
          <ButtonLink
            to='/partners'
            text='Read More'
            type='content'
          />
        </Banner>
      </div>
    )
  }
}

export default HomeContainer;
