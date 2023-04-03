import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import gymImg from "./images/gymBanner.png";
import outBanner from "./images/outBanner3.png";
import outBanner4 from "./images/outBanner4.png";
import outBanner5 from "./images/outBanner5.png";

const InOut = () => {
  return (
    <Wrapper>
      <LeftDiv>
        <Link to="/partners/indoor">
          <P1>indoors</P1>
        </Link>
      </LeftDiv>
      <RightDiv>
        <Link to="/partners/outdoor">
          <P1>outdoors</P1>
        </Link>
      </RightDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100vw;
  height: 100vh;
`;
const LeftDiv = styled.div`
  width: 50%;
  background-image: url(${gymImg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RightDiv = styled.div`
  width: 50%;
  background-image: url(${outBanner4});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const P1 = styled.p`
  font-weight: 900;
  font-size: 40px;
`;

export default InOut;
