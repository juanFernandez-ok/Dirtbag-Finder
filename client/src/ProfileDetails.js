import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import ProfileDetailsHeader from "./ProfileDetailsHeader";
import defaultBanner from "./images/defaultBanner.png";

const ProfileDetails = () => {
  const [profileInfo, setProfileInfo] = useState();
  const { userId } = useParams();

  useEffect(() => {
    fetch(`/user/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 400 || data.status === 500) {
          throw new Error("data.message");
        }
        console.log(data.data);
        setProfileInfo(data.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <>
      {!profileInfo ? (
        <h1>Loading...</h1>
      ) : (
        <Wrapper>
          <ProfileDetailsHeader
            firstName={profileInfo.firstName}
            lastName={profileInfo.lastName}
          />
          <Banner
            style={{
              backgroundImage: `url(${
                !profileInfo.profile.bannerUrl
                  ? defaultBanner
                  : profileInfo.profile.bannerUrl
              })`,
            }}
          ></Banner>
          <BioWrapper>
            <BioDiv>{profileInfo.profile.bio}</BioDiv>
            <CategoriesDiv>
              <In indoor={profileInfo.profile.indoor}>indoors</In>
              <Out outdoor={profileInfo.profile.outdoor}>outdoors</Out>
            </CategoriesDiv>
            <LevelsDiv>
              <Sport>
                sport
                <div>
                  {!profileInfo.profile.levelSport
                    ? "-"
                    : profileInfo.profile.levelSport}
                </div>
              </Sport>
              <Trad>
                trad
                <div>
                  {!profileInfo.profile.levelTrad
                    ? "-"
                    : profileInfo.profile.levelTrad}
                </div>
              </Trad>
            </LevelsDiv>
          </BioWrapper>
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

const BioWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BioDiv = styled.div`
  width: 600px;
  height: 150px;
  display: flex;
  text-align: center;
  margin-top: 20px;
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
    props.indoor === true ? "#4c7031" : "antiquewhite"};
  text-align: center;
  padding: 15px;
`;
const Out = styled.div`
  width: 130px;
  height: 50px;
  border-radius: 30px;
  background-color: ${(props) =>
    props.outdoor === true ? "#4c7031" : "antiquewhite"};
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

export default ProfileDetails;
