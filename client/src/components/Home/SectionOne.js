import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import { mq } from "../../constants/theme";
import "./SectionOne.css";


export const Wrapper = styled.div`
   display: flex;
   align-items: center;
   width: 100%;
   position: relative;
   justify-content: space-between;
   padding: 4rem 2rem;
   height: 100vh;
   background-color: #fff;
   @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
      display: block;
      margin: 0;
   }

`;

export const SectionOneText = styled.div`
   flex-basis: 67%;
   padding-left: 7rem;
   padding-right: 10rem;
   font-size: 1.1rem;
   line-height: 1.7;
   color: #000;
   @media (max-width: ${mq.tablet.narrow.maxWidth}) and (min-width: ${mq.tablet.narrow.minWidth}) {
      flex-basis: 80%;
      padding-right: 0;
   }
   @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
      line-height: 1.5;
      border-right: none;
      padding-left: 1rem;
      padding-right: 5rem;
   }
   @media screen and (max-width: ${mq.phone.narrow.maxWidth}) {
      color: #eaeaea;
      padding-right: 1rem;
      padding-left: 0;
      font-size: 1.1rem;
      h2 {
        margin-top: 2rem;
      }
   }

   h2 {
     text-align: left;
     color: #000;
     @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
        font-size: 1.7rem;
     }
   }
   position: relative;
`;

export const SectionOnePicture = styled.div`
   flex-basis: 30%;
   z-index: 1;
   @media (max-width: ${mq.tablet.narrow.maxWidth}) and (min-width: ${mq.tablet.narrow.minWidth}) {
      display: none;
   }
   @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
     display: none;
     ul {
       margin-top: 0;
     }
   }
   ul {
     margin-left: 3rem;
     list-style-type: square;
     margin-top: 2rem;
     li {
       font-size: 1.1rem;
       padding: 1rem 0;
       a {
         color: #fff;
         &:hover {
           color: #20c0ff;
           text-decoration: none;
         }
       }
     }
   }
`;


const SectionOne = props => (
  <Wrapper>
      <Fade right>
      <div className="custom-polygon">

      </div>
      </Fade>
      <SectionOneText>
      <Fade>
        <h2>Easier Access to Software </h2>
        <p>Most sectors in Nigeria and Africa as a whole have
        challenges getting access to relevant software that will
        make their operations easier. At Marvis Technologies our core focus is to build
        software solutions that will allow these industries manage their data, decisions, and operations
        without having to spend a fortune.</p>
        <p>By targeting organizations who cannot afford sophisticated software, we aim to introduce affordable
        software solutions to these organizations through our platforms</p>
      </Fade>
      </SectionOneText>
      <SectionOnePicture>
         <ul>
            <li><a href="/services">Our Services</a></li>
            <li><a href="/about">Company Description</a></li>
            <li><a href="#industries">Industries</a></li>
            <li><a href="#">Platforms</a></li>
         </ul>
      </SectionOnePicture>
  </Wrapper>
)

export default SectionOne;
