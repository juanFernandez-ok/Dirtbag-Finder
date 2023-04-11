import styled from "styled-components";
import { useEffect } from "react";
import myImage from "./images/dirtbag.png";
import carabinerImg from "./images/carabiner.png";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated]);

  return !isAuthenticated ? (
    <>
      <Wrapper>
        <LeftDiv>
          <CarabinerImg src={carabinerImg} />
          <GreenDiv>
            <P1>dirtbag</P1>
          </GreenDiv>
          <YellowDiv>
            <P2>finder</P2>
          </YellowDiv>
        </LeftDiv>
        <ImageDiv></ImageDiv>
      </Wrapper>
      <ButtonDiv>
        <RegisterButton onClick={() => loginWithRedirect()}>
          Sign In
        </RegisterButton>
      </ButtonDiv>
    </>
  ) : null;
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
`;

const LeftDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 50vw;
`;

const CarabinerImg = styled.img`
  position: fixed;
  top: 18%;
  left: 19%;
  transform: rotate(-8deg);
`;

const GreenDiv = styled.div`
  width: 25vw;
  height: 100vh;
  background-color: #4c7031;
  color: #f2ae1c;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const YellowDiv = styled.div`
  width: 25vw;
  height: 100vh;
  background-color: #f2ae1c;
  color: #4c7031;
  display: flex;
  align-items: center;
`;

const P1 = styled.h1`
  margin-right: 13px;
  font-size: 80px;
  margin-top: 250px;
`;

const P2 = styled(P1)`
  margin-left: 10px;
`;

const ImageDiv = styled.div`
  width: 50vw;
  height: 100vh;
  background-image: url(${myImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
const ButtonDiv = styled.div`
  position: fixed;
  top: 80%;
  left: 21%;
`;
const RegisterButton = styled.button`
  width: 120px;
  height: 35px;
  border: none;
  font-family: "Ovo", serif;
  font-size: 15px;
  border-radius: 30px;
  padding: 5px;
  color: #e4d8bf;
  font-weight: 100;
  background-color: #34571a;
  :hover {
    color: black;
    background-color: #96b13f;
  }
  cursor: pointer;
`;
export default LandingPage;
