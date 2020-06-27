import React from "react";
import styled from "styled-components";
import ServicesLayout from "../layouts/PageLayout/ServicesLayout";
import { NavLink } from "react-router-dom";

const WebDesignBlock = styled.div`
   width: 100%;
   display: flex;
`;

const WDBlockLeft = styled.div`
   flex-basis: 40%;
`;

const WDBlockRight = styled.div`
   flex: 1;
   padding: 4rem 2rem;
`;

const WebDevBlock = styled.div`
    width: 100%;
    display: flex;
    margin: 2rem 0;
`;

const DevBlockLeft = styled.div`
   flex-basis: 50%;
`;

const DevBlockRight = styled.div`
   flex: 1;
   padding: 4rem 2rem;
`;


const MobileDevBlock = styled.div`
    width: 100%;
    display: flex;
    margin: 2rem 0;
`;

const MDBlockLeft = styled.div`
   flex-basis: 50%;
`;

const MDBlockRight = styled.div`
   flex: 1;
   padding: 4rem 2rem;
`;

const RequestPortfolio = styled.div`
   
`;


const Services = props => {

  return (
    <ServicesLayout
       covername="Services"
       coverdescr="ksind subis flnf va ksds dhbu ksn skdburbf eibviek fva vliab"
    >
      <WebDesignBlock>
          <WDBlockLeft></WDBlockLeft>
          <WDBlockRight>
            <h2>Web Design</h2>
            <p>is at the core of a great digital presence. If your branding is missing clarity an d
            meaning or needs a little beauty lift, our team is here to help. Creating the entire brand
            identity of a business is an exciting task, and we can build out all aspects cove ring the logo/mark</p>
          </WDBlockRight>
      </WebDesignBlock>

      <WebDevBlock>
      <DevBlockLeft>
        <h2>Web Development</h2>
        <p>is at the core of a great digital presence. If your branding is missing clarity an d
        meaning or needs a little beauty lift, our team is here to help. Creating the entire brand
        identity of a business is an exciting task, and we can build out all aspects cove ring the logo/mark</p>
      </DevBlockLeft>
      <DevBlockRight>
      </DevBlockRight>
      </WebDevBlock>

      <MobileDevBlock>
      <MDBlockLeft>
      </MDBlockLeft>
      <MDBlockRight>
        <h2>Mobile Application Development</h2>
        <p>is at the core of a great digital presence. If your branding is missing clarity an d
        meaning or needs a little beauty lift, our team is here to help. Creating the entire brand
        identity of a business is an exciting task, and we can build out all aspects cove ring the logo/mark</p>
      </MDBlockRight>
      </MobileDevBlock>
      <RequestPortfolio>

      </RequestPortfolio>
    </ServicesLayout>
  )
}

export default Services;
