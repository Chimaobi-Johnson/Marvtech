import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { theme } from "../../constants/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
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
`;

const StyledCollapse = styled(Collapse)`
    justify-content: flex-end;
`;

const StyledNavLink = styled(NavLink)`
    color: #fff;
    &:hover {
      color: ${theme.colors.primary};
    }
`;

const StyledNavBrand = styled(NavbarBrand)`
      color: ${theme.colors.primary};
      font-weight: bold;
      /* font-family: 'Share Tech', sans-serif; */
      font-size: 1.3rem;
      text-transform: uppercase;
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
       <StyledNavBrand href="#">MARVTECH</StyledNavBrand>
       <NavbarToggler onClick={toggleNavbar} />

       <StyledCollapse open={collapseOpen} navbar>
         <Nav navbar>
           <StyledNavItem>
             <StyledNavLink active href="#">
               Home
             </StyledNavLink>
           </StyledNavItem>
           <StyledNavItem>
             <StyledNavLink href="#">
               About
             </StyledNavLink>
           </StyledNavItem>
           <StyledNavItem>
             <StyledNavLink href="#">
               Services
             </StyledNavLink>
           </StyledNavItem>
           <StyledNavItem>
             <StyledNavLink href="#">
               Pricing
             </StyledNavLink>
           </StyledNavItem>
           <StyledNavItem>
             <StyledNavLink href="#">
               Contact
             </StyledNavLink>
           </StyledNavItem>
         </Nav>

       </StyledCollapse>
     </StyledNavbar>
)
}

export default NavigationBar;
