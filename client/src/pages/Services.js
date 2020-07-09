import React from "react";
import styled from "styled-components";
import ServicesLayout from "../layouts/PageLayout/ServicesLayout";
import { NavLink } from "react-router-dom";
import SectionQuote from "../components/Home/SectionQuote";
import Fade from 'react-reveal/Fade';
import { mq } from "../constants/theme";


const ServiceWrapper = styled.div`
   padding: 0 5rem;
   @media screen and (max-width: ${mq.phone.narrow.maxWidth}) {
      padding: 0;
   }
`;


const WebDesignBlock = styled.div`
   width: 100%;
   display: flex;
   min-height: 80vh;
   @media (max-width: ${mq.tablet.narrow.maxWidth}) and (min-width: ${mq.tablet.narrow.minWidth}) {
      display: block;
      /* min-height: 44vh; */
   }
   @media screen and (max-width: ${mq.phone.narrow.maxWidth}) {
      display: block;
      min-height: 66vh;
   }
`;

const WDBlockLeft = styled.div`
   flex-basis: 40%;
   @media screen and (max-width: ${mq.phone.narrow.maxWidth}) {
      width: 100%;
   }
`;

const WDBlockRight = styled.div`
@media screen and (max-width: ${mq.phone.narrow.maxWidth}) {
   width: 100%;
   min-height: 44vh;
}
   flex: 1;
   padding: 4rem 2rem;
   padding: 1rem;
   position: relative;
   div {
     @media screen and (max-width: ${mq.phone.narrow.maxWidth}) {
          background-image: linear-gradient(to right, #fff, #ffffffd6);
          padding: 1rem 1.5rem;
          width: 81%;
          top: 48%;
     }
     position: absolute;
     z-index: 2;
     background-color: #fff;
     left: 0;
     width: 76%;
     top: 66%;
     padding: 1rem;
   }
   img {
     @media screen and (max-width: ${mq.phone.narrow.maxWidth}) {
          width: 48%;
          top: 17%;
     }
     width: 31%;
     position: absolute;
     top: 7%;
     right: 0;
   }
`;

const WebDevBlock = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin: 2rem 0;
    @media screen and (max-width: ${mq.phone.narrow.maxWidth}) {
       flex-direction: column-reverse;
    }
`;

const DevBlockLeft = styled.div`
   flex-basis: 50%;
   @media screen and (max-width: ${mq.phone.narrow.maxWidth}) {
      width: 100%;
      padding: 0 2rem;
   }
`;

const DevBlockRight = styled.div`
@media screen and (max-width: ${mq.phone.narrow.maxWidth}) {
   width: 100%;
   min-height: 44vh;
}
   flex: 1;
   padding: 4rem 2rem;
   min-height: 80vh;
   position: relative;
   img {
     width: 70%;
   }
   .first-web-image {
     @media screen and (max-width: ${mq.phone.narrow.maxWidth}) {
          top: 25%;
     }
      position: absolute;
      z-index: 1;
      top: 40%;
      left: 20%;
      box-shadow: 1px 2px 72px #ccc;
   }
   .second-web-image {
     @media screen and (max-width: ${mq.phone.narrow.maxWidth}) {
          top: 9%;
     }
      z-index: 2;
      position: absolute;
      top: 15%;
      left: 10%;
      box-shadow: 1px 2px 72px #605e5e69;
   }
`;


const MobileDevBlock = styled.div`
    width: 100%;
    display: flex;
    margin: 2rem 0;
    @media screen and (max-width: ${mq.phone.narrow.maxWidth}) {
         display: block;
    }
`;

const MDBlockLeft = styled.div`
   flex-basis: 50%;
   position: relative;
   img {
     @media screen and (max-width: ${mq.phone.narrow.maxWidth}) {
          position: relative;
          left: 22%;
          right: 0;
     }
     width: 48%;
     position: absolute;
     right: 32%;
   }
`;

const MDBlockRight = styled.div`
@media screen and (max-width: ${mq.phone.narrow.maxWidth}) {
     width: 100%;
}
   flex: 1;
   padding: 4rem 2rem;
`;

const Testimonials = styled.div`
@media screen and (max-width: ${mq.phone.narrow.maxWidth}) {
   padding-bottom: 1rem;
}
   h6 {
     text-align: center;
     text-transform: uppercase;
     color: #eaeaea;
     padding-top: 5rem;
   }
   .testimonial_subtitle {
     text-align: center;
     font-size: 1.5rem;
     font-weight: 500;
     color: #00c3ff;
     margin-bottom: 4rem;
   }
   background-color: #242424;
   width: 100%;
   min-height: 120vh;
