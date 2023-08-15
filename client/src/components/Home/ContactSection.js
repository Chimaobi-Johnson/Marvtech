import React from "react";
import styled from "styled-components";
import ContactForm from "../ContactForm/ContactForm";
import { mq } from "../../constants/theme";
import contactBg from '../../images/charles.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';



export const Wrapper = styled.div`
    /* (to right, #04a1ffe3,#04a1ffe3) */
   /* background-image: url("../../images/programming.jpg"); */
   /* linear-gradient(to right,#000000db,#4192e996), url(/static/media/charles.2a5b88ea.jpg) */
   background-image: linear-gradient(to right, #000000b0,#88b6c00a), url(${contactBg});
   background-size: cover;
   width: 100%;
   display: flex;
   position: relative;
   justify-content: space-around;
   align-items: flex-start;
   margin: 0;
   padding: 5rem 9rem;
   margin-bottom: 0;
   @media (max-width: ${mq.tablet.narrow.maxWidth}) and (min-width: ${mq.tablet.narrow.minWidth}) {
     padding: 5rem 0;
   }
   @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
      display: block;
      padding: 1rem;
   }
`;


// export const ContactOverlay = styled.div`
//    /* position: absolute;
//    top: 50%;
//    height: 100%;
//    width: 100%;
//    left: 50%;
//    transform: translate(-50%, -50%);
//    background-color: linear-gradient(${theme.colors.primary}, ${theme.colors.lightGold}); */
// `;

export const ContactInfo = styled.div`
   flex-basis: 50%;
   padding: 2rem;
   padding-left: 10rem;
   padding-top: 3rem;
   z-index: 1;
   h4 {
     color: #fff;
   }
   @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
      padding-left: 0;
      padding-top: 0;
      padding: 2rem;
   }
   ul {
     list-style: none;
     padding-left: 0;
     li {
       padding: .5rem 0;
       color: #fff;
     }
   }
`;

const ContactSection = props => (
  <Wrapper>
      <ContactInfo>
         <h4>Reach us quickly!</h4>
         <ul>
            <li>Lagos: <FontAwesomeIcon icon={faPhone} size="sm" /> +2348168440027</li>
            <li>Enugu: <FontAwesomeIcon icon={faPhone} size="sm" /> +447759991282</li>
            <li><FontAwesomeIcon icon={faGoogle} size="sm" /> marvistechnologies@gmail.com</li>
         </ul>
      </ContactInfo>
      <ContactForm />
  </Wrapper>
)

export default ContactSection;
