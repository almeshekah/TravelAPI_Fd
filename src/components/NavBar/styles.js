import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
// import { NavLink as Link } from "react-router-dom";

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

export const NavbarLink = styled(Link)`
  color: #fff;
  padding: 0.45rem;
  margin: 0 0.25rem;
  &:hover {
    color: var(--light-color);
  }
`;

export const UsernameStyled = styled.p`
  margin: 0 0.25rem;
  padding: 0.45rem;
  margin-right: 24px;
  display: flex;
  align-items: center;

  color: #a8dadc;
`;

export const Nav = styled.nav`
  background: #1d3557;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #a8dadc;
  }
`;

export const Logo = styled.img`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  /* @media screen and (max-width: 768px) {
    display: none;
  } */
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #a8dadc;
  padding: 10px 22px;
  color: #1d3557;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #1d3557;
  }
`;
