import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import PostDetailsHeader from "./PostDetailsHeader";
import defaultBanner from "./images/defaultBanner.png";
import PrompMessage from "./PrompMessage";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserContext";

const PostDetails = () => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const { postId } = useParams();
  const [postDetails, setPostDetails] = useState(null);
  const [requestSent, setRequestSent] = useState(false);
  const [fetchMessage, setFetchMessage] = useState(null);

  useEffect(() => {
    fetch(`/post-details/${postId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 400 || data.status === 500) {
          throw new Error("data.message");
        }
        setPostDetails(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const handleClick = (e) => {
    fetch("/request", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postId: postId,
        userId: currentUser._id,
        email: currentUser.email,
        userBanner: !currentUser.profile.bannerUrl
          ? "https://images5.alphacoders.com/699/699273.png"
          : currentUser.profile.bannerUrl,
      }),
    })
      //sends the data to the server
      .then((res) => res.json())
      //receives the data back from the server
      .then((data) => {
        console.log(data);
        setFetchMessage(data.message);
        setRequestSent(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleMessageClick = () => {
    setRequestSent(false);
  };

  return (
    <>
      {!postDetails ? (
        <h1>Loading ...</h1>
      ) : (
        <div>
          <PostDetailsHeader category={postDetails.data.type} />
          <Banner
            style={{
              backgroundImage: `url(${
                !postDetails.data.authorBanner
                  ? defaultBanner
                  : postDetails.data.authorBanner
              })`,
            }}
          >
            {requestSent === true && (
              <PrompMessage
                fetchMessage={fetchMessage}
                handleMessageClick={handleMessageClick}
              />
            )}
          </Banner>
          <ButtonsDiv>
            <SendRequest  disabled={postDetails.data.author === currentUser.email} onClick={handleClick}>send request</SendRequest>
            <ProfileLink to={`/profile/${postDetails.userId}`}>
              view profile
            </ProfileLink>
          </ButtonsDiv>
          <BioWrapper>
            <BioDiv>{postDetails.data.text}</BioDiv>
            <LevelsDiv>
              <Sport>
                sport
                <div>
                  {!postDetails.data.levelSport
                    ? "-"
                    : postDetails.data.levelSport}
                </div>
              </Sport>
              <Trad>
                trad
                <div>
                  {!postDetails.data.levelTrad
                    ? "-"
                    : postDetails.data.levelTrad}
                </div>
              </Trad>
            </LevelsDiv>
          </BioWrapper>
        </div>
      )}
    </>
  );
};

const Banner = styled.div`
  width: 100vw;
  height: 50vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const ButtonsDiv = styled.div`
  height: 50vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
  position: absolute;
  bottom: 140px;
`;

const SendRequest = styled.button`
  width: 100px;
  height: 100px;
  font-family: "Raleway", sans-serif;
  border-radius: 50%;
  border: none;
  color: black;
  background-color: #f2ae1c;
  padding: 15px;
  margin-bottom: 20px;
  margin-left: 100px;
  font-size: 15px;
  text-align: center;
  display: flex;
  align-items: center;
  :disabled {
    cursor: not-allowed;
  }
  cursor: pointer;
  &:hover {
    color: #ebe8e2;
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
  width: 600px;
  height: 120px;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 20px;
  font-size: 20px;
`;

const ProfileLink = styled(Link)`
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

const Trad = styled(Sport)`
`;

export default PostDetails;
