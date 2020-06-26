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

const { small, xxxlarge } = theme.typography.size;

export const Container = styled.div`
   width: 100%;
   @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
       margin-top: 6rem;
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

`;
