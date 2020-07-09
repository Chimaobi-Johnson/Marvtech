import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import {  mq } from "../../constants/theme";
import laptopTech from "../../images/business-charts.jpg";


export const Wrapper = styled.div`
    @media (max-width: ${mq.tablet.narrow.maxWidth}) and (min-width: ${mq.tablet.narrow.minWidth}) {
      padding: 4rem;
    }
    @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
      padding: 2rem 1rem;
    }
    @media screen and (max-width: ${mq.phone.narrow.maxWidth}) {
      padding: 1rem !important;
      p {
        font-size: 1.1rem !important;
      }
    }
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
      /* font-weight: 400; */
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
                  There is so much hardship existent in Nigeria/Africa today stemming from challenges impeding growth and development,
                  and as a result of this businesses have crashed and many have failed to scale as they continue to operate primitive systems that are alien
                  to this fast paced world. This challenge is pronounced with SMEs, little wonder why the continent is on a slow crawl to development.
              </p>
          </div>
          </Fade>
  </Wrapper>
)

export default SectionAbout;
