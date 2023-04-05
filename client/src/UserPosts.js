import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import ProfileHeader from "./ProfileHeader";
import bannerImg from "./images/defaultBanner.png";
import { Link, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserContext";

const UserPosts = () => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [postings, setPostings] = useState();
//   const [indoorReq, setIndoorReq] = useState();
//   const [outdoorReq, setOutdoorReq] = useState();

  useEffect(() => {
    if (currentUser) {
      fetch(`/user-activePosts/${currentUser.email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 400 || data.status === 500) {
            throw new Error("data.message");
          }
          console.log(data);
          setPostings(data.data);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }, []);

const myRequests = postings && postings.map((item) => {return item.requests})
const indoorReq = myRequests && myRequests.find((e) => {return e[0].type === "indoor"})
const outdoorReq = myRequests && myRequests.find((e) => {return e[0].type === "outdoor"})

  return (
    <>
      {!currentUser && !postings && !myRequests ? (
        <h1>Loading...</h1>
      ) : (
        <Wrapper>
          <ProfileHeader />
          <Banner
            style={{
              backgroundImage: `url(${
                !currentUser.bannerUrl ? bannerImg : currentUser.bannerUrl
              })`,
            }}
          ></Banner>
          <InfoDiv>
            <TitleDiv>
              <Title>my Posts</Title>
            </TitleDiv>
          </InfoDiv>
          <PostsDiv>
            <Indoorwrapper>
              <IndoorPost>indoor post Pendings</IndoorPost>
              {indoorReq ? indoorReq.map((item) => {
                return  <PendingWrapper><Avatar src={item.userBanner}/>{item.email}</PendingWrapper>
              }) : <p>you have no indoor pendings at this moment</p>}
            </Indoorwrapper>
            <Outdoorwrapper>
              <OutdoorPost>outdoor post Pendings</OutdoorPost>
              {outdoorReq ? outdoorReq.map((item) => {
                return <PendingWrapper><Avatar src={item.userBanner}/>{item.email}</PendingWrapper>
              }) : <p>you have no outdoor pendings at this moment</p>}
            </Outdoorwrapper>
          </PostsDiv>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div``;
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
const IndoorPost = styled.div`
  background-color: #f2ae1c;
  padding: 10px 30px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
`;
const OutdoorPost = styled(IndoorPost)``;

const PendingWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 290px;
  height: 40px;
  margin-top: 20px;
`
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 20px;
`;

export default UserPosts;
