import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import ProfileHeader from "./ProfileHeader";
import bannerImg from "./images/defaultBanner.png";
import { Link, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserContext";

const UserRequests = () => {
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
    const [requests, setRequests] = useState();


  return (
    <>
    {!currentUser ? (<h1>Loading...</h1>) : 
    (
 <Wrapper>
    <ProfileHeader/>
    <Banner
            style={{
              backgroundImage: `url(${
                !currentUser.bannerUrl ? bannerImg : currentUser.bannerUrl
              })`,
            }}
          ></Banner>
<InfoDiv>
            <TitleDiv>
              <Title>my Requests</Title>
            </TitleDiv>
          </InfoDiv>
          <PostsDiv>
            <Indoorwrapper>
              <IndoorRequests>my indoor Requests</IndoorRequests>
            </Indoorwrapper>
            <Outdoorwrapper>
              <OutdoorRequests>my outdoor Requests</OutdoorRequests>
            </Outdoorwrapper>
          </PostsDiv>
    </Wrapper>
    )}
      </>
  )
}


const Wrapper = styled.div`

`
const Banner = styled.div`
  width: 100vw;
  height: 40vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 60%;
  z-index: 1;
`;

const InfoDiv = styled.div`
  display: flex;
`;
const TitleDiv = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;
const Title = styled.h1`
  margin-top: 20px;
  font-family: "Raleway", sans-serif;
  width: 200px;
  font-weight: 100;
  text-align: center;
  font-size: 22px;
  padding: 5px;
  display: flex;
  justify-content: center;
  background-color: #4c7031;
  color: #ebe8e2;
  border-radius: 30px;
`;

const PostsDiv = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
`;
const Indoorwrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 150px;
`;
const Outdoorwrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 150px;
`;
const IndoorRequests = styled.div`
  background-color: #f2ae1c;
  padding: 10px 30px;
  border-radius: 30px;
`;
const OutdoorRequests = styled(IndoorRequests)``;


export default UserRequests