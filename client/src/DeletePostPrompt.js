import styled from "styled-components";


const DeletePostPrompt = ({promptMessage, handlePromptClick}) => {

  return (
    <>
    <ConfirmationWrapper>
      <Message>{promptMessage}</Message>
      <BtnWrapper>
      <CancelBtn value={"cancel"} onClick={handlePromptClick}>cancel</CancelBtn>
      <DeleteBtn value={"delete"} onClick={handlePromptClick}>delete</DeleteBtn>
      </BtnWrapper>
    </ConfirmationWrapper>
  </>
  )
}

const ConfirmationWrapper = styled.div`
background-color: beige;
width: 400px;
height: 150px;
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
const BtnWrapper = styled.div`
width: 350px;
display: flex;
justify-content: space-between;

`
const CancelBtn = styled.button`
width: 100px;
padding: 5px;
font-size: 15px;
border-radius: 20px;
border: none;
background-color: #799b5f;
display: flex;
justify-content: center;
`
const DeleteBtn = styled(CancelBtn)`
`



export default DeletePostPrompt;