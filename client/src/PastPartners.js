import styled from "styled-components";
import { useContext } from "react";
import ProfileHeader from "./ProfileHeader";
import bannerImg from "./images/defaultBanner.png";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserContext";

const PastPartners = () => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  return (
    <>
      {!currentUser ? (
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
            <TitleDiv>
              <Title>past Partners</Title>
            </TitleDiv>
            <PartnersContainer>
            <PartnersDiv>
                {currentUser.oldPartners.map((item) => {
              return   <Link key={item._id} to={`/profile/${item._id}`}> <SinglePartner><Avatar src={item.userBanner}/>{item.email}</SinglePartner></Link>  
                })
}
            </PartnersDiv>
            </PartnersContainer>

        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
`;
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

const PartnersContainer = styled.div`
display: flex;
justify-content: center;
`
const PartnersDiv = styled.div`
width: 90vw;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`
const SinglePartner = styled.div`
  display: flex;
  align-items: center;
  width: 450px;
  height:40px;
  margin-top: 20px;
  margin-left: 150px;

`
const Avatar = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
margin-right: 20px;
` 
export default PastPartners;
