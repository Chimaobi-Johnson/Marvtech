import React from "react";
import styled from "styled-components";
import { Button } from "shards-react";
import { theme, mq } from "../../constants/theme";
const { small } = theme.typography.size;

export const Wrapper = styled.div`
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
   /* background-color: #1f2641f0; */
   /* background-color: #04a1ffe3; */
   /* #778899 #1fa6dbab */
   background-color: #55555591; /*#04a5f4
   /* background-image: linear-gradient(180deg, #0087ff00 0%, #007cff80 25%, #0087ffc2 70%, #007aff 100%); */
`;

export const LandingTextBox = styled.div`
   /* font-size: ${small}; */
   width: 50%;
   position: absolute;
   z-index: 500;
   top: 40%;
   left: 8%;
   font-size: 1.1rem;
   transition: all .5s;
   padding: 2rem 0 2rem 2rem;
   border: 2px solid #404646b5;
   &:hover {
     border: 2px solid #2f9dc7;
   }
   div {
     letter-spacing: .5px;
   }
   /* transform: translate(-50%, -50%); */
   @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
      width: 62%;
      top: 27%;
      font-size: .8rem;
      right: 0;
   }

   h2 {
    color: #292929;
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
     padding-right: 5rem;
   }
`;


export const FadedSideBox = styled.div`
   width: 78%;
   height: 100%;
   position: absolute;
   z-index: 250;
   top: 0;
   left: 0;
   background-image: linear-gradient(to right, #1fa6db, #1fa6db00);
`;

export const SideBox = styled.div`
    width: 40%;
    height: 100%;
    position: absolute;
    z-index: 250;
    top: 0;
    left: 0;
    background-color: #1fa6dbd4;
`;


export const StyledButton = styled(Button)`
     border-color: rgb(247, 247, 247);
     color: rgb(229, 233, 236);
     border-radius: 0;
     &:hover {
       background-color: rgb(247, 247, 247);
       color: #292929;
     }
     @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
        display: none;
     }

`;



const Landing = props => (
  <Wrapper>
      <SideBox />
      <Video autoPlay muted loop>
        <source src={require("../../video/landing-video.mp4")} type="video/mp4" />
      </Video>
      <LandingTextBox>
         <h2>Software and Innova<span style={{ color: "rgb(229, 233, 236)" }}>t</span>ion</h2>
         <div>Through our software platform and custom application development
         we aim to drive change in the health,
         business and educational sectors
         </div>
         <StyledButton outline>Learn More</StyledButton>
      </LandingTextBox>
  </Wrapper>
)

export default Landing;
