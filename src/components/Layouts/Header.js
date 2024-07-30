import React, { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import "../../styles/HeaderStyle.css";
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo/logo.png";


function Header() {
  const [nav, setNav] = useState(false);

  //Scroll Navbar
  const changeValueOnScroll = ()=>{
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };

  window.addEventListener("scroll", changeValueOnScroll);

  return (
    <header>
    <Navbar collapseOnSelect expand="lg" className={`${nav === true ? "sticky" : ""}`}>
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/" className='logo'>
          <img src={Logo} alt='Logo' className='img-fluid' />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <a as={Link} href='#home' to="/home">Home</a>
            <a as={Link} href='#about' to="/about">About</a>
            <a as={Link} href='#menu' to="/menu">Our Menu</a>
            <a as={Link} href='#shop' to="/shop">Shop</a>
            <a as={Link} href='#blog' to="/blog">Blog</a>
            <a as={Link} href='#contact' to="/contact">Contact</a>
            <a as={Link} to="/">
              <div className="cart">
              <i class="bi bi-bag fs-5"></i>
              <em className='roundpoint'>2</em>
              </div>
            </a>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </header>
  )
}

export default Header