import React from "react";
import styled, { css } from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
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

const LogoContainer = styled.div`
  border: 1px solid white;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  text-align: center;
  
`;

const Span = styled.span`
  color: white;
  padding-top: 20px;
  @media only screen and (max-width: 500px) {
    padding-top: 15px;
    font-size: 0.4rem;
  }
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
  @media only screen and (max-width: 860px) {
    width: 450px;
  }
  @media only screen and (max-width: 808px) {
    width: 400px;
  }

  
  @media only screen and (max-width: 745px) {
    width: auto;
  }

  @media only screen and (max-width: 502px) {
    width: 100px;
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
  background-color: #fcf9f9;
  border: none;
  padding: 10px;
  margin-right: 8px;
  transition: all 0.4s ease;
  cursor: pointer;

  &:hover {
    font-size: 1.2rem;
  }
  @media only screen and (max-width: 500px) {
    width: auto;
    margin: 0;
    
    padding:none;
    font-size: 0.8rem;
  }
`;

// Top Ends Here
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Nav = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex: 1;
  @media only screen and (max-width: 766px) {
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    display: none;
  }
`;

// Side bar

const Sidebar = styled.div`
  display: none;
  @media only screen and (max-width: 766px) {
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    flex-direction: column;
    position: absolute;
    right: 0;
    width: 260px; /* adjust as needed */
    height: 300px;
    padding-right: 10px;
    background-color: rgba(0, 0, 0, 0.5); /* transparent black */
  }
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
        <LogoContainer>
          <Span>Logo</Span>
        </LogoContainer>

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
        <Nav>
          <NavItems href="www.goog.com">HOME</NavItems>
          <NavItems href="www.goog.com">IDEA VALIDATION</NavItems>
          <NavItems href="www.goog.com">COMPANY FORMATION</NavItems>
          <NavItems href="www.goog.com">MENTORING & INCUBATION</NavItems>
          <NavItems href="www.goog.com">TECHINCAL & MARKETING </NavItems>
          <NavItems href="www.goog.com">FUNDING & BANKING </NavItems>
        </Nav>
        <Sidebar>
          <NavItems href="www.goog.com">HOME</NavItems>
          <NavItems href="www.goog.com">IDEA VALIDATION</NavItems>
          <NavItems href="www.goog.com">COMPANY FORMATION</NavItems>
          <NavItems href="www.goog.com">MENTORING & INCUBATION</NavItems>
          <NavItems href="www.goog.com">TECHINCAL & MARKETING </NavItems>
          <NavItems href="www.goog.com">FUNDING & BANKING </NavItems>
        </Sidebar>
      </Bottom>
    </Container>
  );
};

export default Navbar;
