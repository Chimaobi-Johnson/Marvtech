import React from "react";
import styled from "styled-components";
import { Form, FormInput, FormTextarea, FormGroup, Button } from "shards-react";


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

export const SubmitButton = styled(Button)`
   border-radius: 0
`;

const ContactForm = props => {

  return (
    <FormContainer id="contact">
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
         <SubmitButton outline>Send</SubmitButton>
     </Form>
    </FormContainer>
  )
}

export default ContactForm;
