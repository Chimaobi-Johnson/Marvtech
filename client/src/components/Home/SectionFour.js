import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import { mq } from "../../constants/theme";

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  margin-bottom: 10rem;
`;

export const Heading = styled.h1`
  text-align: center;
  padding-top: 9rem;
  font-size: 2rem;
  @media screen and (max-width: ${mq.phone.narrow.maxWidth}) {
    font-size: 1.5rem;
  }
`;


export const IndustryContainer = styled.div`
  @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
    display: block;
  }
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;


export const IndustryBox = styled.div`
  &:hover {
    box-shadow: 1px 2px 50px #b9b9b9;
  }
  margin-top: 3rem;
  transition: .3s;
  box-shadow: 1px 2px 50px #dddbdba8;
  background-color: #fff;
  flex-basis: 28%;
  img {
    width: 100%;
  }
  h6 {
    padding: 1rem;
    font-weight: bold;
    background-color: #fff;
  }
`;


const SectionFour = props => (
  <Wrapper>
    <Heading>
        <Fade>
          INDUSTRIES
        </Fade>
    </Heading>
    <IndustryContainer>
       <IndustryBox>
         <img src={require("../../images/education.jpg")} alt="education" />
         <h6>Education</h6>
       </IndustryBox>
       <IndustryBox>
         <img src={require("../../images/health.jpg")} alt="health" />
         <h6>Health</h6>
       </IndustryBox>
       <IndustryBox>
         <img src={require("../../images/manufacturing.jpg")} alt="manufacturing" />
         <h6>Manufacturing</h6>
       </IndustryBox>
       <IndustryBox>
         <img src={require("../../images/shopping.jpg")} alt="manufacturing" />
         <h6>Consumer and Retail</h6>
       </IndustryBox>
       <IndustryBox>
         <img src={require("../../images/cafe-interior.jpg")} alt="manufacturing" />
         <h6>Hospitality and Leisure</h6>
       </IndustryBox>
    </IndustryContainer>

  </Wrapper>
)

export default SectionFour;
