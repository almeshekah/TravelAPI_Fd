import styled from "styled-components";
import { Link } from "react-router-dom";

export const Title = styled.h1`
  text-align: center;
  color: #f4f4f4;
  font-family: "Roboto", sans-serif;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* Navbar */
export const NavBarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 2rem;
  z-index: 1;
  width: 100%;
  border-bottom: solid 1px #f4f4f4;
  opacity: 0.9;
  margin-bottom: 1rem;
  background: #1d3557;
`;

export const NavBarUlStyled = styled.ul`
  display: flex;
`;
export const NavBarliStyled = styled.li`
  list-style-type: none;

  /* padding: 1rem 1.5rem;
  color: #fff;
  padding: 0.45rem;
  margin: 0 0.25rem;
  color: var(--primary-color);
  text-transform: uppercase;
  border-bottom: 3px transparent solid;
  padding-bottom: 0.5rem;
  transition: border-color 0.5s; */
  display: flex;
  text-decoration: none;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 2rem;
  z-index: 1;
  width: 100%;
  opacity: 0.9;
  margin-bottom: 1rem;

  &:hover {
    color: #eefbfb;
  }
`;

export const NavbarWelcomeSpan = styled.nav`
  margin-right: 0.6rem;
`;

export const NavbarLink = styled(Link)`
  color: #fff;
  padding: 0.45rem;
  margin: 0 0.25rem;
  &:hover {
    color: var(--light-color);
  }
`;

export const UsernameStyled = styled.p`
  padding: 0.25em 1em;
  color: black;
`;
