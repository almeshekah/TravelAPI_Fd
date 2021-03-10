import {
  Title,
  NavBarStyled,
  NavBarUlStyled,
  NavBarliStyled,
  NavbarLink,
  UsernameStyled,
} from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { singout } from "../../store/actions/userAuthActions";
const NaveBar = () => {
  const user = useSelector((state) => state.userAuthReducer.user);
  const dispatch = useDispatch();
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
          {/* // REVIEW: Move them to their own components */}
          {user ? (
            <>
              <UsernameStyled>welcome , {user.username}! </UsernameStyled>
              <NavBarliStyled>
                <NavbarLink onClick={() => dispatch(singout())}>
                  Signout
                </NavbarLink>
              </NavBarliStyled>
            </>
          ) : (
            <>
              <NavBarliStyled>
                <NavbarLink to="/usersignup">Signup</NavbarLink>
              </NavBarliStyled>
              <NavBarliStyled>
                <NavbarLink to="/usersignin">Signin</NavbarLink>
              </NavBarliStyled>
            </>
          )}
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
