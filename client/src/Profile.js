import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import ProfileHeader from "./ProfileHeader";
import bannerImg from "./images/defaultBanner.png";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <ProfileHeader />
      <Banner></Banner>
      <LeftDiv>
        <StyledLink>make a post</StyledLink>
        <StyledLink>my postings</StyledLink>
        <StyledLink>my requests</StyledLink>
        <StyledLink>my past partners</StyledLink>
      </LeftDiv>
      <BioWrapper>
        <BioDiv>
          I love the outdoors and like to climb multipitch routes. Mostly sport
          and trad, but when in the city I like bouldering at Allez Up.
        </BioDiv>
      </BioWrapper>

      <Div>
        <EditLink>edit profile</EditLink>
      </Div>
    </>
  );
};

const Banner = styled.div`
  width: 100vw;
  height: 40vh;
  background-image: url(${bannerImg});
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
  display: flex;
  width: 100vw;
  justify-content: center;
`;

// const BioDiv = styled.div`
//   width: 600px;
//   height: 200px;
//   background-color: aqua;
//   position: absolute;
//   top: 65%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   text-align: center;
// `;
const BioDiv = styled.div`
  width: 600px;
  height: 150px;
  background-color: aqua;
  display: flex;
  text-align: center;
  margin-top: 20px;
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
  bottom: 220px;
`;

export default Profile;
