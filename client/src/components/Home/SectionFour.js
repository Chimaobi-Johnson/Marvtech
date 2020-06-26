import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';


export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

export const Heading = styled.h1`
  text-align: center;
  padding-top: 13rem;
`;


const SectionFour = props => (
  <Wrapper>
     <Fade>
        <Heading>
        <Fade>
        INDUSTRIES
        </Fade>
        </Heading>
     </Fade>
  </Wrapper>
)

export default SectionFour;
