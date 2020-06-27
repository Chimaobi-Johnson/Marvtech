import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { theme } from "../../constants/theme";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Collapse
} from "shards-react";

import "./Navbar.css";



const StyledNavbar = styled(Navbar)`
   position: fixed;
   width: 100%;
   z-index: 1000;
   top: 0;
   left: 0;
   transition: all .7s;
   padding: 0.1rem 1.5rem;
   border-bottom: none;
   /* background-color: #4190e8;   */
   .navbar-toggler {
       border: 1px solid #9e9e9eb8;
       background-color: transparent;
       border-radius: none;
       padding: .3rem .3rem;
   }
`;

const StyledCollapse = styled(Collapse)`
    justify-content: flex-end;
`;

const StyledNavLink = styled.a`
    padding: 0 .8rem;
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    &:hover {
      color: #04a1ff;
      text-decoration: none;
    }
`;

const StyledNavBrand = styled(NavLink)`
      color: #fff;
      font-weight: bold;
      font-family: sans-serif;
      font-size: 1.2rem;
      text-transform: uppercase;
      padding-top: .625rem;
      padding-bottom: .625rem;
      margin-right: 1.5rem;
      display: inline-block;
      text-decoration: none;
      &:hover {
        color: ${theme.colors.mediumBlue};
        text-decoration: none;
      }
`;

const StyledNavItem = styled(NavItem)`
      font-weight: 500;
      text-transform: uppercase;
      font-size: 1rem;
      font-family: 'Share Tech', sans-serif;
`;


const NavigationBar = props => {

  useEffect(() => {
    window.onscroll = function() {updateHeader()};

    const header = document.getElementById("navheader");

    function updateHeader() {
      if (window.pageYOffset > 200) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
}, [])

  const [ dropdownOpen, setDropdown ] = useState(false);
  const [ collapseOpen, setCollapse ] = useState(false);


  const toggleDropdown = () => {
    setDropdown(!dropdownOpen)
  }

  const toggleNavbar = () => {
    setCollapse(!collapseOpen)
  }

  return (
  <StyledNavbar id="navheader" expand="md">
       <StyledNavBrand to="/">MARVTECH</StyledNavBrand>
       <NavbarToggler onClick={toggleNavbar} />

       <StyledCollapse open={collapseOpen} navbar>
         <Nav navbar>
           <StyledNavItem>
             <StyledNavLink active href="/">
               Home
             </StyledNavLink>
           </StyledNavItem>
           <StyledNavItem>
             <StyledNavLink href="/about">
               About
             </StyledNavLink>
           </StyledNavItem>
           <StyledNavItem>
             <StyledNavLink href="/services">
               Services
             </StyledNavLink>
           </StyledNavItem>
           <StyledNavItem>
             <StyledNavLink href="/get-a-quote">
               Get a Quote
             </StyledNavLink>
           </StyledNavItem>
           <StyledNavItem>
             <StyledNavLink href="#contact">
               Contact
             </StyledNavLink>
           </StyledNavItem>
         </Nav>

       </StyledCollapse>
     </StyledNavbar>
)
}

export default NavigationBar;
