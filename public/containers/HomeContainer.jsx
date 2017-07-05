import React from 'react';
import PropTypes from 'prop-types';
import {Jumbotron} from 'react-bootstrap';
import Scroll from 'react-scroll';

import BlurpSvg from '../components/BlurpSvg';
import ButtonLink from '../components/ButtonLink';
import Banner from '../components/Banner';
import BannerContentBlock from '../components/BannerContentBlock';

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
    const lorem = 'Cake danish toffee donut dragée. Candy chocolate cake carrot cake pudding sweet roll tootsie roll marshmallow. Sweet roll icing marshmallow cupcake cookie. Cotton candy cupcake gingerbread biscuit macaroon. Cheesecake gummies sugar plum sweet. Tootsie roll macaroon chocolate cake halvah liquorice cake tootsie roll cheesecake brownie. Chocolate gummies biscuit jelly beans. Cookie sugar plum sweet bear claw marzipan pastry tootsie roll jelly-o wafer. Wafer lemon drops apple pie jujubes. Gummi bears chocolate cake wafer sesame snaps danish brownie. '
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
          <BannerContentBlock
            headerText='Name Here'
            subheaderText='Breed Here'
            contentText={lorem}
          >
            <ButtonLink
              to='/adopt'
              text='More about *DogName*'
              type='content'
            />
        </BannerContentBlock>
        </Banner>
        <Banner
          title='News and Events'
          type='news'>
          <BannerContentBlock
            headerText='Event Name Here'
            subheaderText='Date Here'
            optionalSubheaderText='Time Here'
            contentText={lorem}
          >
            <ButtonLink
              to='/events'
              text='Learn More'
              type='content'
            />
          </BannerContentBlock>
          <BannerContentBlock
            headerText='Pupdate!'
            subheaderText='Where are they now?'
            contentText={lorem}
          >
            <ButtonLink
              to='/adopt'
              text='More about *DogName*'
              type='content'
            />
          </BannerContentBlock>
        </Banner>
        <Banner
          title='resources and partners'
          type='resources'>
          <BannerContentBlock
            headerText='Resources'
            subheaderText='Helpful tips & tricks'
            contentText={lorem}
          >
          <ButtonLink
            to='/resources'
            text='Read More'
            type='content'
          />
          </BannerContentBlock>
          <BannerContentBlock
            headerText='Our Partners'
            subheaderText='Training, Boarding, and Veterinary Care'
            contentText={lorem}
          >
            <ButtonLink
              to='/partners'
              text='Read More'
              type='content'
            />
          </BannerContentBlock>
        </Banner>
      </div>
    )
  }
}

export default HomeContainer;
