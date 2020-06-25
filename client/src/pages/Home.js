import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faReact, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';
import withReveal from "react-reveal";
import SectionOne from "../components/Home/SectionOne";
import SectionTwo from "../components/Home/SectionTwo";
import ContactSection from "../components/Home/ContactSection";
import SectionQuote from "../components/Home/SectionQuote";
import SectionThree from "../components/Home/SectionThree";
import SectionFour from "../components/Home/SectionFour";


import {
  Container,
  LandingWrapper,
  VideoOverlay,
  Video,
  LandingTextBox,
  StyledButton,
  MarvisBackground,
  AnimatedHeader,
  Services,
  ServicesLeft,
  ServicesRight,
  ContentBox,
  ImageContainer,
  StyledLink,
  StyledSpan,
  MoreButton,
  Text,
  Title,
  ArrowLeftBtn,
  ArrowRightBtn,
  SectionAbout
} from "../components/HomeComponents/HomeComponents";
import { CSSTransitionGroup } from 'react-transition-group';
import womanWriting from "../images/woman-writing.jpg";

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
  link: "/web-design",
  url: require("../images/portfolios.jpg"),
  alt: "web design"
}

const mobileInfo = {
  title: "Mobile Application Development",
  content: "lfkm lgk ssgp bsombs gbos sogmboirt siob ibgmis biso bs bjosnb;snb;snbsnb s;o bsobmsoin bos bsobs obmsobb obns boinsr bonit iombnwiob otbnoitb obos tib osi boi sot boit",
  link: "/mobile-design",
  url: require("../images/mobile-app.jpg"),
  alt: "mobile app development"
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
             <h2>Software and Innova<span style={{ color: "#04a1ff" }}>t</span>ion</h2>
             <div>Through our software platform and custom application development
             we aim to drive change in the health,
             business and educational sectors
             </div>
             <StyledButton outline>Learn More</StyledButton>
          </LandingTextBox>
        </LandingWrapper>
        <SectionOne />
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
        <SectionTwo />
        <SectionThree />
        <SectionFour />

            {/*
            <Services>
            <ArrowLeftBtn onClick={nextService}><FontAwesomeIcon icon={faArrowLeft} size="sm" /></ArrowLeftBtn>
            <ArrowRightBtn onClick={nextService}><FontAwesomeIcon icon={faArrowRight} size="sm" /></ArrowRightBtn>
               <ServicesLeft>
                 <Fade>
                 <img src={currentService.url} alt={currentService.alt} />
                 </Fade>
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
            </Services> */}

        <SectionQuote />
        <ContactSection />
     </Container>
  )
}

export default Home;
