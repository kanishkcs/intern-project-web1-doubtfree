import React from "react";
import styled, { css } from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { Link, useLocation } from "react-router-dom";

//  Main Container CSS
const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 10px #cab6cf;
  border-radius: 5px;
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

  border-radius: 20px;
  font-size: 1rem;
  font-weight: 200;
  
  border: none;
  padding: 10px;
  margin-right: 8px;
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    background-image: linear-gradient(
    to right,
    
  
    #381e3b,
    #4d1d4a,
    #2e182a
  );
    color: white;
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

const Navbar = () => {

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
            <Link className="no-css" to="/login"><Button>Login</Button></Link>
            <Link className="no-css" to="/register"><Button>Sighn up</Button></Link>
          </ButtonContainer>
          
        </TopRight>
      </Top>
      <Bottom>
        <Nav>
          <Link className="no-css " to="/">Home</Link>
          <Link className="no-css" to="/idea">Idea Validation</Link>
          <Link className="no-css" to="/company">Company Formation</Link>
          <Link className="no-css" to="/mentoring">MENTORING & INCUBATION</Link>
          <Link className="no-css" to="/technical">TECHINCAL & MARKETING</Link>
          <Link className="no-css" to="/funding">FUNDING & BANKING</Link>
        </Nav>
        <Sidebar>
        <Link className="no-css" to="/">Home</Link>
          <Link className="no-css" to="/idea">Idea Validation</Link>
          <Link className="no-css" to="/company">Company Formation</Link>
          <Link className="no-css" to="/mentoring">MENTORING & INCUBATION</Link>
          <Link className="no-css" to="/technical">TECHINCAL & MARKETING</Link>
          <Link className="no-css" to="/funding">FUNDING & BANKING</Link>
        </Sidebar>
      </Bottom>
    </Container>
    // kahan jaana hai (konse path par jaana hai)
  );
};

export default Navbar;
