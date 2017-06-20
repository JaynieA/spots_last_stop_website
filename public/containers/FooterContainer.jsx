import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';

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



class FooterContainer extends React.Component {
  render() {
    return (
      <div className={'footer_wrap'}>
        <div>SVG HERE</div>

        <footer className={'footer'}>


          <FooterLinksGrid/>
          <FooterCopyright/>
        </footer>
      </div>
    )
  }
}

export default FooterContainer;
