import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { theme } from "../../constants/theme";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Collapse
} from "shards-react";

import "./Navbar.css";


const { xxsmall, xsmall, small, large } = theme.typography.size;


const StyledNavbar = styled(Navbar)`
   position: fixed;
   width: 100%;
   z-index: 1000;
   top: 0;
   left: 0;
   transition: all .7s;
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

const StyledNavLink = styled(NavLink)`
    padding: 0 .8rem;
    text-decoration: none;
    color: #fff;
    &:hover {
      color: ${theme.colors.primary};
      text-decoration: none;
    }
`;

const StyledNavBrand = styled(NavLink)`
      color: ${theme.colors.primary};
      font-weight: bold;
      /* font-family: 'Share Tech', sans-serif; */
      font-size: 1.4rem;
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
`;


const NavigationBar = props => {

  useEffect(() => {
    window.onscroll = function() {updateHeader()};

    const header = document.getElementById("navheader");
    const sticky = header.offsetTop;

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
             <StyledNavLink active to="/">
               Home
             </StyledNavLink>
           </StyledNavItem>
           <StyledNavItem>
             <StyledNavLink to="/about">
               About
             </StyledNavLink>
           </StyledNavItem>
           <StyledNavItem>
             <StyledNavLink to="/services">
               Services
             </StyledNavLink>
           </StyledNavItem>
           <StyledNavItem>
             <StyledNavLink to="/get-a-quote">
               Get Quote
             </StyledNavLink>
           </StyledNavItem>
           <StyledNavItem>
             <StyledNavLink to="/contact">
               Contact
             </StyledNavLink>
           </StyledNavItem>
         </Nav>

       </StyledCollapse>
     </StyledNavbar>
)
}

export default NavigationBar;
