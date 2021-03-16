import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import { signin } from "../../store/actions/authActions";
import {
  FormStyled,
  LabelStyled,
  InputFieldStyled,
  FieldSetStyled,
  LegendStyled,
  FormAddButtonStyled,
} from "../../styles";

import { register } from "../../serviceWorker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const UserSignin = ({ bookedFlights }) => {
  const eye = <FontAwesomeIcon icon={faEye} />;
  const { errors } = useForm();
  const history = useHistory();

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const dispatch = useDispatch();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const restForm = () => {
    setUser({
      username: "",
      password: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signin(user, history, bookedFlights));
    restForm();
  };
  return (
    <>
      <Helmet>
        <title> Sign In</title>
      </Helmet>
      <FormStyled>
        <form onSubmit={handleSubmit}>
          <FieldSetStyled>
            <LegendStyled>
              <h2> Sign In</h2>

              <LabelStyled>
                Username:
                <InputFieldStyled
                  type="text"
                  name="username"
                  value={user.username}
                  onChange={handleChange}
                />
              </LabelStyled>

              <LabelStyled>
                Password:
                <span>
                  <i onClick={togglePasswordVisiblity}>{eye}</i>
                </span>
                <InputFieldStyled
                  type={passwordShown ? "text" : "password"}
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  ref={register({ required: true, minLength: 8 })}
                />
                {errors.password && <p>Pass is required!!</p>}
              </LabelStyled>

              <FormAddButtonStyled onSubmit={handleSubmit}>
                Sign In
              </FormAddButtonStyled>
            </LegendStyled>
          </FieldSetStyled>
        </form>
      </FormStyled>
    </>
  );
};

export default UserSignin;
