import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import ProfileHeader from "./ProfileHeader";
import bannerImg from "./images/defaultBanner.png";
import { Link, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserContext";

const CreatePost = () => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [postText, setPostText] = useState(null);
  const [indoorColor, setIndoorColor] = useState(false);
  const [outdoorColor, setOutdoorColor] = useState(false);
  const navigate = useNavigate();

  const handlePostText = (e) => {
    setPostText(e.target.value);
  };

  const handleClick = () => {
    setIndoorColor(!indoorColor);
  };

  const handleClick1 = () => {
    setOutdoorColor(!outdoorColor);
  };

  const handleSubmit = () => {
    fetch("/newPost", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        author: currentUser.email,
        authorBanner: !currentUser.profile.bannerUrl
          ? "https://images2.alphacoders.com/129/thumbbig-1292794.webp"
          : currentUser.profile.bannerUrl,
        type: indoorColor ? "indoor" : "outdoor",
        text: postText,
        levelSport: currentUser.profile.levelSport,
        levelTrad: currentUser.profile.levelTrad,
      }),
    })
      //sends the data to the server
      .then((res) => res.json())
      //receives the data back from the server
      .then((data) => {
        console.log(data);
        // navigate(`/post-details/${data.newPostId}`);
        navigate(`/profile`);
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
                !currentUser.profile.bannerUrl
                  ? bannerImg
                  : currentUser.profile.bannerUrl
              })`,
            }}
          ></Banner>
          <Wrapper>
            <PostDiv>
              <P1>Please write a post description below</P1>
              <TextBox
                value={postText}
                maxLength={300}
                onChange={handlePostText}
              ></TextBox>
              <P1>Where do you want to climb?</P1>
            </PostDiv>
            <CategoriesDiv>
              <In
                disabled={outdoorColor === true}
                value={indoorColor}
                bcColor={indoorColor}
                onClick={handleClick}
              >
                indoors
              </In>
              <Out
                disabled={indoorColor === true}
                value={outdoorColor}
                bcColor1={outdoorColor}
                onClick={handleClick1}
              >
                outdoors
              </Out>
            </CategoriesDiv>
          </Wrapper>
          <Div>
            <ConfirmPost
              disabled={!indoorColor && !outdoorColor}
              onClick={handleSubmit}
            >
              create post
            </ConfirmPost>
            <ConfirmPost to="/profile">cancel</ConfirmPost>
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

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const P1 = styled.p`
  margin-bottom: 20px;
`;

const PostDiv = styled.div`
  width: 600px;
  height: 250px;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 20px;
`;

const TextBox = styled.textarea`
  resize: none;
  width: 600px;
  height: 150px;
  font-size: 20px;
  font-family: "Raleway", sans-serif;
  margin-bottom: 30px;
`;

const CategoriesDiv = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
`;

const In = styled.button`
  width: 130px;
  height: 50px;
  border-radius: 30px;
  font-size: 16px;
  border: none;
  background-color: ${(props) =>
    props.bcColor === true ? "#4c7031" : "antiquewhite"};
  background-size: cover;
  text-align: center;
  padding: 15px;
  cursor: pointer;
`;
const Out = styled.button`
  width: 130px;
  height: 50px;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  background-color: ${(props) =>
    props.bcColor1 === true ? "#4c7031" : "antiquewhite"};
  text-align: center;
  padding: 15px;
  cursor: pointer;
`;

const Div = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

const ConfirmPost = styled(Link)`
  margin-right: 140px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  color: #ebe8e2;
  background-color: #34571a;
  padding: 23px;
  margin-bottom: 50px;
  font-size: 19px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    color: #f2ae1c;
  }
  position: relative;
  bottom: 300px;
`;

export default CreatePost;
