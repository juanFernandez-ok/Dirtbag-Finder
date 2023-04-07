import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { useAuth0 } from "@auth0/auth0-react";

const Header1 = () => {
  const { category } = useParams();
  const { logout, isAuthenticated } = useAuth0();

  return (
    <>
      <Wrapper>
        <LeftDiv>
          <StyledLink to="/home">Dirtbag Finder</StyledLink>
          <Title>{category}</Title>
        </LeftDiv>
        <RightDiv>
          <Title>Partners</Title>
          <OutDiv> <LogoutBtn onClick={() => logout()}>Log Out</LogoutBtn></OutDiv>
          <UserLink to="/profile">
            <FiUser />
          </UserLink>
        </RightDiv>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const StyledLink = styled(Link)`
  margin-left: 25px;
  font-size: 20px;
  font-weight: 400;
  font-family: "Raleway", sans-serif;
  :hover {
    color: #ebe8e2;
  }
`;
const LeftDiv = styled.div`
  background-color: #f2ae1c;
  width: 50vw;
  height: 8vh;
  font-family: "Ovo", serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #4c7031;
`;
const RightDiv = styled.div`
  background-color: #4c7031;
  width: 50vw;
  height: 8vh;
  font-family: "Ovo", serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #f2ae1c;
`;
const Title = styled.p`
  margin-right: 10px;
  margin-left: 10px;
  font-size: 30px;
`;

const UserLink = styled(Link)`
  margin-right: 30px;
  font-size: 30px;
  display: flex;
  align-items: center;
  :hover {
    color: #ebe8e2;
  }
`;
const OutDiv = styled.div`
width: 100vw;
display: flex;
justify-content: flex-end;
`

const LogoutBtn = styled(Link)`
  font-family: "Raleway", sans-serif;
  :hover {
    color: #ebe8e2;
  }
position: relative;
right: 20px;

`

export default Header1;
