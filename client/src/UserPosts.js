import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import ProfileHeader from "./ProfileHeader";
import bannerImg from "./images/defaultBanner.png";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserContext";
import { FiTrash2 } from "react-icons/fi";
import DeletePrompt from "./DeletePrompt";

const UserPosts = () => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [postings, setPostings] = useState();
  const [promptMessage, setPromptMessage] = useState(null);
  const [prompt, setPrompt] = useState(false);
  const [category, setCategory] = useState(null);

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
  }, [currentUser]);

  // this checks if user has indoor and/or outdoor posts
  const indoorCheck =
    postings &&
    postings.some((el) => {
      return el.type === "indoor";
    });
  const outdoorCheck =
    postings &&
    postings.some((el) => {
      return el.type === "outdoor";
    });

    // this filters down the requests from both posts categories
  const myPendings =
    postings &&
    postings.map((item) => {
      return item.requests;
    });

  postings && console.log(postings);
  myPendings && console.log(myPendings);
// this filters both pendings arrays indoor and outdoor. So later I can verify the array.length
  let outArr;
  if (outdoorCheck && postings) {
    outArr =
      postings &&
      postings.filter((el) => {
        return el.type === "outdoor";
      });
  }
  let inArr;
  if (indoorCheck && postings) {
    inArr =
      postings &&
      postings.filter((el) => {
        return el.type === "indoor";
      });
  }

  // finally this gives me data to render after several "checks". I took this route as it was giving me errors if indoor/outdoor pendings was undefined (empty array if the post had no requests yet)
  let indoorPendings;
  if (indoorCheck === true && inArr[0].requests.length > 0) {
    indoorPendings = myPendings.find((e) => {
      return e[0].type === "indoor";
    });
  }

  let outdoorPendings;
  if (outdoorCheck === true && outArr[0].requests.length > 0) {
    outdoorPendings = myPendings.find((e) => {
      return e[0].type === "outdoor";
    });
  }

  // this will set the a few things including prompt and message after clicking the trash can
  const handleTrashClick = (type) => {
    setCategory(type);
    setPrompt(true);
    setPromptMessage(`Are you sure you want to delete your ${type} post?`);
  };

  // this handles prompt click, if cancel simple closes prompt, if delete confirms it will determinate the adecuate post to delete
  let postForDelete;
  const handlePromptClick = (e) => {
    if (e.target.value === "cancel") {
      setPrompt(false);
    } else if (e.target.value === "delete") {
      postForDelete = postings.find((e) => {
        return e.type === category;
      });
      setPrompt(false);
      handleDelete();
    }
  };

  const handleDelete = () => {
    fetch(`/delete-post/${postForDelete._id}`, {
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
      {!currentUser && !postings && !myPendings ? (
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
          <TitleDiv>
            <IndoorTrash
              disabled={!indoorCheck}
              onClick={() => handleTrashClick("indoor")}
            >
              <FiTrash2 />
            </IndoorTrash>
            <Title>my Posts</Title>
            <OutdoorTrash
              disabled={!outdoorCheck}
              onClick={() => handleTrashClick("outdoor")}
            >
              <FiTrash2 />
            </OutdoorTrash>
          </TitleDiv>
          <PostsDiv>
            <Indoorwrapper>
              <IndoorPost>indoor post Pendings</IndoorPost>
              {indoorPendings ? (
                indoorPendings.map((item) => {
                  return (
                    <Link key={item._id} to={`/profile/${item._id}`}>
                      <PendingWrapper>
                        <Avatar src={item.userBanner} />
                        {item.email}
                      </PendingWrapper>
                    </Link>
                  );
                })
              ) : (
                <p>you have no indoor pendings at this moment</p>
              )}
            </Indoorwrapper>
            <Outdoorwrapper>
              <OutdoorPost>outdoor post Pendings</OutdoorPost>
              {outdoorPendings ? (
                outdoorPendings.map((item) => {
                  return (
                    <Link key={item._id} to={`/profile/${item._id}`}>
                      <PendingWrapper>
                        <Avatar src={item.userBanner} />
                        {item.email}
                      </PendingWrapper>
                    </Link>
                  );
                })
              ) : (
                <p>you have no outdoor pendings at this moment</p>
              )}
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleDiv = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
`;
const IndoorTrash = styled.button`
  font-size: 30px;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  border: none;
  background-color: white;
  :disabled {
    cursor: not-allowed;
  }
  cursor: pointer;
`;
const OutdoorTrash = styled(IndoorTrash)``;

const Title = styled.h1`
  margin-top: 10px;
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
  height: 400px;
  margin-left: 170px;
`;

const Outdoorwrapper = styled(Indoorwrapper)`
  margin-right: 170px;
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
`;
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 20px;
`;

export default UserPosts;
