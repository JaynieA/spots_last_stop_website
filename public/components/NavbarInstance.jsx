import React from 'react';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const NavbarInstance = (props) => (
  <Navbar collapseOnSelect fixedTop fluid role='Navigation'>
    <Navbar.Header>
      <Navbar.Brand>
        <a href='/'>
          <img src={require('../assets/images/nav/navbar_logo.jpg')} className={'navbar_logo'}/>
        </a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href='/Home'>Home</NavItem>
        <NavDropdown eventKey={2} title='Adopt' id='adopt-nav-dropdown'>
          <MenuItem eventKey={2.1}>Adoptable Dogs</MenuItem>
          <MenuItem eventKey={2.2}>Adoption Application</MenuItem>
          <MenuItem eventKey={2.3}>FAQ's & Policies</MenuItem>
          <MenuItem eventKey={2.4}>Resources</MenuItem>
          <MenuItem eventKey={2.5}>Happy Tails</MenuItem>
          <MenuItem eventKey={2.6}>Update Us</MenuItem>
        </NavDropdown>
        <NavDropdown eventKey={3} title='Foster' id='foster-nav-dropdown'>
          <MenuItem eventKey={3.1}>Foster Application</MenuItem>
          <MenuItem eventKey={3.2}>FAQ's & Policies</MenuItem>
          <MenuItem eventKey={3.3}>Foster Update</MenuItem>
        </NavDropdown>
        <NavItem eventKey={4} href='#'>Events</NavItem>
        <NavDropdown eventKey={5} title='Support' id='support-nav-dropdown'>
          <MenuItem eventKey={5.1}>Donate</MenuItem>
          <MenuItem eventKey={5.2}>Our Partners</MenuItem>
        </NavDropdown>
        <NavDropdown eventKey={6} title='About' id='about-nav-dropdown'>
          <MenuItem eventKey={6.1}>About SLS</MenuItem>
          <MenuItem eventKey={6.2}>Our Team</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavbarInstance;
