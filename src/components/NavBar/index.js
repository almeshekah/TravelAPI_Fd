import {
  Title,
  NavBarStyled,
  NavBarUlStyled,
  NavBarliStyled,
  NavbarLink,
} from "./styles";

const NaveBar = () => {
  return (
    <>
      <NavBarStyled>
        <Title>Travel</Title>
        <NavBarUlStyled>
          <NavBarliStyled>
            <NavbarLink to="/">Home</NavbarLink>
          </NavBarliStyled>
          <NavBarliStyled>
            <NavbarLink to="/flights">Flights</NavbarLink>
          </NavBarliStyled>
          <NavBarliStyled>
            <NavbarLink to="/airlines">Airlines</NavbarLink>
          </NavBarliStyled>
          <NavBarliStyled>
            <NavbarLink to="/usersignup">Signup</NavbarLink>
          </NavBarliStyled>
          <NavBarliStyled>
            <NavbarLink to="/usersignin">Signin</NavbarLink>
          </NavBarliStyled>
          <NavBarliStyled>
            <NavbarLink to="/airlinesignup">Airline Signup</NavbarLink>
          </NavBarliStyled>
          <NavBarliStyled>
            <NavbarLink to="/airlinesignin">Airline Signin</NavbarLink>
          </NavBarliStyled>
        </NavBarUlStyled>
      </NavBarStyled>
    </>
  );
};

export default NaveBar;
