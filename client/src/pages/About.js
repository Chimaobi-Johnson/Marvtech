import React from "react";
import styled from "styled-components";
import AboutLayout from "../layouts/PageLayout/AboutLayout";


export const AboutText = styled.div`
    padding-bottom: 5rem;
   p {
     line-height: 2;
     text-align: justify;
   }
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
      <h3>WHY WE ARE HERE</h3>
      <p>
      We believe everyday life should be easy not complex- complexity is a time killer!

      There is so much hardship in Nigeria/Africa stemming from challenges we are fully aware of and as a result of this many businesses have failed to scale and continue to operate primitive systems that are alien to this fast paced world.This challenge is more pronounced with SMEs in education, health, and business- little wonder why the continent is on a slow crawl (baby walk) to development.

      Having observed the tech scene for a while, we can say that software solutions are relatively expensive and only a hand full of the populace can comfortably afford them.

      We saw a need for a divergent kind of technology, and it was crystal clear it would take a divergent company to build it.
     </p>
     <MissionStatement>
       <h3>Our Mission</h3>
       <p>“To improve technological integration and innovation in
        Nigeria and Africa by providing easier access to technology and relevant software solutions”</p>
     </MissionStatement>
     <VisionStatement>
       <h3>Our Vision</h3>
       <p>“To be a leading provider of quality technological solutions in Nigeria and beyond”</p>
     </VisionStatement>
    </AboutText>
    </AboutLayout>
  )
}

export default About;
