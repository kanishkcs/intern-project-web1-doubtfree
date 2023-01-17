import React from "react";
import styled, {css} from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useLocation } from "react-router-dom";

//  Main Container CSS
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

// Top of Navbar Starts Here
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  margin-right: 10px;
  margin-left: 10px;
`;

const Logo = styled.img`
  border-radius: 40%;
  width: 50px;
`;

const TopRight = styled.div`
  display: flex;
  
`;
const SearchContainer = styled.div`
  position: relative;
`;

const Search = styled.input`
  border-radius: 15px;
  
  width: 500px;
  height: 2.4rem;
  background-color: #702222;
  text-decoration: none;
  border: none;
  &:active {
    border: none;
  }

  @media (max-width: 800px) {
    
    width: 200px;
  }
`;

const ButtonContainer = styled.div`
margin-left: 30px;

margin-right: 30px;

`;
const Button = styled.button`
width: 6em;
 height: 2.4rem;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 200;
  background-color: white;
  border: none;
  padding: 10px;
  margin-right: 8px ;
  transition: all 0.1s ease-in;
  cursor: pointer;
 
  
  &:hover{
    font-size: 1.3rem;

  }
`;

// Top Ends Here
const Bottom = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const NavItems = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
`;

const Navbar = () => {
  let url = useLocation();

  return (
    <Container>
      <Top>
        <Logo src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <TopRight>
          <SearchContainer>
            <Search /> <SearchIcon className="icon" />
          </SearchContainer>
          <ButtonContainer>
            <Button>Login</Button>
            <Button>Sighn Up</Button>
          </ButtonContainer>
        </TopRight>
      </Top>
      <Bottom>
        <NavItems href="www.goog.com">HOME</NavItems>
        <NavItems href="www.goog.com">IDEA VALIDATION</NavItems>
        <NavItems href="www.goog.com">COMPANY FORMATION</NavItems>
        <NavItems href="www.goog.com">MENTORING & INCUBATION</NavItems>
        <NavItems href="www.goog.com">TECHINCAL & MARKETING </NavItems>
        <NavItems href="www.goog.com">FUNDING & BANKING </NavItems>
      </Bottom>
    </Container>
  );
};

export default Navbar;
