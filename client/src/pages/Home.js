import React from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import {
  Container,
  LandingWrapper,
  VideoOverlay,
  Video,
  LandingTextBox,
  StyledButton,
  SectionOne,
  SectionOneText,
  SectionOnePicture,
  SectionTwo,
  SectionTwoText,
  MarvisBackground,
  AnimatedHeader,
  Services,
  ServicesLeft,
  ServicesRight,
  BlockOne,
  IconBox,
  ContentBox,
  ImageContainer,
  SectionThree,
  ContactSection,
  ContactInfo
} from "../components/HomeComponents/HomeComponents";

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
               <p>We also offer other services which include web design and development,
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
                      </p>
                    </ContentBox>
                </BlockOne>
                <BlockOne>
                    <IconBox></IconBox>
                    <ContentBox>
                      <h4>Web Application Development</h4>
                      <p>We design websites using content management systems
                      We design websites using content management systems
                      </p>
                    </ContentBox>
                </BlockOne>
                <BlockOne>
                    <IconBox></IconBox>
                    <ContentBox>
                      <h4>Mobile Application Development</h4>
                      <p>We design websites using content management systems
                      We design websites using content management systems
                      </p>
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

        <ContactSection>
            <ContactInfo>
               <h4>Reach us quickly!</h4>
               <ul>
                  <li>Lagos: <FontAwesomeIcon icon={faPhone} size="sm" /> +2348168440027</li>
                  <li>Enugu: <FontAwesomeIcon icon={faPhone} size="sm" /> +2347012191531</li>
                  <li><FontAwesomeIcon icon={faGoogle} size="sm" /> marvistechnologies@gmail.com</li>
               </ul>
            </ContactInfo>
            <ContactForm />
        </ContactSection>
     </Container>
  )
}

export default Home;
