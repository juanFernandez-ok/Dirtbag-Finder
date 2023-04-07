import styled from "styled-components";
import { useContext } from "react";
import ProfileHeader from "./ProfileHeader";
import bannerImg from "./images/defaultBanner.png";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserContext";

const CurrentProfile = () => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  return (
    <>
      {!currentUser ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <ProfileHeader />
          <Banner
            style={{
              backgroundImage: `url(${
                !currentUser.profile.bannerUrl
                  ? bannerImg
                  : currentUser.profile.bannerUrl
              })`,
            }}
          ></Banner>
          <LeftDiv>
            <StyledLink to="/create-post">make a post</StyledLink>
            <StyledLink to="/user-posts">my postings</StyledLink>
            <StyledLink to="/user-requests">my requests</StyledLink>
            <StyledLink to="/past-partners">my past partners</StyledLink>
          </LeftDiv>
          <BioWrapper>
            <BioDiv>
              <TextBox readOnly>{currentUser.profile.bio}</TextBox>
            </BioDiv>
            <CategoriesDiv>
              <In climb={currentUser.profile.indoor}>indoors</In>
              <Out climb={currentUser.profile.outdoor}>outdoors</Out>
            </CategoriesDiv>
            <LevelsDiv>
              <Sport>
                sport<div>{currentUser.profile.levelSport}</div>
              </Sport>
              <Trad>
                trad<div>{currentUser.profile.levelTrad}</div>
              </Trad>
            </LevelsDiv>
          </BioWrapper>

          <Div>
            <EditLink to="/edit-profile">edit profile</EditLink>
          </Div>
        </div>
      )}
    </>
  );
};

const Banner = styled.div`
  width: 100vw;
  height: 40vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 60%;
  z-index: 1;
`;

const LeftDiv = styled.div`
  height: 50vh;
  width: 16vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
  z-index: 2;
  position: absolute;
  bottom: 70px;
`;

const StyledLink = styled(Link)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  color: #ebe8e2;
  background-color: #34571a;
  padding: 15px;
  margin-bottom: 20px;
  font-size: 15px;
  text-align: center;
  display: flex;
  align-items: center;
  :hover {
    color: #f2ae1c;
  }
`;

const BioWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BioDiv = styled.div`
  width: 650px;
  height: 150px;
  display: flex;
  text-align: center;
  margin-top: 20px;
`;

const TextBox = styled.div`
  resize: none;
  width: 650px;
  height: 150px;
  border: none;
  overflow: auto;
  outline: none;
  font-size: 20px;
  text-align: center;
  font-family: "Raleway", sans-serif;
`;

const Div = styled.div`
  display: flex;
  width: 100vw;
  justify-content: flex-end;
`;

const EditLink = styled(Link)`
  margin-right: 80px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  color: #ebe8e2;
  background-color: #34571a;
  padding: 15px;
  margin-bottom: 20px;
  font-size: 17px;
  text-align: center;
  display: flex;
  align-items: center;
  :hover {
    color: #f2ae1c;
  }
  z-index: 2;
  position: relative;
  bottom: 410px;
`;

const CategoriesDiv = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
`;

const In = styled.div`
  width: 130px;
  height: 50px;
  border-radius: 30px;
  background-color: ${(props) =>
    props.climb === true ? "#4c7031" : "antiquewhite"};
  text-align: center;
  padding: 15px;
`;
const Out = styled.div`
  width: 130px;
  height: 50px;
  border-radius: 30px;
  background-color: ${(props) =>
    props.climb === true ? "#4c7031" : "antiquewhite"};
  text-align: center;
  padding: 15px;
`;
const LevelsDiv = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-evenly;
  margin-top: 50px;
  font-size: 25px;
`;

const Sport = styled.div`
  display: flex;
  flex-direction: column;
`;

const Trad = styled.div`
  display: flex;
  flex-direction: column;
`;

export default CurrentProfile;
