import React from "react";
import styled, { css } from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 87vh;
  @media only screen and (max-width: 768px) {
    height: 70vh;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 550px;
  height: 50%;
  background-color: white;
  border-radius: 9px;

  @media only screen and (max-width: 768px) {
    height: 60vh;
  }
`;

const Input = styled.input`
  width: 50%;
  height: 40px;
  border-radius: 3px;
  border: 1px solid gray;

  &:focus {
    outline: none;
    border: 1px solid blue;
  }
`;
const Button = styled.button`
  width: 50%;
  height: 3rem;
  border-radius: 10px;
  border: none;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  color: rgb(202, 182, 207);
  background-color: rgb(100, 7, 97);
  &:hover {
    color: rgb(100, 7, 97);
    background-color: rgb(202, 182, 207);
  }
`;

const Register = () => {
  const handleLogin = async () => {
    const check = await axios.post("http://localhost:5000/register", {
      name: "Harshit",
    });
  };

  return (
    <>
      <Wrapper>
        <Container>
         
          <Input type="email" name="email" placeholder="Email" />
         
          <Input type="password" name="password" placeholder="Password" />
          
          <Button  type="submit">
            Login
          </Button>
        </Container>
      </Wrapper>
    </>
  );
};

export default Register;
