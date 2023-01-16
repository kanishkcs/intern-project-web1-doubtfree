import React from "react";
import styled from "styled-components";

import { Link, useLocation } from "react-router-dom";

const Container = styled.div`
  position: fixed;
  display: flex;
  border: 1px solid black;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
const Left = styled.h1`
  padding-left: 10px;
  margin: 0;
`;

const Span = styled.span`
  color: red;
  font-size: 2em;
  padding: 0;
  margin: 0;
`;

const Right = styled.div``;
const Center = styled.div``;

const NavItems = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 380px) {
    flex-direction: column;
  }
`;
const Projects = styled.h3`
  margin-right: 20px;
  cursor: pointer;
  &:hover {
    color: #f90000;
    transition: 700ms;
  }

  &::after {
    content: "";
    width: 0px;
    height: 5px;
    display: block;
    background: #ff0000;
    transition: 500ms;
    border-radius: 5px;
  }

  &.active::after {
    width: 100%;
  }
`;
const Skills = styled.h3`
  margin-right: 20px;

  cursor: pointer;
  &::after {
    content: "";
    width: 0px;
    height: 5px;
    display: block;
    background: #f90000;
    transition: 300ms;
    border-radius: 5px;
  }
  &:hover {
    color: #f90000;
    transition: 700ms;
  }

  &.active::after {
    width: 100%;
  }
`;
const ContactMe = styled.h3`
  margin-right: 20px;
  &:hover {
    color: #f90000;
    transition: 700ms;
  }
  cursor: pointer;
  &::after {
    content: "";
    width: 0px;
    height: 5px;
    display: block;
    background: #ff0000;
    transition: 300ms;
    border-radius: 5px;
  }

  &.active::after {
    width: 100%;
  }
`;

const Navbar = () => {
  let url = useLocation();

  return (
    <Container>
      <Right></Right>
      <Left>
        DoubtFree<Span>.</Span>{" "}
      </Left>
      <Center>
        <NavItems>
          <Link to="/" className="Link">
            {" "}
            <Projects className={url.pathname === "/" ? "active" : ""}>
                Login
            </Projects>
          </Link>
          <Link to="/projects" className="Link">
            {" "}
            <Projects className={url.pathname === "/projects" ? "active" : ""}>
              Register
            </Projects>
          </Link>
          <Link to="/contacts" className="Link">
            <ContactMe className={url.pathname === "/contacts" ? "active" : ""}>
              Contact
            </ContactMe>
          </Link>
          <Link to="/skills" className="Link">
            <Skills className={url.pathname === "/skills" ? "active" : ""}>
              About Us
            </Skills>
          </Link>
        </NavItems>
      </Center>
    </Container>
  );
};

export default Navbar;
