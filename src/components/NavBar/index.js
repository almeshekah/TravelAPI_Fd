import {
  Title,
  NavBarStyled,
  NavBarUlStyled,
  NavBarliStyled,
  NavbarLink,
  UsernameStyled,
} from "./styles";
import { Logo } from "../../styles";
import logo from "../../images/logo.png";

import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signout, profile } from "../../store/actions/authActions";
const NaveBar = () => {
  const history = useHistory();
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();
  return (
    <>
      <NavBarStyled>
        <Logo exact to="/">
          <img className="navbar-brand" src={logo}></img>
        </Logo>
        {/* <Title>Travel</Title> */}
        <NavBarUlStyled>
          <NavBarliStyled>
            <NavbarLink to="/">Home</NavbarLink>
          </NavBarliStyled>
          {user && user.isAirline && (
            <>
              <NavBarliStyled>
                <NavbarLink to="/flights">Flights</NavbarLink>
              </NavBarliStyled>
              <NavBarliStyled>
                <NavbarLink to="/airlines">Airlines</NavbarLink>
              </NavBarliStyled>{" "}
            </>
          )}
          {user ? (
            <>
              <UsernameStyled>Welcome , {user.username}! </UsernameStyled>
              <NavBarliStyled>
                <NavbarLink onClick={() => dispatch(signout(history))}>
                  Signout
                </NavbarLink>
              </NavBarliStyled>
              <NavBarliStyled>
                <NavbarLink
                  onClick={() => dispatch(profile(user.id))}
                  to="/user/profile"
                >
                  My Profile
                </NavbarLink>
              </NavBarliStyled>
            </>
          ) : (
            <NavBarliStyled>
              <NavBarliStyled>
                <NavbarLink to="/user/signup">Signup</NavbarLink>
              </NavBarliStyled>
              <NavBarliStyled>
                <NavbarLink to="/user/signin">Signin</NavbarLink>
              </NavBarliStyled>
            </NavBarliStyled>
          )}
          <NavBarliStyled>
            <NavbarLink to="/airlines/signin">Airline Signin</NavbarLink>
          </NavBarliStyled>
        </NavBarUlStyled>
      </NavBarStyled>
    </>
  );
};

export default NaveBar;
