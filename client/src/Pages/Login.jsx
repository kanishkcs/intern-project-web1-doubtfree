import React from "react";
import styled, { css } from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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


const ToastProps = {
  position: "top-center", autoClose: 3000, hideProgressBar: true, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "colored",
}
const Register = () => {
  const [formData, setFormData] = useState({});

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleLogin = async () => {
    const check = await axios.post("http://localhost:5000/login", formData);
    console.log(check.data)
    if (check.data.status == "sucess") {
      toast.success('Logged in Successfuly', ToastProps)
    }
    else if (check.data.status == "failed"){
      toast.error('Inccorrect Email or Password', ToastProps)
    }

  };
  return (
    <>
      <Wrapper>
        <Container>
         
          <Input type="email" name="email" placeholder="Email" onChange={handleInputChange}/>
         
          <Input type="password" name="password" placeholder="Password"  onChange={handleInputChange}/>
          
          <Button  onClick={handleLogin}type="submit">
            Login
          </Button>
          <ToastContainer />
        </Container>
      </Wrapper>
    </>
  );
};

export default Register;
