import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { mq } from "../../constants/theme";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faGoogle, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ReactFade from 'react-reveal/Fade';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: '70%',
    padding: '2rem'
  },
}));

const StyledBackdrop = styled(Backdrop)`
   background-color: #0000008f;
`;

const CustomModal = styled(Modal)`
   @media screen and (max-width: ${mq.phone.narrow.maxWidth}) {
     .makeStyles-paper-3 {
       width: 80%;
     }
   }
`;



const Wrapper = styled.div`
   width: 100%;
   /* background-color: #292929; */
   background-color: #0c0e11;
   background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%235d5c5e' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
   display: flex;
   padding: 4rem 3rem;
   align-items: center;
   @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
      display: block;
      padding: 3rem 0;
   }
`;

const FooterLeft = styled.div`
   flex-basis: 70%;
   display: flex;
   align-items: flex-start;
   @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
      display: block;
   }
`;

const FooterRight = styled.div`
   flex: 1;
   padding-left: 7rem;
   @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
      padding-left: 1rem;
   }
   ul {
     list-style: none;
     display: flex;
     padding-left: 0;
     li {
       margin-right: .8rem;
     }
   }
`;

const MenuContainer = styled.div`
   margin: 0 3rem;
   @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
      margin: 0;
   }
   h3 {
     text-transform: uppercase;
     font-size: 1.2rem;
     color: #ffffff8c;
     padding-left: 2rem;
   }
   ul {
     list-style: none;
     li {
       padding: .2rem 0;
       a {
         color: #595959;
       }
     }
   }
`;

const StyledNavLink = styled.a`

`;


const Footer = props => {

  const classes = useStyles();
    const [missionModal, setMissionModal] = React.useState(false);
    const [visionModal, setVisionModal] = React.useState(false);

    const missionModalOpen = () => {
      setMissionModal(true);
    };

    const missionModalClose = () => {
      setMissionModal(false);
    };

    const visionModalOpen = () => {
      setVisionModal(true);
    };

    const visionModalClose = () => {
      setVisionModal(false);
    };

    const MissionModal = () => (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={missionModal}
        onClose={missionModalClose}
        closeAfterTransition
        BackdropComponent={StyledBackdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
       <Fade in={missionModal}>
        <div className={classes.paper}>
          <h2 id="transition-modal-title">Our Mission</h2>
          <p id="transition-modal-description">
          “To help drive technological growth and innovation in Nigeria and Africa's
          business environment by providing easier access to technology and relevant software solutions.”</p>
        </div>
       </Fade>
      </Modal>
    )

    const VisionModal = () => (
      <CustomModal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={visionModal}
        onClose={visionModalClose}
        closeAfterTransition
        BackdropComponent={StyledBackdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
       <Fade in={visionModal}>
        <div className={classes.paper}>
          <h2 id="transition-modal-title">Our Vision</h2>
          <p id="transition-modal-description">“To be a leading provider of quality technological solutions in Nigeria and beyond”</p>
        </div>
       </Fade>
      </CustomModal>
    )


  return (
     <Wrapper>
       {MissionModal()}
       {VisionModal()}
        <FooterLeft>
          <MenuContainer>
            <ReactFade>
             <h3 style={{ paddingLeft: '1rem' }}>Quick Links</h3>
              <ul>
                <li><StyledNavLink href="/">Home</StyledNavLink></li>
                {/*
                <li><StyledNavLink href="#">Company Description</StyledNavLink></li>
                <li><StyledNavLink href="#">Web Design and Development</StyledNavLink></li>
                <li><StyledNavLink href="#">Portfolios</StyledNavLink></li> */}
              </ul>
            </ReactFade>
          </MenuContainer>

          <MenuContainer>
           <ReactFade>
             <h3>Company</h3>
              <ul>
                <li><StyledNavLink href="/about">About Us</StyledNavLink></li>
                <li><StyledNavLink href="/services">Services</StyledNavLink></li>
                <li><StyledNavLink style={{ cursor: 'pointer'}} onClick={missionModalOpen}>Mission Statement</StyledNavLink></li>
                <li><StyledNavLink style={{ cursor: 'pointer'}} onClick={visionModalOpen}>Our Vision</StyledNavLink></li>
                <li><StyledNavLink href="#contact">Contact Us</StyledNavLink></li>
              </ul>
            </ReactFade>
          </MenuContainer>

          <MenuContainer>
            <ReactFade>
             <h3>Services</h3>
              <ul>
                 <li><StyledNavLink href="/services">Web Design</StyledNavLink></li>
                 <li><StyledNavLink href="/services">Web Development</StyledNavLink></li>
                 <li><StyledNavLink href="/services">Mobile Application Development</StyledNavLink></li>
              </ul>
            </ReactFade>
          </MenuContainer>

        </FooterLeft>
        <FooterRight>
          <ReactFade>
            <p>+2347012191531</p>
            <ul>
               <li><StyledNavLink href="#"><FontAwesomeIcon icon={faFacebookF} size="sm" /></StyledNavLink></li>
               <li><StyledNavLink href="#"><FontAwesomeIcon icon={faTwitter} size="sm" /></StyledNavLink></li>
               <li><StyledNavLink href="#"><FontAwesomeIcon icon={faGoogle} size="sm" /></StyledNavLink></li>
               <li><StyledNavLink href="#"><FontAwesomeIcon icon={faWhatsapp} size="sm" /></StyledNavLink></li>
            </ul>
            <p>&copy; Marvis Technologies</p>
          </ReactFade>
        </FooterRight>
     </Wrapper>
  )
}

export default Footer;
