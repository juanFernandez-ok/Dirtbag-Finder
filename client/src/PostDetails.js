import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import PostDetailsHeader from "./PostDetailsHeader";
import defaultBanner from "./images/defaultBanner.png";
import { Link } from "react-router-dom";

const PostDetails = () => {
  const { postId } = useParams();
  const [postDetails, setPostDetails] = useState(null);

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

  if (postDetails) {
    console.log(postDetails);
  }

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
          ></Banner>
          <RequestDiv>
            <SendRequest>send request</SendRequest>
          </RequestDiv>
          <BioWrapper>
            <BioDiv>{postDetails.data.text}</BioDiv>
            <LevelsDiv>
              <Sport>
                sport<div>{!postDetails.data.levelSport ? "-" : postDetails.data.levelSport}</div>
              </Sport>
              <Trad>
                trad<div>{!postDetails.data.levelTrad ? "-" : postDetails.data.levelTrad}</div>
              </Trad>
            </LevelsDiv>
          </BioWrapper>
          <ProfileLinkWrapper>
            <ProfileLink to={`/profile/${postDetails.userId}`}>view profile</ProfileLink>
          </ProfileLinkWrapper>
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
  z-index: 1;
`;

const RequestDiv = styled.div`
  height: 50vh;
  width: 16vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
  z-index: 2;
  position: absolute;
  bottom: 120px;
`;

const SendRequest = styled(Link)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  color: black;
  background-color: #f2ae1c;
  padding: 15px;
  margin-bottom: 20px;
  font-size: 15px;
  text-align: center;
  display: flex;
  align-items: center;
  :hover {
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
  text-align: center;
  margin-top: 20px;
`;

const ProfileLinkWrapper = styled.div`
  display: flex;
  width: 100vw;
  justify-content: flex-end;
  z-index: 2;
  position: relative;
  bottom: 317px;
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

const Trad = styled.div`
  display: flex;
  flex-direction: column;
`;

export default PostDetails;
