import React from "react";
import styled from "styled-components";
import AboutLayout from "../layouts/PageLayout/AboutLayout";
import ReactFade from 'react-reveal/Fade';
import { mq } from "../constants/theme";
import bgImage from "../images/businessmeeting1.jpg";
import bgPillars from "../images/macbook.jpg";

export const AboutText = styled.div`
    padding-left: 4rem;
    padding-top: 4rem;
    background-color: #fff;
    padding-bottom: 5rem;
    color: #000;
    margin-top: -10rem;
    top: 26%;
    position: absolute;
    width: 76%;
    z-index: 5;
    .heading {
      color: #292929;
      display: none;
      padding: 0 15rem;
    }
    @media (max-width: ${mq.tablet.narrow.maxWidth}) and (min-width: ${mq.tablet.narrow.minWidth}) {
      margin-top: 0;
      padding-left: .5rem;
      width: 100%;
      position: relative;
    }
    @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
       margin-top: 0;
       padding-left: .5rem;
       width: 100%;
       position: relative;

    }
`;

export const AboutParagraph = styled.p`
    @media (max-width: ${mq.tablet.narrow.maxWidth}) and (min-width: ${mq.tablet.narrow.minWidth}) {
       padding: 5rem;
    }
    @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
       padding: 2rem;
    }
     color: #000;
     line-height: 2;
     text-align: justify;
     padding: 0 4rem;
`;

export const MissionStatement = styled.div`
    text-align: center;
    width: 70%;
    margin: 0 auto;
    margin-top: 5rem;
    h3 {
        /* padding-bottom: 1.5rem; */
    }
    p {
      text-align: center;
      color: #000;
    }
`;

export const VisionStatement = styled.div`
    text-align: center;
    width: 70%;
    margin: 0 auto;
    margin-top: 5rem;
    h3 {
        /* padding-bottom: 1.5rem; */
    }
    p {
      text-align: center;
      color: #000;
    }
`;


export const AboutImage = styled.div`
   position: relative;
   flex: 1;
   background-image: linear-gradient(to right, #0b3546d4, #00000080), url(${bgImage});
   /* background-position: top; */
   h3 {
     position: absolute;
     top: 32%;
     left: 50%;
     transform: translate(-50%, -50%);
     text-transform: uppercase;
     color: #eaeaea;
     width: 60%;
   }
`;


export const PillarsContainer = styled.div`
   position: relative;
   width: 100%;
   height: 100%;
   flex: 1;
   background-image: linear-gradient(to right, #0b3546d4, #00000080), url(${bgPillars});
   /* background-position: top; */
`;

export const AboutContainer = styled.div`
    position: relative;
    min-height: 200vh;
    background-color: #fff;
    @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
       min-height: 170vh;
    }
`;

export const TopContainer = styled.div`
     display: flex;
     height: 80vh;
     margin-top: 2rem;
     @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
        display: none;
     }
`;

export const TopLeft = styled.div`
     flex-basis: 50%;
     height: 100%;
`;

export const PillarsWrapper = styled.div`
      height: 130vh;
      margin-top: 40%;
      /* padding-bottom: 15rem; */
      @media (max-width: ${mq.tablet.narrow.maxWidth}) {
        display: block;
        height: 100vh;
        margin-top: 0;
        padding-bottom: 0;
      }
`;


export const Pillars = styled.div`
    @media (max-width: ${mq.tablet.narrow.maxWidth}) {
      width: 100%;
    }
   width: 70%;
   background-color: #12344163;
   padding: 1rem 0;
   border-radius: 3rem;
    h4 {
      color: #fff;
      text-align: center;
      text-transform: uppercase;
    }
    color: #eaeaea;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    ul {
      list-style: none;
      li {
        padding: 0 2rem;
        display: flex;
        align-items: center;
        margin: 2rem auto;
        span {
          padding: 1rem 2rem;
        }
        span:not(:last-child) {
          border-right: 1px solid #eaeaea;
          flex-basis: 35%;
          font-weight: bold;
        }
        span:last-child {
          flex: 1;
        }
      }
      li:not(:last-child) {
        /* border-right: 1px solid #eaeaea; */
      }
    }
`;



const About = props => {

  return (
    <AboutLayout
       covername="About Us"
       coverdescr="Its easy-peasy with MarvTech"
    >
    <AboutContainer>
    <TopContainer>
     <TopLeft></TopLeft>
     <AboutImage>
        <h3>Marvis Technologies</h3>
     </AboutImage>

    </TopContainer>
    <AboutText>
      <h3 className="heading">AT MARVIS TECHNOLOGIES</h3>
      <AboutParagraph id="about">
      <ReactFade>
      We believe everyday life should be easy not complex- complexity is a time killer! <br />
      There is so much hardship existent in Nigeria/Africa today stemming from challenges impeding growth and development,
      and as a result of this businesses have crashed and many have failed to scale as they continue to operate primitive
      systems that are
      alien to this fast paced world. This challenge is pronounced with SMEs, little wonder why the continent
      is on a slow crawl to development. <br />
      Having observed the tech scene for a while, we can say that software solutions are
      relatively expensive and only a handfull of the populace can comfortably afford them. <br />
      We saw a need for a divergent kind of technology, and it was crystal clear it would take a divergent company to build it.
      </ReactFade>
     </AboutParagraph>
     <MissionStatement id="mission">
      <ReactFade>
       <h3>Our Mission</h3>
       <p>"To help drive technological growth and innovation in Nigeria and Africa's
       business environment by providing easier access to technology and relevant software solutions.”</p>
      </ReactFade>
     </MissionStatement>
     <VisionStatement id="vision">
     <ReactFade>
       <h3>Our Vision</h3>
       <p>“To be a leading provider of quality technological solutions in Nigeria and beyond”</p>
     </ReactFade>
     </VisionStatement>
    </AboutText>
    <PillarsWrapper>
     <PillarsContainer>
        <Pillars id="pillars">
           <ReactFade>
           <h4>Our Pillars</h4>
           <ul>
              <li><span>Software</span><span>Our custom made software solutions address the needs of our clients</span></li>
              <li><span>Innovation</span><span>We not only turn ideas to reality, we also employ best practices to
               help our clients stay relevant in their space.</span></li>
              <li><span>Service</span><span>We care about our clients, and your maximum satisfaction is our priority. We win when our clients win.</span></li>
           </ul>
           </ReactFade>
        </Pillars>
     </PillarsContainer>
    </PillarsWrapper>

    </AboutContainer>

    </AboutLayout>
  )
}

export default About;
