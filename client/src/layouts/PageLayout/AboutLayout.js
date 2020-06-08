import React from "react";
import styled from "styled-components";
import { Button } from "shards-react";
import { NavLink } from "react-router-dom";
import { theme, mq } from "../../constants/theme";

const { small, xxxlarge } = theme.typography.size;


const Wrapper = styled.div`
   width: 100%;
   background-color: #fff;
`;

const CoverImageContainer = styled.div`
    width: 100%;
    height: 70vh;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
`;

const BackgroundOverlay = styled.div`
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    background-color: #202020;
    opacity: 0.8;
    z-index: 20;
`;


const CoverText = styled.div`
    width: 60%;
    height: 20%;
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    position: absolute;
    z-index: 100;
    text-transform: uppercase;
    h1 {
      color: #eaeaea;
      letter-spacing: .5rem;
    }
    p {
      color: #d2d0d0;
    }
`;

const ContentContainer = styled.div`
    display: flex;
    padding: 4rem 1rem;
    padding-bottom: 25rem;
`;

const ContentSideBar = styled.div`
     flex-basis: 20%;
     border-right: 1px solid #d7d7d7;
    ul {
      list-style: none;
      li {
        padding: 1rem 0;
      }
    }
`;

const ContentMain = styled.div`
    flex: 1;
    padding: 2rem 4rem;
`;

const StyledNavLink = styled(NavLink)`
    flex: 1;
    padding: 2rem 0;
`;


const AboutLayout = props => {

  return (
     <Wrapper>
        <CoverImageContainer>
          <BackgroundOverlay />
          <img src={require("../../images/macpro.jpg")} alt="cover_image" />
          <CoverText>
             <h1>{props.covername}</h1>
             <p>{props.coverdescr}</p>
          </CoverText>
        </CoverImageContainer>
        <ContentContainer>
           <ContentSideBar>
              <ul>
                 <li><StyledNavLink to="/about">About</StyledNavLink></li>
                 <li><StyledNavLink to="/get-a-quote">Get a Quote</StyledNavLink></li>
                 <li><StyledNavLink to="/services">Services</StyledNavLink></li>
                 <li><StyledNavLink to="/contact">Contact Us</StyledNavLink></li>
              </ul>
           </ContentSideBar>
           <ContentMain>
              {props.children}
           </ContentMain>
        </ContentContainer>
     </Wrapper>
  )
}

export default AboutLayout;
