import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import laptopTech from "../../images/business-charts.jpg";


export const Wrapper = styled.div`
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
      font-weight: 500;
      color: #000;
      line-height: 2rem;
      letter-spacing: .5px;
      text-align: left;
    }

`;

const SectionAbout = props => (
  <Wrapper>
         <Fade bottom>
          <div>
             <h2 id="aboutHeading">WHY WE ARE HERE</h2>
              <p>
                  We believe everyday life should be easy not complex- complexity is a time killer!
                  There is so much hardship in Nigeria/Africa stemming from challenges we are fully aware of and as a result of this many businesses have failed to scale and continue to operate primitive systems that are alien to this fast paced world.This challenge is more pronounced with SMEs in education, health, and business- little wonder why the continent is on a slow crawl (baby walk) to development.
                  Having observed the tech scene for a while, we can say that software solutions are relatively expensive and only a hand full of the populace can comfortably afford them.
                  We saw a need for a divergent kind of technology, and it was crystal clear it would take a divergent company to build it.
              </p>
          </div>
          </Fade>
  </Wrapper>
)

export default SectionAbout;
