import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class NavbarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: null,
      isOpen: {
        adopt: false,
        foster: false,
        support: false,
        about: false
      }
    } // end this.state
  } // end constructor

  handleOpen = (key) => (e) => {
    this.handleOpenReset(key);
    this.setState({
      isOpen: { ...this.state.isOpen, [key]: true },
    }); // end setState
  } // end handleOpen

  handleOpenReset = (key) => {
    //Prevent multiple open dropdowns
    for (name in this.state.isOpen) {
      if (name !== key) {
        this.state.isOpen[name] = false;
      } // end if
    } // end for
  } // end handleOpenReset

  handleClose = (key) => (e) => {
    this.setState({
      isOpen: { ...this.state.isOpen, [key]: false },
    }); // end setState
  } // end handleClose

  handleResize = () => {
    window.innerWidth > 766
      ? this.setState({isCollapsed: false})
      : this.setState({isCollapsed: true})
  } // end handleResize

  componentDidMount = () => {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  } // end componentDidMount

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleResize);
  } // end componentWillUnmount

  render() {
    let isCollapsed = this.state.isCollapsed;
    return (
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
            <NavDropdown
              eventKey={2}
              title='Adopt'
              id='adopt-nav-dropdown'
              onMouseEnter = {!isCollapsed ? this.handleOpen('adopt') : null}
              onMouseLeave = {!isCollapsed ? this.handleClose('adopt') : null}
              open = {this.state.isOpen.adopt}
              onToggle = {this.state.isOpen.adopt ? this.handleClose('adopt') : this.handleOpen('adopt')}>
              <MenuItem eventKey={2.1}>Adoptable Dogs</MenuItem>
              <MenuItem eventKey={2.2}>Adoption Application</MenuItem>
              <MenuItem eventKey={2.3}>FAQ's & Policies</MenuItem>
              <MenuItem eventKey={2.4}>Resources</MenuItem>
              <MenuItem eventKey={2.5}>Happy Tails</MenuItem>
              <MenuItem eventKey={2.6}>Update Us</MenuItem>
            </NavDropdown>
            <NavDropdown
              eventKey={3}
              title='Foster'
              id='foster-nav-dropdown'
              onMouseEnter = {!isCollapsed ? this.handleOpen('foster') : null}
              onMouseLeave = {!isCollapsed ? this.handleClose('foster') : null}
              open = { this.state.isOpen.foster }
              onToggle = {this.state.isOpen.foster ? this.handleClose('foster') : this.handleOpen('foster')}>
              <MenuItem eventKey={3.1}>Foster Application</MenuItem>
              <MenuItem eventKey={3.2}>FAQ's & Policies</MenuItem>
              <MenuItem eventKey={3.3}>Foster Update</MenuItem>
            </NavDropdown>
            <NavItem eventKey={4} href='#'>Events</NavItem>
            <NavDropdown
              eventKey={5}
              title='Support'
              id='support-nav-dropdown'
              onMouseEnter = {!isCollapsed ? this.handleOpen('support') : null}
              onMouseLeave = {!isCollapsed ? this.handleClose('support') : null}
              open = { this.state.isOpen.support }
              onToggle = {this.state.isOpen.support ? this.handleClose('support') : this.handleOpen('support')}>
              <MenuItem eventKey={5.1}>Donate</MenuItem>
              <MenuItem eventKey={5.2}>Our Partners</MenuItem>
            </NavDropdown>
            <NavDropdown
              eventKey={6}
              title='About Us'
              id='about-nav-dropdown'
              onMouseEnter = {!isCollapsed ? this.handleOpen('about') : null}
              onMouseLeave = {!isCollapsed ? this.handleClose('about') :null}
              open = { this.state.isOpen.about }
              onToggle = {this.state.isOpen.about ? this.handleClose('about') : this.handleOpen('about')}>
              <MenuItem eventKey={6.1}>About SLS</MenuItem>
              <MenuItem eventKey={6.2}>Our Team</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
};

export default NavbarContainer;
