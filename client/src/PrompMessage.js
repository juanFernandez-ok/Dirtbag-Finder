import styled from "styled-components";

const PrompMessage = ({fetchMessage, handleMessageClick}) => {


  return (
    <>
      <ConfirmationWrapper>
        <Message>{fetchMessage}</Message>
        <CloseBtn onClick={handleMessageClick}>close</CloseBtn>
      </ConfirmationWrapper>
    </>
  );
};

const ConfirmationWrapper = styled.div`
background-color: beige;
width: 400px;
height: 100px;
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
z-index: 20;
`
const Message = styled.p`
font-size: 15px;
text-align: center;
`
const CloseBtn = styled.button`
width: 100px;
padding: 5px;
font-size: 15px;
border-radius: 20px;
border: none;
background-color: #799b5f;
`


export default PrompMessage;
