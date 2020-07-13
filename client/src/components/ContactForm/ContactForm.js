import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Form, FormInput, FormTextarea, FormGroup, Button } from "shards-react";
import axios from "axios";

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

export const SendingError = styled.p`
   padding: .8rem 1.2rem;
   background-color: red;
   color: #fff;
   margin-top: 1rem;
`;

export const SendingSuccess = styled.p`
   margin-top: 1rem;
   padding: .8rem 1.2rem;
   background-color: green;
   color: #fff;
`;

export const SubmitButton = styled(Button)`
   border-radius: 0
`;

const ContactForm = props => {

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ company, setCompany ] = useState('');
  const [ message, setMessage ] = useState('');
  const [ sending, setSending ] = useState(false);
  const [ sendingError, setError ] = useState(null);
  const [ sendingSuccess, setSuccess ] = useState(null);

  const changeInputNameHandler = event => {
    setName(event.target.value);
  }
  const changeInputEmailHandler = event => {
    setEmail(event.target.value);
  }
  const changeInputPhoneHandler = event => {
    setPhone(event.target.value);
  }
  const changeInputCompanyHandler = event => {
    setCompany(event.target.value);
  }
  const changeInputMessageHandler = event => {
    setMessage(event.target.value);
  }

  const validateEmail = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return (true)
     }
     return (false)
  }

  const submitFormHandler = async (event) => {
    event.preventDefault();

    if(name.length < 3) {
      setError("Name is too short")
      return;
    }
    if(!validateEmail(email)) {
      setError("Email field must contain an email");
    }
    setSending(true);
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('company', company);
    formData.append('message', message);
    const response = await axios.post("/api/contact-message", formData);
    try {
      if(response) {
        setSuccess("Message sent successfully. We will get back to you shortly!");
        setSending(false);
      }
    } catch (error) {
      setError("Sending failed, try again later");
      setSending(false);
    }
  }

  return (
    <FormContainer id="contact">
     <Form>
       <FormGroup>
         <label htmlFor="#name">Full Name *</label>
         <FormInput id="#name" onChange={changeInputNameHandler} placeholder="Enter Name" />
        <FormGroup>
         <label htmlFor="#email">E-Mail *</label>
         <FormInput type="email" id="#email" onChange={changeInputEmailHandler} placeholder="Enter E-mail" />
        </FormGroup>
         </FormGroup>
         <FormGroup>
           <label htmlFor="#number">Phone Number</label>
           <FormInput type="text" id="#number" onChange={changeInputPhoneHandler} placeholder="Your Phone Number" />
         </FormGroup>
         <FormGroup>
           <label htmlFor="#compant">Company</label>
           <FormInput type="text" id="#company" onChange={changeInputCompanyHandler} placeholder="Your Company" />
         </FormGroup>
         <FormGroup>
           <label htmlFor="#message">Message *</label>
           <FormTextarea onChange={changeInputMessageHandler} />
         </FormGroup>
         <SubmitButton onClick={submitFormHandler} outline>{sending ? "Sending..." : "Send"} <FontAwesomeIcon icon={faPaperPlane} size="sm" /></SubmitButton>
         {sendingError ? <SendingError>{sendingError}</SendingError> : null }
         {sendingSuccess ? <SendingSuccess>{sendingSuccess}</SendingSuccess> : null }
     </Form>
    </FormContainer>
  )
}

export default ContactForm;
