import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import defaultBanner from "./images/defaultBanner.png";

const PostsFetch = ({ category }) => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch(`/activePosts/${category}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 400 || data.status === 500) {
          throw new Error("data.message");
        }
    
        setPosts(data.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <>
      {!posts ? (
        <h1>Loading...</h1>
      ) : (
        <Wrapper>
          {posts.map((item) => {
            return (
              <ImgContainer key={item._id}>
                <Link to={`/post-details/${item._id}`}><Img
                  src={!item.authorBanner ? defaultBanner : item.authorBanner}
                /></Link>
                <Category>
                  <span>sport</span>
                  <span>trad</span>
                </Category>
                <Category>
                  <span>{item.levelSport}</span>
                  <span>{!item.levelTrad ? "-" : item.levelTrad}</span>
                </Category>
              </ImgContainer>
            );
          })}
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 50px;
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  width: 200px;
  height: 255px;
  background-color: #a0b18a;
  overflow: hidden;
  margin-left: 80px;
  margin-right: 80px;
  margin-bottom: 30px;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
`;

const Category = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
export default PostsFetch;
