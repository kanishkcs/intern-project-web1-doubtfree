import React from "react";
import styled from "styled-components";
import pic from "../assets/png.png"
const Container = styled.div`
  
  
`;

const Div1 = styled.div`
  position: relative;
  top: 30px;
  width: 650px;
  height: 700px;
  left: 20%;
  box-shadow: rgba(0, 0, 0, 0.974) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  background-color: darkred;
  border-radius: 50px;
  z-index: 1;
  @media  (max-width: 500px){
    width: 300px;
    height: 470px;
    font-size:auto;
    left: 10%;
  }
`;
const Div2 = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  top: 20%;
  width: 800px;
  height: 600px;
  left: 43%;
  background-image: linear-gradient(
    to right,
    #2a1a33,
    #2c1933,
    #381e3b,
    #4d1d4a,
    #2e182a
  );
  word-wrap: break-word;
  font-size: 1em;
  border-radius: 40px;
  z-index: 2;

  @media  (max-width: 500px){
    
    justify-content: center;
    width: 250px;
    height: 400px;
   left: 16%;
  }
 
`;

const Heading = styled.h1`
  color: white;
  @media  (max-width: 500px){
    font-size: 15px;
    word-wrap: break-word;
    margin-left: 20px;
  }
`;

const TryNow = styled.button`
  font-size: 1.5em;
  border-radius: 15px;
  border: none;
  background-color: #ffffff;
  width: 30%;
  height: 55px;
   
  cursor: pointer;
  &:hover {
   
    
     }
     @media  (max-width: 500px){
    font-size: 1em;
    width: 40%;
  height: 30px;
  }
`;

const Png = styled.img`
    position: absolute;
    top: 30%;
    z-index: 3;
    left: 25%;
    @media  (max-width: 500px){
       display: none;
   
  }
`
const Carasoul = () => {
  return (
    <Container>
      <Div1></Div1>
      <Div2>
        <Heading>One Stop Solution To your Startup Needs</Heading>
        <TryNow>Try Now</TryNow>
        
      </Div2>
      <Png src={pic}/>
    </Container>
  );
};

export default Carasoul;
