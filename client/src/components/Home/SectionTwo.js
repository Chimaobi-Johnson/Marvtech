import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import { mq } from "../../constants/theme";


export const Wrapper = styled.div`
   align-items: center;
   background-color: #fff;
   padding: 4rem 0;
   border-left: .3rem solid #292929;
   display: flex;
`;

export const SectionTwoText = styled.div`
   padding-right: 6rem;
   padding-left: 2rem;
   font-size: 1.1rem;
   line-height: 1.7;
   flex-basis: 59%;
   margin: 0 auto;
   text-align: left;
   color: #292929;
   /* border-right: 1px solid #ccc; */
   @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
      text-align: center;
      padding-right: 0;
      width: 70%;
   }
   h2 {
     color: #292929;
     text-align: left;
     @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
        text-align: center;
     }
   }
`;

export const SectionTwoIcon = styled.div`
   flex: 1;
   display: none;
   .iconBox {
     display: flex;
     align-items: center;
     margin-left: 15rem;
     /* div {
       padding-left: 1rem;
     }
     svg {
       font-size: 2rem;
     } */
   }
`;

const SectionTwo = props => (
  <Wrapper>
      <SectionTwoText>
         <Fade>
         <h2>Other Services </h2>
         <p>We offer affordable software solutions to SMEs to manage their activities on the go through
         web and mobile app development
         </p>
         </Fade>
      </SectionTwoText>
      <SectionTwoIcon>
         <Fade>
           <div className="iconBox">

           </div>
         </Fade>
      </SectionTwoIcon>
  </Wrapper>
)

export default SectionTwo;
