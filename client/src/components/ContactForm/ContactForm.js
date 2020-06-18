import React from "react";
import styled from "styled-components";
import { Form, FormInput, FormTextarea, FormGroup, Button } from "shards-react";

import { theme } from "../../constants/theme";
const { small, xxxlarge } = theme.typography.size;

export const FormContainer = styled.div`
   flex-basis: 40%;
   margin: 0 auto;
   padding: 2rem;
   border: 1px solid #ccc;
   z-index: 1;
   background-color: #fff;
   input {
     border-radius: 0;
   }
`;

const ContactForm = props => {

  return (
    <FormContainer>
     <Form>
       <FormGroup>
         <label htmlFor="#name">Full Name</label>
         <FormInput id="#name" placeholder="Enter Name" />
        <FormGroup>
         <label htmlFor="#email">E-Mail</label>
         <FormInput type="email" id="#email" placeholder="Enter E-mail" />
        </FormGroup>
         </FormGroup>
         <FormGroup>
           <label htmlFor="#number">Phone Number</label>
           <FormInput type="text" id="#number" placeholder="Your Phone Number" />
         </FormGroup>
         <FormGroup>
           <label htmlFor="#compant">Company</label>
           <FormInput type="text" id="#company" placeholder="Your Company" />
         </FormGroup>
         <FormGroup>
           <label htmlFor="#message">Message</label>
           <FormTextarea />
         </FormGroup>
         <Button outline>Send</Button>
     </Form>
    </FormContainer>
  )
}

export default ContactForm;
