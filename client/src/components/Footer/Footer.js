import React from "react";
import styled from "styled-components";
import { Button } from "shards-react";
import { NavLink } from "react-router-dom";
import { theme } from "../../constants/theme";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faGoogle, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

const { small, xxxlarge } = theme.typography.size;

const Wrapper = styled.div`
   width: 100%;
   background-color: #292929;
   display: flex;
   padding: 4rem 3rem;
   align-items: center;
`;

const FooterLeft = styled.div`
   flex-basis: 70%;
   display: flex;
   align-items: center;
`;

const FooterRight = styled.div`
   flex: 1;
   padding-left: 7rem;
   ul {
     list-style: none;
     display: flex;
     padding-left: 0;
     li {
       margin-right: .8rem;
     }
   }
`;

const MenuContainer = styled.div`
   margin: 0 3rem;
   h3 {
     text-transform: uppercase;
     font-size: 1.2rem;
     color: #ffffff8c;
     padding-left: 2rem;
   }
   ul {
     list-style: none;
     li {
       padding: .2rem 0;
       a {
         color: #595959;
       }
     }
   }
`;

const StyledNavLink = styled(NavLink)`

`;


const Footer = props => {

  return (
     <Wrapper>
        <FooterLeft>
          <MenuContainer>
             <h3>Quick Links</h3>
              <ul>
                <li><StyledNavLink to="#">Home</StyledNavLink></li>
                <li><StyledNavLink to="#">Company Description</StyledNavLink></li>
                <li><StyledNavLink to="#">Web Design and Development</StyledNavLink></li>
                <li><StyledNavLink to="#">Portfolios</StyledNavLink></li>
              </ul>
          </MenuContainer>

          <MenuContainer>
             <h3>Company</h3>
              <ul>
                <li><StyledNavLink to="#">About</StyledNavLink></li>
                <li><StyledNavLink to="#">Services</StyledNavLink></li>
                <li><StyledNavLink to="#">Mission</StyledNavLink></li>
                <li><StyledNavLink to="#">Contact</StyledNavLink></li>
              </ul>
          </MenuContainer>

          <MenuContainer>
             <h3>Services</h3>
              <ul>
                 <li><StyledNavLink to="#">Web Design and Development</StyledNavLink></li>
                 <li><StyledNavLink to="#">Web Development</StyledNavLink></li>
                 <li><StyledNavLink to="#">Mobile Design and Development</StyledNavLink></li>
                 <li><StyledNavLink to="#">Mobile Development</StyledNavLink></li>
              </ul>
          </MenuContainer>

        </FooterLeft>
        <FooterRight>
            <p>+2347012191531</p>
            <ul>
               <li><StyledNavLink to="#"><FontAwesomeIcon icon={faFacebookF} size="sm" /></StyledNavLink></li>
               <li><StyledNavLink to="#"><FontAwesomeIcon icon={faTwitter} size="sm" /></StyledNavLink></li>
               <li><StyledNavLink to="#"><FontAwesomeIcon icon={faGoogle} size="sm" /></StyledNavLink></li>
               <li><StyledNavLink to="#"><FontAwesomeIcon icon={faWhatsapp} size="sm" /></StyledNavLink></li>
            </ul>
            <p>&copy; Marvis Technologies</p>
        </FooterRight>
     </Wrapper>
  )
}

export default Footer;
