import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "shards-react";
import { mq } from "../../constants/theme";
import mobileBg from "../../images/droneview.png";
import { withRouter } from "react-router-dom";

export const Wrapper = styled.div`
   width: 100%;
   /* height: 100vh; */
   position: relative;
   /* background-color: blue; */
`;

export const MobileWrapper = styled.div`
   width: 100%;
   height: 69vh;
   /* background-image: linear-gradient(to top, #1ea2e3c4, #0909094f), url(${mobileBg}); */
   background-image: linear-gradient(to top, rgb(30 162 227 / 0%), rgba(9, 9, 9, 0.31)), url(${mobileBg});
   background-size: cover;
   background-position: right;
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
   /* background-image: linear-gradient(#202020bf,#eff0f069); */
   /* background-color: #1f2641f0; */
   /* background-color: #04a1ffe3; */
   /* #778899 #1fa6dbab */
     background-color: #0009; /*#04a5f4 */
   /* background-image: linear-gradient(180deg, #0087ff00 0%, #007cff80 25%, #0087ffc2 70%, #007aff 100%); */
`;

export const MobileLandingTextBox = styled.div`
   width: 80%;
   position: absolute;
   z-index: 500;
   top: 41%;
   right: 10px;
   font-size: 1rem;
   transition: all .3s;
   padding: 2rem 0 2rem 2rem;
   background-color: #06070887;
   /* transform: translate(-50%, -50%); */
   h2 {
    color: #00b8d8;
    font-size: 1.6rem;
    text-transform: uppercase;
    letter-spacing: .5rem;
    font-weight: bold;
    line-height: 1;
   }
   div {
     letter-spacing: .5px;
     color: #e6e6e6;
     font-weight: 500;
     margin-bottom: 1.5rem;
   }
`;

export const LandingTextBox = styled.div`
   @media (max-width: ${mq.tablet.narrow.maxWidth}) and (min-width: ${mq.tablet.narrow.minWidth}) {
      width: 72%;
   }
   @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
      width: 62%;
      top: 27%;
      font-size: .8rem;
      right: 0;
   }
   @media screen and (max-width: ${mq.phone.narrow.maxWidth}) {
      padding: 2rem 0;
      top: 47%;
      width: 100%;
      left: 0;
   }
   width: 50%;
   position: absolute;
   z-index: 500;
   top: 40%;
   right: 0;
   font-size: 1.1rem;
   transition: all .3s;
   padding: 2rem 0 2rem 2rem;
   /* border: 2px solid #404646b5; */
   /* &:hover {
     border: 2px solid #eaeaea;
   } */
   div {
     letter-spacing: .5px;
   }
   /* transform: translate(-50%, -50%); */
   h2 {
    color: #ffffffd4;
    font-size: 2.2rem;
    text-transform: uppercase;
    letter-spacing: .5rem;
    font-weight: bold;
    line-height: 1;
    @media screen and (max-width: ${mq.phone.narrow.maxWidth}) {
       padding-left: 1.6rem;
    }
    @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
       font-size: 1.2rem;
    }
   }
   div {
     @media screen and (max-width: ${mq.phone.narrow.maxWidth}) {
       color: #000;
       padding: 1rem;
       background-color: #ffffffeb;
     }
     font-weight: 500;
     color: #ffffffb0;
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
    .sidebox__left {
      flex-basis: 40%;
      background-color: #1fa6dbd4;
      height: 100%;
    }
    .sidebox__right {
      flex: 1;
      background-color: #38aad6b3;
      height: 100%;
    }
    display: flex;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 250;
    top: 0;
    left: 0;
`;


export const StyledButton = styled(Button)`
     @media screen and (max-width: ${mq.phone.narrow.maxWidth}) {
       border-color: rgb(247, 247, 247);
     }
     color: rgb(229, 233, 236);
     border-radius: 0;
     border-color: rgb(0, 183, 255);
     &:hover {
       background-color: rgb(247, 247, 247);
       color: #292929;
     }
     @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
        display: none;
     }

`;



const Landing = props => {

  const [ isMobile, setMediaQuery ] = useState(true);

  useEffect(() => {
    const x = window.matchMedia("(max-width: 450px)");
    setMediaQuery(x.matches);
  })


  // myFunction(x) // Call listener function at run time
  // // x.addListener(myFunction)
  // })

 // const gotoPage = () => {
 //   props.history.push("#sectionOne");
 // }

  const renderLandingSection = () => {
    if(isMobile) {
      return (
        <MobileWrapper>
           <MobileLandingTextBox>
             <h2>Software and Innova<span style={{ color: "rgb(229, 233, 236)" }}>t</span>ion</h2>
             <div>Through our software platforms and custom application development
              we aim to drive change within Small and Medium Enterprises
             </div>
             <StyledButton outline>Learn More</StyledButton>
           </MobileLandingTextBox>
        </MobileWrapper>
      )
    } else {
      return (
        <Wrapper>
           {/*
            <SideBox>
              <div className="sidebox__left"></div>
              <div className="sidebox__right"></div>
            </SideBox> */}
            <VideoOverlay />
            <Video autoPlay muted loop>
              <source src={require("../../video/landing-video.mp4")} type="video/mp4" />
            </Video>
            <LandingTextBox>
               <h2>Software and Innova<span style={{ color: "rgb(0, 183, 255)" }}>t</span>ion</h2>
               <div>Through our software platforms and custom application development
               we aim to drive change within Small and Medium Enterprises
               </div>
               <StyledButton outline><a style={{ textDecoration: 'none', color: 'inherit' }} href="#sectionOne">Learn More</a></StyledButton>
            </LandingTextBox>
        </Wrapper>
      )
    }
  }

  return (
    <div>
       {renderLandingSection()}
    </div>
  )
}


export default withRouter(Landing);