`;

const TestimonialBoxContainer = styled.div`
.testimonial_centerbox {
  transform: scale(115%);
  @media screen and (max-width: ${mq.phone.narrow.maxWidth}) {
     transform: scale(1);
  }
}
  @media screen and (max-width: ${mq.phone.narrow.maxWidth}) {
     display: block;
  }
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
`;

const TestimonialBox = styled.div`
   @media screen and (max-width: ${mq.phone.narrow.maxWidth}) {
     margin: 3rem 2rem;
   }
   &:hover {
     transform: scale(115%);
     /* box-shadow: 1px 2px 72px #020202; */
     z-index: 2;
   }
   transition: all 1s;
   border: 1px solid #ccc;
   flex-basis: 25%;
   background-color: #f4f7fe;
   background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23a4a4a4' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
   padding: 1rem 2rem;
   .testimonial_text {
     text-align: center;
   }
   .testimonial_owner {
     color: #000;
     font-weight: bold;
     padding: 0.5rem;
     margin-bottom: 0;
     text-align: center;
   }
   .testimonial_position {
     text-align: center;

   }
   img {
     height: 68px;
     width: 70px;
     border-radius: 100%;
     display: block;
     margin: 1rem auto;
     border: 2px solid #cecdcd;
   }
`;

const Quote = styled.span`
   content: "\201D";
   font-size: 1rem;
   text-align: center;
   font-weight: bold;
`;

const HeadingLine = styled.div`
   width: 50px;
   height: 2px;
   margin: 0 auto;
   background-color: #eaeaea;
`;

const RequestPortfolio = styled.div`

`;


const Services = props => {

  return (
    <ServicesLayout
       covername="Services"
       coverdescr="ksind subis flnf va ksds dhbu ksn skdburbf eibviek fva vliab"
    >
    <ServiceWrapper>
      <WebDesignBlock>
          <WDBlockLeft></WDBlockLeft>
          <WDBlockRight id="webDesign">
           <Fade>
            <div>
             <h2>Web Design</h2>
              <p>is at the core of a great digital presence. If your branding is missing clarity an d
              meaning or needs a little beauty lift, our team is here to help. Creating the entire brand
              identity of a business is an exciting task, and we can build out all aspects cove ring the logo/mark</p>
            </div>
            <img src={require("../images/onechildonelens.jpg")} alt="website image" />
           </Fade>
          </WDBlockRight>
      </WebDesignBlock>

      <WebDevBlock>
      <DevBlockLeft id="webDevelopment">
       <Fade>
        <h2>Web Development</h2>
        <p>is at the core of a great digital presence. If your branding is missing clarity an d
        meaning or needs a little beauty lift, our team is here to help. Creating the entire brand
        identity of a business is an exciting task, and we can build out all aspects cove ring the logo/mark</p>
       </Fade>
      </DevBlockLeft>
      <DevBlockRight>
        <Fade>
         <img className="first-web-image" src={require("../images/surveybuddy.png")} alt="surveybuddy image" />
         <img className="second-web-image" src={require("../images/mariodating.png")} alt="surveybuddy image" />
        </Fade>
      </DevBlockRight>
      </WebDevBlock>

      <MobileDevBlock>
      <MDBlockLeft>
        <Fade>
         <img src={require("../images/Picture1.png")} alt="mobile app image" />
        </Fade>
      </MDBlockLeft>
      <MDBlockRight id="mobileDesign">
       <Fade>
        <h2>Mobile Application Development</h2>
        <p>is at the core of a great digital presence. If your branding is missing clarity an d
        meaning or needs a little beauty lift, our team is here to help. Creating the entire brand
        identity of a business is an exciting task, and we can build out all aspects cove ring the logo/mark</p>
       </Fade>
      </MDBlockRight>
      </MobileDevBlock>
      </ServiceWrapper>
      <Testimonials id="testimonials">
      <h6>Testimonials</h6>
      <p className="testimonial_subtitle">What our clients say about us</p>
        <TestimonialBoxContainer>
          <TestimonialBox>
             <Quote>&#8221;</Quote>
             <p className="testimonial_text">Working with Marvtech is just great,
             my problems have been solved overnight</p>
             <HeadingLine />
             <img src={require("../images/girl-ph.jpg")} alt="" />
             <p className="testimonial_owner">Mrs Philip Etong</p>
             <p className="testimonial_position">CEO BedRock Foundation</p>
          </TestimonialBox>

          <TestimonialBox className="testimonial_centerbox">
             <Quote>&#8221;</Quote>
             <p className="testimonial_text">Working with Marvtech is just great,
             my problems have been solved overnight</p>
             <HeadingLine />
             <img src={require("../images/girl-ph.jpg")} alt="" />
             <p className="testimonial_owner">Mrs Philip Etong</p>
             <p className="testimonial_position">CEO BedRock Foundation</p>
          </TestimonialBox>

          <TestimonialBox>
             <Quote>&#8221;</Quote>
             <p className="testimonial_text">Working with Marvtech is just great,
             my problems have been solved overnight</p>
             <HeadingLine />
             <img src={require("../images/girl-ph.jpg")} alt="" />
             <p className="testimonial_owner">Mrs Philip Etong</p>
             <p className="testimonial_position">CEO BedRock Foundation</p>
          </TestimonialBox>
         </TestimonialBoxContainer>
      </Testimonials>
      <RequestPortfolio>
      </RequestPortfolio>
    </ServicesLayout>
  )
}

export default Services;
