import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';
import Scroll from 'react-scroll';

import BlurpSvg from '../components/BlurpSvg';

const FooterCopyright = () => (
  <div className={'footer_copyright'}>
    <p>
      Copyright &copy; 2016
      <span className={'red-text'}>&nbsp;·&nbsp;</span>
      All Rights Reserved
      <span className={'red-text'}>&nbsp;· Spot's Last Stop</span>
    </p>
  </div>
)

const FooterLogo = () => (
  <img src={require('../assets/images/footer/footer_logo.jpg')} className={'footer_logo'}/>
)

const FooterLinksGrid = () => (
  <Grid className={'footer_body'}>
    <Row className="show-grid">
      <Col xsOffset={0} smOffset={1} xs={6} sm={2}>
        <h5>Navigate</h5>
        <NavLink exact activeClassName="active" to="/" className={'nav_link'}>
          Home
        </NavLink>
        <NavLink exact activeClassName="active" to="/about/AboutSLS" className={'nav_link'}>
          About Us
        </NavLink>
        <NavLink exact activeClassName="active" to="/foster/fosterapp" className={'nav_link'}>
          Foster Application
        </NavLink>
        <NavLink exact activeClassName="active" to="/adopt/adoptionapp" className={'nav_link'}>
          Adoption Application
        </NavLink>
        <NavLink exact activeClassName="active" to="/adopt/FAQandPolicies" className={'nav_link'}>
          Adoption FAQ's
        </NavLink>
      </Col>
      <Col xs={6} sm={2}>
        <h5>Support</h5>
        <NavLink exact activeClassName="active" to="/donate/donate" className={'nav_link'}>
          Donate
        </NavLink>
        <NavLink exact activeClassName="active" to="/donate/ourPartners" className={'nav_link'}>
          Our Partners
        </NavLink>
      </Col>
      <Col xs={12} sm={2}>
        <FooterLogo/>
      </Col>
      <Col xs={6} sm={2}>
        <h5>Contact</h5>
        <Link to="mailto: info@spotslaststop.org" className={'nav_link nav_link_light'}>
          info@spotslaststop.org
        </Link>
      </Col>
      <Col xs={6} sm={2}>
        <h5>Volunteers</h5>
        <NavLink exact activeClassName="active" to="/volunteers/home" className={'nav_link'}>
          Login
        </NavLink>
      </Col>
    </Row>
  </Grid>
)

const FooterSvgArrow = () => (
  <div className={'footer_svg_arrow'}>
    <div className={'footer_arrow_up'}></div>
    <div className={'footer_arrow_up'}></div>
  </div>
)

class FooterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAtBottom: false
    };
  } // end constructor

  handleSvgClick = () => {
    //Scroll to the top of the page
    const scroll = Scroll.animateScroll;
    scroll.scrollToTop();
  } // end handleSvgClick

  handleScroll = () => {
    const windowHeight = "innerHeight" in window
      ? window.innerHeight
      : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    const offset = 60;
    const windowBottom = windowHeight + window.pageYOffset + offset;
    if (windowBottom >= docHeight) {
      this.setState({
        isAtBottom: true
      });
    } else {
      this.setState({
        isAtBottom: false
      });
    } // end else
  } // end handleScroll

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  } // end componentDidMount

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  } // end componentWillUnmount

  render() {
    return (
      <div className={'footer_wrap'}>
        <BlurpSvg
          color={'#333'}
          containerClass={'footer_svg_contain'}
          svgClass={'footer_svg'}
          iconClass={'footer_svg_arrow'}
          controlFunc={this.handleSvgClick}
          isShown={this.state.isAtBottom}
        >
          <div className={'footer_arrow_up'}></div>
          <div className={'footer_arrow_up'}></div>
        </BlurpSvg>
        <footer className={'footer'}>
          <FooterLinksGrid/>
          <FooterCopyright/>
          <div>{this.state.message}</div>
        </footer>
      </div>
    )
  }
}

export default FooterContainer;
