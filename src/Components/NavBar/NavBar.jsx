import React from 'react'
import './NavBar.css';
import { Link } from "react-router-dom"
import image from '../images/Group 1.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Navbar, NavDropdown, Nav} from "react-bootstrap"
import '../query/Queries.css'
const NavBar = () => {
  return (
  <>
   
          <Navbar collapseOnSelect expand="lg">
          <Container>
              <div className="crossdiv">
                      <img src={image} alt="cross image" />
              </div>
            <Navbar.Toggle className='navbartoggler' aria-controls="basic-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto navheadings">
                <Nav.Link><h2>Our Story</h2></Nav.Link>
                <Nav.Link><h2>Benefits</h2></Nav.Link>
                <Nav.Link><h2>About Us</h2></Nav.Link>
                <Nav.Link><h2>Roadmap</h2></Nav.Link>
                <Nav.Link><Link style={{ textDecoration: 'none'}} to="/Solana"><h2 className='Limk'>Solona</h2></Link></Nav.Link>
                <div className="crossdiv">
                  <img src={image} alt="cross image" />
                </div>
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
  </>
  )
}

export default NavBar