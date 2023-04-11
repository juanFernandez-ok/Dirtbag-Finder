import styled from "styled-components";
import { useState, useContext } from "react";
import ProfileHeader from "./ProfileHeader";
import bannerImg from "./images/defaultBanner.png";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserContext";
import { FiTrash2 } from "react-icons/fi";
import DeletePrompt from "./DeletePrompt";

const UserRequests = () => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [promptMessage, setPromptMessage] = useState(null);
  const [prompt, setPrompt] = useState(false);
  const [postNum, setPostNum] = useState(null);

  const handleTrashClick = (num) => {
    setPrompt(true);
    setPostNum(num);
    setPromptMessage(`Are you sure you want to delete your request?`);
    console.log(postNum);
  };

  const handlePromptClick = (e) => {
    if (e.target.value === "cancel") {
      setPrompt(false);
    } else if (e.target.value === "delete") {
      setPrompt(false);
      handleDelete();
    }
  };

  const handleDelete = () => {
    fetch(`/delete-request/${postNum}`, {
      method: "DELETE",
      body: JSON.stringify({ userId: currentUser._id }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((data) => {
      console.log(data);
    });
  };

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
          >
            {prompt === true && (
              <DeletePrompt
                promptMessage={promptMessage}
                handlePromptClick={handlePromptClick}
              />
            )}
          </Banner>
          <MainTitleDiv>
            <Title>my Requests</Title>
          </MainTitleDiv>
          <CategoriesTitlesDiv>
            <IndoorRequests>my indoor Requests</IndoorRequests>
            <OutdoorRequests>my outdoor Requests</OutdoorRequests>
          </CategoriesTitlesDiv>
          <MainDiv>
            <LeftMain>
              {currentUser.pendingRequests
                .filter((item) => {
                  return item.type === "indoor";
                })
                .map((item) => {
                  return (
                    <LeftDiv key={item._id}>
                      <TrashCan onClick={() => handleTrashClick(item._id)}>
                        <FiTrash2 />
                      </TrashCan>
                      <Link to={`/post-details/${item._id}`}>
                        <RequestWrapper>
                          <Avatar src={item.authorBanner} />
                          {item.author}
                        </RequestWrapper>
                      </Link>
                    </LeftDiv>
                  );
                })}
            </LeftMain>
            <RightMain>
              {currentUser.pendingRequests
                .filter((item) => {
                  return item.type === "outdoor";
                })
                .map((item) => {
                  return (
                    <RightDiv key={item._id}>
                      <TrashCan onClick={() => handleTrashClick(item._id)}>
                        <FiTrash2 />
                      </TrashCan>
                      <Link to={`/post-details/${item._id}`}>
                        <RequestWrapper>
                          <Avatar src={item.authorBanner} />
                          {item.author}
                        </RequestWrapper>
                      </Link>
                    </RightDiv>
                  );
                })}
            </RightMain>
          </MainDiv>
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainTitleDiv = styled.div`
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

const CategoriesTitlesDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
`;

const IndoorRequests = styled.div`
  background-color: #f2ae1c;
  padding: 10px 30px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  width: 250px;
  margin-left: 230px;
`;
const OutdoorRequests = styled(IndoorRequests)`
  margin-right: 230px;
`;

const MainDiv = styled.div`
  width: 100vw;
  display: flex;
`;

const LeftMain = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RightMain = styled(LeftMain)``;

const TrashCan = styled.div`
  display: flex;
  margin-right: 30px;
  font-size: 20px;
  margin-top: 20px;
  cursor: pointer;
  z-index: 50;
`;

const LeftDiv = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightDiv = styled(LeftDiv)``;

const RequestWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 290px;
  height: 40px;
  margin-top: 20px;
`;
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 20px;
`;

export default UserRequests;
