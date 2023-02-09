import React from 'react'
import styled, { css } from "styled-components";

const Wrapper = styled.div`


`

const Input = styled.input`

`


const Register = () => {
  return (
    <>
    <form action="http://localhost:5000/register" method='POST'>
    <Wrapper>

    <Input type="text" name="name" placeholder='Full Name' />
    <Input type="email" name="email" placeholder='email' />
    
    <Input type="text" name="mobile" placeholder='mobile' />
    <Input type="password" name="password" placeholder='password' />
    <button type='submit'>Submit</button>
    
    </Wrapper>


    </form>


    </>
  )
}

export default Register