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
   background-color: #0a0a0aab; /*#04a5f4*/;
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

export const SectionOne = styled.div`
   display: flex;
   align-items: center;
   width: 100%;
   position: relative;
   justify-content: space-between;
   padding: 4rem 2rem;
   height: 100vh;
   @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
      display: block;
      margin: 4rem 0;
   }

`;

export const PolygonOne = styled.div`
   background-color: ${theme.colors.purple};
   clip-path: polygon(25% 0%, 100% 0, 100% 100%, 25% 100%, 0% 50%);
   /* clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 33% 49%, 0% 0%); */
   position: absolute;
   top: 14%;
   right: 0;
   width: 40%;
   height: 70%;
   display: none;
   z-index: -1;
`;

export const PolygonTwo = withReveal(styled.div`
   background-image: linear-gradient(260deg,rgba(23, 23, 23, 0.3),#3e94f2), url(${womanWriting});
   background-size: cover;
   clip-path: polygon(25% 0%, 100% 0, 100% 100%, 25% 100%, 0% 50%);
   position: absolute;
   height: 100vh;
   top: 0%;
   right: 0;
   width: 55%;
   z-index: -1;
`, <Fade right/>)

export const SectionOneText = styled.div`
   flex-basis: 67%;
   padding-left: 7rem;
   padding-right: 10rem;
   font-size: 1.1rem;
   line-height: 1.7;
   color: #000;
   @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
      line-height: 1.5;
      border-right: none;
      padding-left: 1rem;
      padding-right: 5rem;
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
   ul {
     margin-left: 3rem;
     list-style-type: square;
     margin-top: 2rem;
     @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
        margin-left: 0;
     }
     li {
       font-size: 1.1rem;
       padding: 1rem 0;
       a {
         color: #fff;
         &:hover {
           color: ${theme.colors.mediumBlue};
         }
       }
     }
   }
`;

export const SectionTwo = styled.div`
   align-items: center;
   background-color: #292929;
   padding: 4rem 0;
   border-left: .3rem solid #292929;
`;

export const SectionTwoText = styled.div`
   padding-right: 3rem;
   font-size: 1.1rem;
   line-height: 1.7;
   width: 50%;
   margin: 0 auto;
   text-align: center;
   color: #fbfbfb;
   @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
      text-align: center;
      padding-right: 0;
      width: 70%;
   }
   h2 {
     color:#fff;
     text-align: center;
     @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
        text-align: center;
     }
   }
`;


export const StyledButton = styled(Button)`
     border-color: ${theme.colors.primary};
     color: ${theme.colors.primary};
     border-radius: 0;
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
    padding: 5rem 7rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
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
    background-color: #fff;
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

export const ContactSection = styled.div`
   /* background-image: url("../../images/programming.jpg"); */
   /* linear-gradient(to right,#000000db,#4192e996), url(/static/media/charles.2a5b88ea.jpg) */
   background-image: linear-gradient(to right, #000000db,#4192e996), url(${contactBg});
   background-size: cover;
   width: 100%;
   display: flex;
   position: relative;
   justify-content: space-around;
   align-items: flex-start;
   margin: 0;
   padding: 5rem 9rem;
   margin-bottom: 0;
   @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
      display: block;
      padding: 2rem;
   }
`;


export const ContactOverlay = styled.div`
   /* position: absolute;
   top: 50%;
   height: 100%;
   width: 100%;
   left: 50%;
   transform: translate(-50%, -50%);
   background-color: linear-gradient(${theme.colors.primary}, ${theme.colors.lightGold}); */
`;

export const ContactInfo = styled.div`
   flex-basis: 50%;
   padding: 2rem;
   padding-left: 10rem;
   padding-top: 3rem;
   z-index: 1;
   h4 {
     color: #fff;
   }
   @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
      padding-left: 0;
      padding-top: 0;
      padding: 2rem;
   }
   ul {
     list-style: none;
     padding-left: 0;
     li {
       padding: .5rem 0;
       color: #fff;
     }
   }
`;

export const StyledLink = styled(NavLink)`
   text-decoration: none;
   color: #292929;
   &:hover {
     color: ${theme.colors.primary};
   }
`;


export const SectionAbout = styled.div`
    padding: 11rem 13rem;
    border-top-right-radius: 5px;
    text-align: center;
    background-color: #fff;
    p {
      font-size: 1.2rem;
    }
`;

export const SectionQuote = styled.div`
     height: 60vh;
     background-color: #e6e8e9;
`;
