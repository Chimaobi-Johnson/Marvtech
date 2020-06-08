import React from "react";
import styled from "styled-components";
import { Button } from "shards-react";

import { theme } from "../constants/theme";

const { small, xxxlarge } = theme.typography.size;

const Container = styled.div`
   width: 100%;
`;

const LandingWrapper = styled.div`
   width: 100%;
   /* height: 100vh; */
   position: relative;
   /* background-color: blue; */
`;

const Video = styled.video`
   width: 100%;
`;

const VideoOverlay = styled.div`
   width: 100%;
   height: 100%;
   position: absolute;
   z-index: 250;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   opacity: .8;
   background-color: #333; /*#04a5f4*/
`;

const LandingTextBox = styled.div`
   /* font-size: ${small}; */
   width: 50%;
   position: absolute;
   z-index: 500;
   top: 40%;
   right: 8%;
   font-size: 1.1rem;
   /* transform: translate(-50%, -50%); */
   h2 {
    color: #fff;
    font-size: 2.2rem;
    text-transform: uppercase;
    letter-spacing: .5rem;
    font-weight: bold;
    line-height: 1;
   }
   div {
     /* font-size: ${small}; */
     font-weight: 500;
     color: #fff;
     margin-bottom: 1.5rem;
   }
`;

const SectionOne = styled.div`
   display: flex;
   align-items: center;
   width: 100%;
   justify-content: space-between;
   margin: 8rem 0;
`;

const SectionOneText = styled.div`
   flex-basis: 67%;
   padding-left: 7rem;
   padding-right: 10rem;
   border-right: 1px solid #ccc;
   font-size: 1.1rem;
   line-height: 1.7;
   h2 {
     text-align: left;
   }
   position: relative;
`;

const SectionOnePicture = styled.div`
   flex-basis: 30%;
   ul {
     margin-left: 3rem;
     list-style-type: square;
     margin-top: 2rem;
     li {
       font-size: 1.1rem;
       padding: 1rem 0;
       a {
         color: ${theme.colors.mediumBlue};
       }
     }
   }
`;

const SectionTwo = styled.div`
   align-items: center;
   margin: 8rem 0;
`;

const SectionTwoText = styled.div`
   padding-right: 3rem;
   font-size: 1.1rem;
   line-height: 1.7;
   width: 50%;
   margin: 0 auto;
   h2 {
     text-align: left;
   }
`;

const SectionTwoPicture = styled.div`
   flex: 1;
`;

const StyledButton = styled(Button)`
     border-color: ${theme.colors.primary};
     color: ${theme.colors.primary};
     border-radius: 0;
`;

const SectionThree = styled.div`
   width: 100%;
   height: 100vh;
   position: relative;
`;


const MarvisBackground = styled.div`
   height: 80vh;
   width: 80%;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   z-index: -1;
   h1 {
     font-size: 16rem;
     color: #6464640a;
   }
`;

const Services = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
`;

const ServicesLeft = styled.div`
    flex-basis: 70%;
    display: flex;
    flex-wrap: wrap;
`;

const ServicesRight = styled.div`
    flex: 1;
`;

const BlockOne = styled.div`
   width: 50%;
   padding: 2rem 4rem;
`;

const IconBox = styled.div`
   flex-basis: 60%;
`;

const ContentBox = styled.div`
   flex: 1;
`;

const ImageContainer = styled.div`
   width: 87%;
   height: 50%;
   margin-top: 7rem;
   background-color: ${theme.colors.mediumBlue};
   position: relative;
   img {
     width: 100%;
     height: 100%;
     position: absolute;
     top: -7%;
     left: 7%;
     box-shadow: -21px 22px 10px #2d2d2d69;
   }
`;


const AnimatedHeader = styled.h4`
   color: ${theme.colors.mediumBlue};
   padding-left: 8rem;
`;




const Home = props => {

  return (
     <Container>
        <LandingWrapper>
          <VideoOverlay />
          <Video autoPlay muted loop>
            <source src={require("../video/landing-video.mp4")} type="video/mp4" />
          </Video>
          <LandingTextBox>
             <h2>Software and Innova<span style={{ color: "#a9d2ff" }}>t</span>ion</h2>
             <div>Through our software platform and custom application development
             we aim to drive change through the health,
             business and educational sectors
             </div>
             <StyledButton outline>Learn More</StyledButton>
          </LandingTextBox>
        </LandingWrapper>
        <SectionOne>
            <SectionOneText>
              <h2>Easier Access to Software </h2>
              <p>Most sectors in Nigeria and Africa as a whole have
              challenges getting access to relevant software that will
              make their operations easier. At Marvis Technologies our core focus is to build
              software solutions that will allow these industries manage their data, decisions, and operations
              without having to spend a fortune.</p>
              <p>By targeting organizations who cannot afford sophisticated software, we aim to introduce cheaper
              software solutions to these organization through our platform</p>
            </SectionOneText>
            <SectionOnePicture>
               <ul>
                  <li><a href="#">Our Services</a></li>
                  <li><a href="#">Company Description</a></li>
                  <li><a href="#">Partners</a></li>
                  <li><a href="#">Platforms</a></li>
               </ul>
            </SectionOnePicture>
        </SectionOne>
        <SectionTwo>
            <SectionTwoText>
               <h2>Our Services </h2>
               <p>At MarvTech we also offer other services which include web design and development,
                 mobile application design and development. click here to learn more about our projects
               </p>
            </SectionTwoText>
        </SectionTwo>
        <SectionThree>
            <MarvisBackground>
              <h1>MARVIS</h1>
            </MarvisBackground>
            <AnimatedHeader>
              <span className="animate__animated animate__fadeInLeft">THINK > </span>
              <span className="animate__animated animate__fadeInLeft animate__delay-1s">CREATE > </span> 
              <span className="animate__animated animate__fadeInLeft animate__delay-2s">INNOVATE</span>
            </AnimatedHeader>
            <Services>

               <ServicesLeft>
                <BlockOne>
                    <IconBox></IconBox>
                    <ContentBox>
                      <h4>Web Design</h4>
                      <p>We design websites using content management systems
                      We design websites using content management systems
                      We design websites using content management systems</p>
                    </ContentBox>
                </BlockOne>
                <BlockOne>
                    <IconBox></IconBox>
                    <ContentBox>
                      <h4>Web Application Development</h4>
                      <p>We design websites using content management systems
                      We design websites using content management systems
                      We design websites using content management systems</p>
                    </ContentBox>
                </BlockOne>
                <BlockOne>
                    <IconBox></IconBox>
                    <ContentBox>
                      <h4>Mobile Application Development</h4>
                      <p>We design websites using content management systems
                      We design websites using content management systems
                      We design websites using content management systems</p>
                    </ContentBox>
                </BlockOne>
              </ServicesLeft>

              <ServicesRight>
                   <ImageContainer>
                        <img src={require("../images/notebook.jpg")}
                         alt="#" />
                   </ImageContainer>
              </ServicesRight>
            </Services>

        </SectionThree>
     </Container>
  )
}

export default Home;
