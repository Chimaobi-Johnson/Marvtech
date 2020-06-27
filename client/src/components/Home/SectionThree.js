import React from "react";
import styled from "styled-components";
import { Button } from "shards-react";
import portfolios from "../../images/portfolios.jpg";
import Fade from 'react-reveal/Fade';


export const Wrapper = styled.div`
     background-image: linear-gradient(to right,#b5b3b3a3,#87b4beb3), url(${portfolios});
     /* background-image: linear-gradient(to right, #1f2641,#1f2641d6), url(${portfolios}); */
     height: 100vh;
     position: relative;
     background-color: #1f2641;
     div {
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

const SectionThree = props => (
  <Wrapper>
    <div>
    <Fade>
      <h2>Web Design and Development</h2>
      <p>is at the core of a great digital presence. If your branding is missing clarity an
      d meaning or needs a little beauty lift, our team is here to help. Creating the entire
      brand identity of a business is an exciting task, and we can build out all aspects cove
      ring the logo/mark</p>
    </Fade>
    <MoreButton> Learn More </MoreButton>
    </div>
  </Wrapper>
)

export default SectionThree;
