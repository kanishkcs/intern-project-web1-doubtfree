import styled from "styled-components";
import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import webdev from "../assets/webdev.webp";
import mentor from "../assets/mentor.png";
import meeting from "../assets/meeting2.png";
import money from "../assets/money.png";

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 550px;
  width: 90%;
  background-color: #00008b;
  color: #fff;
  margin-top: 10%;
  border-radius: 20px;
  text-align: center;

  @media only screen and (max-width: 500px) {
    height: 350px;
  }
`;

const Main = styled.div`
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  background: radial-gradient(
    328px at 2.9% 15%,
    rgb(191, 224, 251) 0%,
    rgb(232, 233, 251) 25.8%,
    rgb(252, 239, 250) 50.8%,
    rgb(234, 251, 251) 77.6%,
    rgb(240, 251, 244) 100.7%
  );
`;

const Heading = styled.h1`
  margin: 20px;
  @media only screen and (max-width: 500px) {
    text-align: center;
  }
`;

const Logo = styled.img`
  width: 65%;
  height: 55%;
  border-radius: 20px;
`;
const Services = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <>
      <Main>
        <Heading> Our Popular Services</Heading>
        <Carousel breakPoints={breakPoints}>
          <Item>
            <Logo src={webdev} />
            <Heading>Develope Your WebSite</Heading>
          </Item>
          <Item>
            <Logo src={meeting} />
            <Heading>Private Limited Company Registration</Heading>
          </Item>
          <Item>
            <Logo src={money} />
            <Heading>Connection with Investor for seed Funding</Heading>
          </Item>
          <Item>
            <Logo src={mentor} />
            <Heading>Mentorship for Your startup</Heading>
          </Item>
          <Item>
            <Logo src={mentor} />
            <Heading>Develope your WebSite</Heading>
          </Item>
        </Carousel>
      </Main>
    </>
  );
};

export default Services;
