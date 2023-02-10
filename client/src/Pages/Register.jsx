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


const ToastProps = {position: "top-center",  autoClose: 3000,  hideProgressBar: true, closeOnClick: true,pauseOnHover: true, draggable: true, progress: undefined,  theme: "colored",
}

const Register = () => {


  const [formData, setFormData] = useState({});

const handleInputChange = e => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};


  const handleRegister = async () => {
    const check = await axios.post("http://localhost:5000/register", formData);
    if (check.data.status == "sucess"){
      toast.success('Registered Successfuly', ToastProps)
    }
    else{
      
      if(check.data.code==11000){
        toast.error(Object.keys(check.data.keyPattern)[0] + " Allready Exists", ToastProps);
      }
    }
  };

  return (
    <>
      <Wrapper>
        <Container>
          <Input type="text" name="name" placeholder="Full Name" onChange={handleInputChange}/>
          <Input type="email" name="email" placeholder="Email" onChange={handleInputChange} />
          <Input type="number" name="mobile" placeholder="mobile" onChange={handleInputChange} />
          <Input type="password" name="password" placeholder="Password" onChange={handleInputChange}  />
          <Input
            type="text"
            name="confirm-password"
            placeholder="Confirm-Password"
          />
          <Button onClick={handleRegister} type="submit">
            Register
          </Button>
          <ToastContainer />
        </Container>
      </Wrapper>
    </>
  );
};

export default Register;
