import React from "react";
import styled from "styled-components";
import { Button } from "shards-react";
import businessWomen from "../../images/business-women.jpg";
import QuoteModal from "../Modals/QuoteModal";


export const Wrapper = styled.div`
     height: 60vh;
     background-color: #e6e8e9;
     position: relative;
     background-image: linear-gradient(to right, #1c1c1cdb,#df752854), url(${businessWomen});
     background-position-y: 30%;
     background-size: cover;
     div {
       position: absolute;
       top: 50%;
       left: 50%;
       transform: translate(-50%, -50%);
       text-alien: center;
     }
`;

export const QuoteButton = styled(Button)`
     background: transparent;
     border-color: #fff;
     border-radius: 0;
     &:hover {
       box-shadow: 0;
     }
`;

const SectionQuote = props => {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };


  return (
  <Wrapper>
  <QuoteModal
    handleOpen={handleOpen}
    handleClose={handleClose}
    open={open}
   />
    <div>
     <QuoteButton className="animate__animated animate__swing animate__delay-2s animate__repeat-3" onClick={handleOpen}>REQUEST A QUOTE NOW</QuoteButton>
    </div>
  </Wrapper>
)
}

export default SectionQuote;
