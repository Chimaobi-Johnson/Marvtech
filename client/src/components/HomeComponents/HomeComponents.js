import styled from "styled-components";
import { Button } from "shards-react";

import { theme, mq } from "../../constants/theme";

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
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   opacity: .8;
   background-color: #333; /*#04a5f4*/
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
   justify-content: space-between;
   margin: 8rem 0;
   @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
      display: block;
      margin: 4rem 0;
   }

`;

export const SectionOneText = styled.div`
   flex-basis: 67%;
   padding-left: 7rem;
   padding-right: 10rem;
   font-size: 1.1rem;
   line-height: 1.7;
   @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
      line-height: 1.5;
      border-right: none;
      padding-left: 1rem;
      padding-right: 5rem;
   }

   h2 {
     text-align: left;
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
         color: ${theme.colors.mediumBlue};
       }
     }
   }
`;

export const SectionTwo = styled.div`
   align-items: center;
   margin: 8rem 0;
`;

export const SectionTwoText = styled.div`
   padding-right: 3rem;
   font-size: 1.1rem;
   line-height: 1.7;
   width: 50%;
   margin: 0 auto;
   @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
      text-align: center;
      padding-right: 0;
      width: 70%;
   }
   h2 {
     text-align: left;
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
   height: 100vh;
   position: relative;
`;


export const MarvisBackground = styled.div`
   height: 80vh;
   width: 80%;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   z-index: -1;
   @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
      width: 90%;
   }
   h1 {
     font-size: 16rem;
     color: #6464640a;
     @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
        font-size: 7rem;
        padding-top: 11rem;
     }
   }
`;

export const Services = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
       display: block;
    }
`;

export const ServicesLeft = styled.div`
    flex-basis: 70%;
    display: flex;
    flex-wrap: wrap;
`;

export const ServicesRight = styled.div`
    flex: 1;
`;

export const BlockOne = styled.div`
   width: 50%;
   padding: 2rem 4rem;
   @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
      padding: 0;
   }
`;

export const IconBox = styled.div`
   flex-basis: 60%;
`;

export const ContentBox = styled.div`
   flex: 1;
`;

export const ImageContainer = styled.div`
   width: 87%;
   height: 50%;
   margin-top: 7rem;
   background-color: ${theme.colors.mediumBlue};
   position: relative;
   img {
     width: 100%;
     height: 100%;
     position: absolute;
     top: -7%;
     left: 7%;
     box-shadow: -21px 22px 10px #2d2d2d69;
   }
`;


export const AnimatedHeader = styled.h4`
   color: ${theme.colors.mediumBlue};
   padding-left: 8rem;
   @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
      padding-left: 1rem;
      font-size: 1.2rem;
   }
`;

export const ContactSection = styled.div`
   /* background-image: url("../../images/programming.jpg"); */
   width: 100%;
   display: flex;
   justify-content: space-around;
   align-items: flex-start;
   margin: 3rem 0;
   background-color: #ccc;
   padding: 5rem 9rem;
   @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
      display: block;
      padding: 2rem;
      margin-bottom: 0;
   }
`;

export const ContactInfo = styled.div`
   flex-basis: 50%;
   padding: 2rem;
   padding-left: 10rem;
   padding-top: 3rem;
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
     }
   }
`;
