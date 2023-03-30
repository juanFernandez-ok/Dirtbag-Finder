import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Header1 from "./Header1";
import outBanner4 from "./images/outBanner4.png";
import gymImg from "./images/gymBanner.png";


const Partners = () => {
    const { category } = useParams();

    return (
        <>
        <Header1 />
      <BgImg category={category}></BgImg>
     
        </>
    )

}


const BgImg = styled.div`
width: 100vw;
height: 95vh;
background-image: ${props => props.category === "indoors" ? `url(${gymImg})` : `url(${outBanner4})`};
background-repeat: no-repeat;
background-size: cover;
`



export default Partners;