import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { CurrentUserContext } from "./CurrentUserContext";

const ProfileHeader = () => {
  const { logout, isAuthenticated, user } = useAuth0();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    const storedUser = window.sessionStorage.getItem('user');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setIsPageLoading(false);
  }, []);
  
  if (isPageLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>{!currentUser ? (<h1>Loading...</h1>) : (
      <Wrapper>
        <LeftDiv>
          <StyledLink to="/home">Dirtbag Finder</StyledLink>
          <Title>{currentUser?.firstName}</Title>
        </LeftDiv>
        <RightDiv>
          <Title>{currentUser?.lastName}</Title>
            <LogOutDiv>
              <LogoutBtn onClick={() => {logout(); window.sessionStorage.removeItem("user"); setCurrentUser(null)}}>Log Out</LogoutBtn>
            </LogOutDiv>
          <UserLink to="/profile">
            <FiUser />
          </UserLink>
        </RightDiv>
      </Wrapper>
      )}
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
const RightDiv = styled(LeftDiv)`
  background-color: #4c7031;
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

const LogOutDiv = styled.div`
  width: 100vw;
  display: flex;
  justify-content: flex-end;
`;

const LogoutBtn = styled(Link)`
  font-family: "Raleway", sans-serif;
  :hover {
    color: #ebe8e2;
  }
  position: relative;
  right: 20px;
`;

export default ProfileHeader;
