import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import styled from "styled-components";
import { Form, FormInput, FormTextarea, FormGroup, FormSelect, Button } from "shards-react";
import bgImage from "../../images/businessmeeting2.jpg";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export const Wrapper = styled.div`
   background-image: url(${bgImage});
   background-size: cover;
   background-repeat: no-repeat;
   border-radius: 8px;
`;

export const FormContainer = styled.div`
   border-radius: 8px;
   flex-basis: 40%;
   margin: 0 auto;
   padding: 4rem 5rem;
   border: 1px solid #ccc;
   z-index: 1;
   background-color: #0000009e;
   h2 {
     color: #fff;
     padding: 1rem;
     text-align: center;
   }
   form {
     display: flex;
     justify-content: space-between;
     .form-group {
       color: #fff;
     }
     .form-control {
       color: #eaeaea;
     }
     input {
       border-radius: 0;
       background: transparent;
     }
     select {
       border-radius: 0;
       background: transparent;
     }
     textarea {
       border-radius: 0;
       background: transparent;
     }
   }
`;

export const SubmitButton = styled(Button)`
   border-radius: 0
`;


const QuoteModal = ({ handleOpen, handleClose, open }) => {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Wrapper>
          <FormContainer id="contact">
          <h2>Get in touch with us</h2>
           <Form>
             <div style={{ flexBasis: "47%" }}>
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
               </div>

               <div style={{ flexBasis: "47%" }}>
               <FormGroup>
                 <label htmlFor="#projectDetails">Project Details</label>
                 <FormTextarea />
               </FormGroup>
               <FormGroup>
                 <label htmlFor="#typeofproject">Type of Project</label>
               <FormSelect>
                 <option value="Web Design">Web Design</option>
                 <option value="Web Application Development">Web Application Development</option>
                 <option value="Mobile Application Design">Mobile Application Design</option>
                 <option value="Backend Development">Backend Development</option>
                 <option value="Frontend Development">Frontend Development</option>
                 <option value="UI/UX Design">UI/UX Design</option>
               </FormSelect>
               </FormGroup>
               <FormGroup>
                 <label htmlFor="#how">How did you hear about us?</label>
               <FormSelect>
                 <option value="Social Media">Social Media</option>
                 <option value="Referral">Referral</option>
                 <option value="Website">Website</option>
                 <option value="Other">Other</option>
               </FormSelect>
               </FormGroup>
               <SubmitButton>Send</SubmitButton>
               </div>
           </Form>
          </FormContainer>
          </Wrapper>
        </Fade>
      </Modal>
    </div>
  );
}


export default QuoteModal;
