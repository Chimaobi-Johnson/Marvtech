import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "shards-react";
import { mq } from "../../constants/theme";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import portfolios from "../../images/portfolios.jpg";
import Fade from 'react-reveal/Fade';


export const Wrapper = styled.div`
     background-image: linear-gradient(to right,#b5b3b3a3,#87b4beb3), url(${portfolios});
     /* background-image: linear-gradient(to right, #1f2641,#1f2641d6), url(${portfolios}); */
     height: 100vh;
     position: relative;
     background-color: #1f2641;
     div {
       @media (max-width: ${mq.tablet.narrow.maxWidth}) and (min-width: ${mq.tablet.narrow.minWidth}) {
         width: 72%;
       }
       @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
         width: 94%;
       }
       color: #000;
       position: absolute;
       top: 50%;
       left: 50%;
       transform: translate(-50%, -50%);
       background-color: #fff;
       width: 40%;
       padding: 2rem;
       box-shadow: 2px 2px 49px #8d8b8b;
       h2 {
         text-transform: uppercase;
         font-size: 1.52rem;
       }
     }
     .mobiledesign__block {
       @media (max-width: ${mq.tablet.narrow.maxWidth}) and (min-width: ${mq.tablet.narrow.minWidth}) {
         width: 72%;
       }
       @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
         width: 94%;
       }
       color: #000;
       position: absolute;
       top: 50%;
       left: 50%;
       transform: translate(-50%, -50%);
       background-color: #fff;
       width: 40%;
       padding: 2rem;
       box-shadow: 2px 2px 49px #8d8b8b;
       h2 {
         text-transform: uppercase;
         font-size: 1.52rem;
       }
     }
`;

export const MoreButton = styled(Button)`
     border-radius: 0;
     border-color: #292929;
     color: #292929;
     background: transparent;
`;

export const NavigationButton = styled(Button)`
     position: absolute;
     top: 48%;
     border-radius: 100%;
     border-color: #868484b0;
     color: #292929;
     background: transparent;
     padding: .8rem 1rem;
`;


const SectionThree = props => {

  const [ services, setServices ] = useState(true);

  const slideToNextItem = () => {
     const webDevelopment = document.getElementById("webDev");
     const mobileDevelopment = document.getElementById("mobileDev");

     if(!services) {
     // webDevelopment.setAttribute("class", "animate__animated animate__fadeOutRight");
     // mobileDevelopment.setAttribute("class", "animate__animated animate__fadeInRight");
     setTimeout(() => {
       mobileDevelopment.style.display = "block";
       webDevelopment.style.display = "none";
       setServices(true);
     }, 0);
   } else {

     // mobileDevelopment.setAttribute("class", "animate__animated animate__fadeOutRight");
     setTimeout(() => {
       webDevelopment.style.display = "block";
       mobileDevelopment.style.display = "none";
       setServices(false);
     }, 0);
   }

     // webDevelopment.style.display = "none";
     // mobileDevelopment.style.display === "block" ? "none" :
  }

    return (
      <Wrapper>
        <NavigationButton style={{ left: '1%' }} onClick={slideToNextItem}><FontAwesomeIcon icon={faArrowLeft} size="sm" /></NavigationButton>
        <NavigationButton style={{ right: '1%' }} onClick={slideToNextItem}><FontAwesomeIcon icon={faArrowRight} size="sm" /></NavigationButton>
        <div className="webdesign__block" id="webDev">
        <Fade>
          <h2>Web Design and Development</h2>
          <p>Looking for a great website? <br />
            We create affordable website designs using content management systems,
            our team also develops web based applications customized to suit your preference.
            In our world Affordability and Quality shouldn’t be compromised,
            tell us about your amazing idea let’s get started!</p>
        </Fade>
        <MoreButton> Learn More </MoreButton>
        </div>
        <div className="mobiledesign__block" style={{ display: "none" }} id="mobileDev">
        <Fade>
          <h2>Mobile Application Development</h2>
          <p>With the swift rise in mobile technology,
          we are here to ensure you always stay relevant and connect with your target segment on the go.
          </p>
        </Fade>
        <MoreButton> Learn More </MoreButton>
        </div>
      </Wrapper>
    )

}


export default SectionThree;
