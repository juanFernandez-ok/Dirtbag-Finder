import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Header1 from "./Header1";
import outBanner4 from "./images/outBanner4.png";
import gymImg from "./images/gymBanner.png";
import PostsFetch from "./PostsFetch";

const Partners = () => {
  const { category } = useParams();
console.log(category);
  return (
    <>
      <Header1 />
      <Wrapper>
        <BgImg category={category}>
          <ImgWrapper>
            <PostsFetch category={category} />
          </ImgWrapper>
        </BgImg>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

`;

const BgImg = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-image: ${(props) =>
    props.category === "indoor" ? `url(${gymImg})` : `url(${outBanner4})`};
  background-repeat: no-repeat;
  background-size: cover;

`;

const ImgWrapper = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: space-evenly;

`;
export default Partners;
