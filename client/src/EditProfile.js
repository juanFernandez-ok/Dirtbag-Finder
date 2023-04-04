import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import ProfileHeader from "./ProfileHeader";
import bannerImg from "./images/defaultBanner.png";
import { Link, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserContext";

const EditProfile = () => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [indoorColor, setindoorColor] = useState(null);
  const [outdoorColor, setoutdoorColor] = useState(null);
  const [bioText, setBioText] = useState(null);
  const [sportText, setSportText] = useState(null);
  const [tradText, setTradText] = useState(null);
  const navigate = useNavigate();

useEffect(() => {
if(currentUser) {
setindoorColor(currentUser.profile.indoor)
setoutdoorColor(currentUser.profile.outdoor)
setBioText(currentUser.profile.bio)
setSportText(currentUser.profile.levelSport)
setTradText(currentUser.profile.levelTrad)

}

},[currentUser])

  const handleClick = (e) => {
    setindoorColor(!indoorColor);
  };
  const handleClick1 = (e) => {
    setoutdoorColor(!outdoorColor);
  };
  const handleBioText = (e) => {
    setBioText(e.target.value);
  };
  const handleSportText = (e) => {
    setSportText(e.target.value);
  };
  const handleTradText = (e) => {
    setTradText(e.target.value);
  };

  const handleSubmit = () => {
    fetch("/edit-profile", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: currentUser._id,
        bio: bioText,
        indoor: indoorColor,
        outdoor: outdoorColor,
        levelSport: sportText,
        levelTrad: tradText,
      }),
    })
      //sends the data to the server
      .then((res) => res.json())
      //receives the data back from the server
      .then((data) => {
        setCurrentUser(data.data);
        navigate("/profile");
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
                !currentUser.bannerUrl ? bannerImg : currentUser.bannerUrl
              })`,
            }}
          ></Banner>
          <BioWrapper>
            <BioDiv>
              <TextBox
                value={bioText}
                maxLength={300}
                onChange={handleBioText}
              ></TextBox>
            </BioDiv>
            <CategoriesDiv>
              <In
                value={indoorColor}
                bcColor={indoorColor}
                onClick={handleClick}
              >
                indoors
              </In>
              <Out
                value={outdoorColor}
                bcColor1={outdoorColor}
                onClick={handleClick1}
              >
                outdoors
              </Out>
            </CategoriesDiv>
            <LevelsDiv>
              <Sport>
                sport
                <SportText
                  value={sportText}
                  maxLength={5}
                  onChange={handleSportText}
                ></SportText>
              </Sport>
              <Trad>
                trad
                <TradText
                  value={tradText}
                  maxLength={5}
                  onChange={handleTradText}
                ></TradText>
              </Trad>
            </LevelsDiv>
          </BioWrapper>
          <Div>
            <SaveLink onClick={handleSubmit}>save</SaveLink>
            <SaveLink to="/profile">cancel</SaveLink>
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

const TextBox = styled.textarea`
  resize: none;
  width: 600px;
  height: 150px;
  font-size: 15px;
  font-family: "Raleway", sans-serif;
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
    props.bcColor === true ? "#4c7031" : "antiquewhite"};
  background-size: cover;
  text-align: center;
  padding: 15px;
  cursor: pointer;
`;
const Out = styled.div`
  width: 130px;
  height: 50px;
  border-radius: 30px;
  background-color: ${(props) =>
    props.bcColor1 === true ? "#4c7031" : "antiquewhite"};
  text-align: center;
  padding: 15px;
  cursor: pointer;
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

const SportText = styled.textarea`
  resize: none;
  width: 90px;
  height: 50px;
  font-size: 26px;
`;

const Trad = styled.div`
  display: flex;
  flex-direction: column;
`;

const TradText = styled.textarea`
  resize: none;
  width: 90px;
  height: 50px;
  font-size: 26px;
`;

const Div = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

const SaveLink = styled(Link)`
  margin-right: 140px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  color: #ebe8e2;
  background-color: #34571a;
  padding: 23px;
  margin-bottom: 50px;
  font-size: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    color: #f2ae1c;
  }
  position: relative;
  bottom: 350px;
`;

export default EditProfile;
