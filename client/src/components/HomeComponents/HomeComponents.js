import React from "react";
import styled from "styled-components";
import { Button } from "shards-react";
import { NavLink } from "react-router-dom";
import withReveal from "react-reveal";
import Fade from 'react-reveal/Fade';
import { theme, mq } from "../../constants/theme";
import contactBg from '../../images/charles.jpg';
import laptopImage from "../../images/silver-laptop.jpg";
import womanWriting from "../../images/woman-writing.jpg";
import laptopTech from "../../images/business-charts.jpg";

const { small, xxxlarge } = theme.typography.size;

export const Container = styled.div`
   width: 100%;
   @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
       margin-top: 6rem;
    }
`;

export const LandingWrapper = styled.div`
   width: 100%;
   /* height: 100vh; */
   position: relative;
   /* background-color: blue; */
`;

export const Video = styled.video`
   width: 100%;
`;

export const VideoOverlay = styled.div`
   width: 100%;
   height: 100%;
   position: absolute;
   z-index: 250;
   top: 49%;
   left: 50%;
   transform: translate(-50%, -50%);
   /* background-color: #1f2641f0; */
   /* background-color: #04a1ffe3; */
   background-color: #0a0a0aab; /*#04a5f4
   /* background-image: linear-gradient(180deg, #0087ff00 0%, #007cff80 25%, #0087ffc2 70%, #007aff 100%); */
`;

export const LandingTextBox = styled.div`
   /* font-size: ${small}; */
   width: 50%;
   position: absolute;
   z-index: 500;
   top: 40%;
   right: 8%;
   font-size: 1.1rem;
   div {
     letter-spacing: .5px;
   }
   /* transform: translate(-50%, -50%); */
   @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
      width: 62%;
      top: 27%;
      font-size: .8rem;
      right: 0;
   }

   h2 {
    color: #fff;
    font-size: 2.2rem;
    text-transform: uppercase;
    letter-spacing: .5rem;
    font-weight: bold;
    line-height: 1;
    @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
       font-size: 1.2rem;
    }

   }
   div {
     /* font-size: ${small}; */
     font-weight: 500;
     color: #fff;
     margin-bottom: 1.5rem;
   }
`;



export const StyledButton = styled(Button)`
     border-color: #04a1ff;
     color: #04a1ff;
     border-radius: 0;
     &:hover {
       background-color: #04a1ff;
     }
     @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
        display: none;
     }

`;

export const SectionThree = styled.div`
   width: 100%;
   position: relative;
   background-color: ${theme.colors.primary};
`;


export const Services = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    border-top: #ccc;
    position: relative;
    height: 100vh;
    background-color: #fbfbfb;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23a4a4a4' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    /* @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
       display: block;
    } */
`;

export const ServicesRight = styled.div`
    flex: 1;
    background-color: aliceblue;
    padding: 5rem 7rem;
    display: flex;
    align-items: center;
    flex-direction: column;
`;


export const ArrowLeftBtn = styled(Button)`
   position: absolute;
   top: 46%;
   left: 1%;
   background: transparent;
   border-color: transparent;
   &:hover {
     box-shadow: none;
     background: transparent;
   }
`;

export const ArrowRightBtn = styled(Button)`
   position: absolute;
   top: 46%;
   right: 1%;
   background: transparent;
   color: #000;
   border-color: transparent;
   &:hover {
     box-shadow: none;
     background: transparent;
     color: #000;
     border-color: #fff;
   }
`;

export const ServicesLeft = styled.div`
    flex-basis: 50%;
    img {
      width: 100%;
      height: 84%;
      margin-top: 8%;
    }
    /* position: relative;
    background-size: cover;
    padding: 4rem;
    background-image: linear-gradient(260deg,#9d9c9c17,#31313173), url(${laptopImage}); */
    /* div {
      position: absolute;
      top: -2rem;
      left: -20rem;
      width: 100%;
      padding: 1rem;
      background-color: #4191ea;
      transform: rotate(90deg);
    } */
`;

export const StyledSpan = styled.span`
    padding: .5rem 1rem;
    color: #fff;
    background-color: #292929;
`;

export const Title = styled.h1`
   color: #292929;
   margin-top: 2rem;
`;

export const Text = styled.p`
  padding-top: 1.5rem;
  line-height: 2;
`;

export const MoreButton = styled(Button)`
  margin-top: 1rem;
  border-radius: 0;
`;



export const ContentBox = styled.div`
   flex: 1;
`;

export const ImageContainer = styled.div`
   width: 100%;
   height: 100%;
   position: relative;
   img {
     width: 100%;
     height: 100%;
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
   }
`;

export const AnimatedHeader = styled.h4`
   color: #292929;
   padding-left: 8rem;
   display: none;
   @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
      padding-left: 1rem;
      font-size: 1.2rem;
   }
`;

export const SectionFour = styled.h4`
   width: 100%;
   height: 100vh;
`;


export const StyledLink = styled(NavLink)`
   text-decoration: none;
   color: #292929;
   &:hover {
     color: ${theme.colors.primary};
   }
`;


export const SectionAbout = styled.div`
 /* linear-gradient(to right, #1c1c1cdb,#df752854), */
    background-image: linear-gradient(#fff, #ffffff5e), url(${laptopTech});
    background-size: cover;
    padding: 11rem 13rem;
    border-top-right-radius: 5px;
    text-align: center;
    background-color: #fff;
    h2 {
      font-size: 1.8rem;
      color: #000;
    }
    p {
      font-size: 1.2rem;
      color: #000;
      line-height: 2rem;
      letter-spacing: .5px;
      text-align: left;
    }
`;
