import React, { useEffect, useState } from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faJava, faReact, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';

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
  ContactInfo,
  StyledLink,
  PolygonOne,
  PolygonTwo,
  ContactOverlay,
  SectionFour,
  StyledSpan,
  MoreButton,
  Text,
  Title,
  ArrowLeftBtn,
  ArrowRightBtn,
  SectionAbout,
  SectionQuote
} from "../components/HomeComponents/HomeComponents";
import { CSSTransitionGroup } from 'react-transition-group';

const Home = props => {

//    useEffect(() => {
//      window.onscroll = function() {myFunction()};
//
// function myFunction() {
//  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//    document.getElementById("arrowOne").className = "animate__animated animate__fadeInRight";
//    document.getElementById("arrowTwo").className = "animate__animated animate__fadeInRight animate__delay-1s";
//  }
// }
//    }, [])

const webInfo = {
  title: "Web Design & Development",
  content: "is at the core of a great digital presence. If your branding is missing clarity and meaning or needs a little beauty lift, our team is here to help. Creating the entire brand identity of a business is an exciting task, and we can build out all aspects covering the logo/mark",
  link: "/web-design"
}

const mobileInfo = {
  title: "Mobile Application Development",
  content: "lfkm lgk ssgp bsombs gbos sogmboirt siob ibgmis biso bs bjosnb;snb;snbsnb s;o bsobmsoin bos bsobs obmsobb obns boinsr bonit iombnwiob otbnoitb obos tib osi boi sot boit",
  link: "/mobile-design"
}


  const [ currentService, setCurrentService ] = useState(webInfo);

  const nextService = () => {
    if(currentService === webInfo) {
        setCurrentService(mobileInfo);
    } else {
        setCurrentService(webInfo)
    }
  }

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
        <SectionAbout>
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
        </SectionAbout>
        <SectionOne>
            // <PolygonOne id="arrowOne" className="animate__animated animate__fadeInLeft animate__delay-2s" key={Date.now()} />
            <PolygonTwo />
            <SectionOneText>
              <h2>Easier Access to Software </h2>
              <p>Most sectors in Nigeria and Africa as a whole have
              challenges getting access to relevant software that will
              make their operations easier. At Marvis Technologies our core focus is to build
              software solutions that will allow these industries manage their data, decisions, and operations
              without having to spend a fortune.</p>
              <p>By targeting organizations who cannot afford sophisticated software, we aim to introduce affordable
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
               <Fade>
               <h2>Other Services </h2>
               <p>We offer affordable software solutions to SMEs to manage their activities on the go through
               web and mobile app development
               </p>
               </Fade>
            </SectionTwoText>
        </SectionTwo>
        <SectionThree>

            <Services>
            <ArrowLeftBtn onClick={nextService}><FontAwesomeIcon icon={faArrowLeft} size="sm" /></ArrowLeftBtn>
            <ArrowRightBtn onClick={nextService}><FontAwesomeIcon icon={faArrowRight} size="sm" /></ArrowRightBtn>
               <ServicesLeft>
                 <img src={require("../images/portfolios.jpg")} alt="web design" />
              </ServicesLeft>

              <ServicesRight>
              <div>
              <StyledSpan>
                 What We Do
              </StyledSpan>
              <Title>{currentService.title}</Title>
              <Text>
                {currentService.content}
               </Text>
              <MoreButton>Learn More</MoreButton>
              </div>
              </ServicesRight>
            </Services>

        </SectionThree>

        <SectionQuote>
        </SectionQuote>
        <ContactSection>
            <ContactOverlay />
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
