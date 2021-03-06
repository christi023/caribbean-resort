import React from 'react';
import navData from '../../data/NavData';
import { NavLink } from 'react-router-dom';
//import { Link, animateScroll as scroll } from 'react-scroll';
import { Navbar, Nav, Container } from 'react-bootstrap';

//import $ from 'jquery';

// styles
import './Navbar.css';

// for changing navbar  color
/*$(window).scroll(function () {
  $('Navbar').toggleClass('scrolled', $(this).scrollTop() > 0);
}); */

export default function NavBar() {
  /*const scrollToTop = () => {
    scroll.scrollToTop();
  };*/
  return (
    <>
      <Navbar bg="light" variant="dark" expand="lg" collapseOnSelect className="navbar-fixed-top">
        <Container>
          <Navbar.Brand>
            <NavLink to="/">
              <span className="navbar-brand font-weight-bolder">Carib Suite</span>
            </NavLink>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {navData.map((item, i) => (
                <NavLink
                  to={item.link}
                  key={i}
                  className="nav-menu-links"
                  activeClassName="active_class"
                >
                  {item.title}
                </NavLink>
              ))}
              <br />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
