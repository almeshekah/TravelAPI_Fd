import { Nav, NavLink, Bars, NavMenu, UsernameStyled } from "./styles";
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
      <Nav>
        <NavLink to="/">
          <img src={logo} alt="logo" style={{ width: "35%" }} />
        </NavLink>

        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>

          {user && user.isAirline && (
            <>
              <NavLink to="/flights">Flights</NavLink>
              <NavLink to="/airlines">Airlines</NavLink>
            </>
          )}
          {user ? (
            <>
              <UsernameStyled>Welcome , {user.username}! </UsernameStyled>
              <NavLink activeStyle onClick={() => dispatch(signout(history))}>
                Signout
              </NavLink>
              <NavLink
                onClick={() => dispatch(profile(user.id))}
                to="/user/profile"
              >
                My Profile
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/user/signup">Signup</NavLink>
              <NavLink to="/user/signin">Signin</NavLink>
              <NavLink to="/airlines/signup">Airline Signup</NavLink>
              <NavLink to="/airlines/signin">Airline Signin</NavLink>
            </>
          )}
        </NavMenu>
      </Nav>
    </>
  );
};

export default NaveBar;
