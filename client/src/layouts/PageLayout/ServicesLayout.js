import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import servicesBg from "../../images/mockup2.jpg";

const Wrapper = styled.div`
   width: 100%;
   background-color: #fff;
`;

const CoverImageContainer = styled.div`
    width: 100%;
    height: 70vh;
    position: relative;
    background-size: cover;
    background-attachment: fixed;
    background-image: linear-gradient(#202020bf,#01b8ff3d), url(${servicesBg});
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
    /* display: flex; */
`;

const ContentSideBar = styled.div`
     width: 25%;
     position: absolute;
     top: 53%;
     background-color: #fff;
     box-shadow: 1px 2px 100px #39393957;
     padding: 2rem 1rem;
     border-right: 1px solid #d7d7d7;
    ul {
      list-style: none;
      li {
        padding: 1rem 0;
      }
    }
`;

const ContentMain = styled.div`

`;

const StyledNavLink = styled(NavLink)`
    flex: 1;
    padding: 2rem 0;
`;


const ServicesLayout = props => {

  return (
     <Wrapper>
        <CoverImageContainer>
          <CoverText>
             <h1>{props.covername}</h1>
             <p>{props.coverdescr}</p>
          </CoverText>
        </CoverImageContainer>
        <ContentContainer>
           <ContentSideBar>
              <ul>
                 <li><StyledNavLink to="/web-design">Web Design</StyledNavLink></li>
                 <li><StyledNavLink to="/web-development">Web Application Development</StyledNavLink></li>
                 <li><StyledNavLink to="/mobile-design">Mobile Application Development</StyledNavLink></li>
                 <li><StyledNavLink to="/get-a-quote">Get a Quote</StyledNavLink></li>
                 <li><StyledNavLink to="/about">About</StyledNavLink></li>
              </ul>
           </ContentSideBar>
           <ContentMain>
              {props.children}
           </ContentMain>
        </ContentContainer>
     </Wrapper>
  )
}

export default ServicesLayout;
