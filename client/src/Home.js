import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import carabinerImg from "./images/carabiner.png";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { logout, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  console.log(isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, []);
  return (
    <Wrapper>
      <LeftDiv>
        <Carabiner src={carabinerImg} />
        <H1>dirtbag finder</H1>
        {isAuthenticated && <LogoutBtn onClick={() => logout()}>Log Out</LogoutBtn>}
      </LeftDiv>
      <RightDiv>
        <Link to="/profile">
          <Profile>
            <Title>profile</Title>
            <Info>this is your personal profile</Info>
          </Profile>
        </Link>
        <Link to="/select-category">
          <Partners>
            <Title>partners</Title>
            <Info>find climbing partners in your area!</Info>
          </Partners>
        </Link>
        <Gyms>
          <Title>gyms</Title>
          <Info>find gyms around your town</Info>
        </Gyms>
      </RightDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;
const LeftDiv = styled.div`
  background-color: #f2ae1c;
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Carabiner = styled.img`
  transform: rotate(-8deg);
  color: #4c7031;
`;
const H1 = styled.h1`
  font-size: 80px;
  color: #4c7031;
  margin-top: 150px;
  font-weight: 100;
`;
const RightDiv = styled.div`
  font-family: "Raleway", sans-serif;
  width: 50vw;
  display: flex;
  flex-direction: column;
`;
const Profile = styled.div`
  background-color: #4c7031;
  color: #e4d8bf;
  height: 33vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Partners = styled.div`
  background-color: #34571a;
  color: #e4d8bf;
  height: 33vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Gyms = styled.div`
  background-color: #ffffff;
  color: #4c7031;
  height: 33vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.p`
  font-size: 50px;
  margin-left: 25px;
`;

const Info = styled.p`
  margin-right: 25px;
`;

const LogoutBtn = styled(Link)`
margin-top: 20px;
font-size: 20px;
font-family: "Raleway", sans-serif;
  :hover {
    color: #ebe8e2;
  }
`

export default Home;
