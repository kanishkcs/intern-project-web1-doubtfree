import React from "react";
import styled, { css } from "styled-components";
import pic from "../assets/team.png";

const Wrapper = styled.div`
  background: linear-gradient(
    68.6deg,
    rgb(252, 165, 241) 1.8%,
    rgb(181, 255, 255) 100.5%
  );
`;
const Main = styled.div`
  display: flex;

  align-items: center;
  height: 100vh;
  @media only screen and (max-width: 500px) {
    padding-top: 35px;
    height: auto;
  }
`;

const Heading = styled.h1`
  margin: 20px;
  left: 45%;
  margin-top: 6%;
  position: absolute;
  @media only screen and (max-width: 500px) {
    text-align: center;
    left: 20%;
  }
`;

const Logo = styled.img`
  width: 65%;
  height: 65%;
  border-radius: 20px;
  @media only screen and (max-width: 500px) {
    width: 60%;
    height: 350px;
  }
`;

const Container = styled.div`
  width: 35%;
  height: 45%;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 30px;
  margin-right: 40px;
  @media only screen and (max-width: 500px) {
    width: 350px;
    height: 250px;
    margin-right: 10px;
  }
`;

const Mission = () => {
  return (
    <>
      <Wrapper>
        <Heading>Our Mission</Heading>
        <Main>
          <Logo src={pic} />
          <Container></Container>
        </Main>
      </Wrapper>
    </>
  );
};

export default Mission;
