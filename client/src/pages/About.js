import React from "react";
import styled from "styled-components";
import AboutLayout from "../layouts/PageLayout/AboutLayout";
import ReactFade from 'react-reveal/Fade';


export const AboutText = styled.div`
    .heading {
      color: #292929;
      display: none;
      padding: 0 15rem;
    }
    margin-top: 19rem;
    padding-bottom: 5rem;
`;

export const AboutParagraph = styled.p`
     line-height: 2;
     text-align: justify;
     padding: 0 15rem;
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
    }
`;

const About = props => {

  return (
    <AboutLayout
       covername="About Us"
       coverdescr="Its easy-peasy with MarvTech"
    >
    <AboutText>
      <h3 className="heading">AT MARVIS TECHNOLOGIES</h3>
      <AboutParagraph>
      <ReactFade>
      We believe everyday life should be easy not complex- complexity is a time killer!

      There is so much hardship in Nigeria/Africa stemming from challenges we are fully aware of and as a result of this many businesses have failed to scale and continue to operate primitive systems that are alien to this fast paced world.This challenge is more pronounced with SMEs in education, health, and business- little wonder why the continent is on a slow crawl (baby walk) to development.

      Having observed the tech scene for a while, we can say that software solutions are relatively expensive and only a hand full of the populace can comfortably afford them.

      We saw a need for a divergent kind of technology, and it was crystal clear it would take a divergent company to build it.
      </ReactFade>
     </AboutParagraph>
     <MissionStatement>
      <ReactFade>
       <h3>Our Mission</h3>
       <p>“To improve technological integration and innovation in
        Nigeria and Africa by providing easier access to technology and relevant software solutions”</p>
      </ReactFade>
     </MissionStatement>
     <VisionStatement>
     <ReactFade>
       <h3>Our Vision</h3>
       <p>“To be a leading provider of quality technological solutions in Nigeria and beyond”</p>
     </ReactFade>
     </VisionStatement>
    </AboutText>
    </AboutLayout>
  )
}

export default About;
