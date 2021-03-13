import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { register } from "../../serviceWorker";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import { airlinesignup } from "../../store/actions/authActions";
import {
  FormStyled,
  LabelStyled,
  InputFieldStyled,
  FieldSetStyled,
  LegendStyled,
  FormAddButtonStyled,
} from "../../styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const AirlineSignup = () => {
  const eye = <FontAwesomeIcon icon={faEye} />;
  const { errors } = useForm();
  const history = useHistory();

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
    logo: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handlePicture = (event) => {
    setUser({ ...user, logo: event.target.files[0] });
  };

  const restForm = () => {
    setUser({
      name: "",
      username: "",
      password: "",
      email: "",
      logo: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(airlinesignup(user, history));
    restForm();
  };
  return (
    <>
      <Helmet>
        <title>Airline Sign Up</title>
      </Helmet>
      <FormStyled>
        <form onSubmit={handleSubmit}>
          <FieldSetStyled>
            <LegendStyled>
              <h2>Airline Sign Up</h2>

              <LabelStyled>
                Name of Airline:
                <InputFieldStyled
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                />
              </LabelStyled>

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
              <LabelStyled>
                Picture:
                <InputFieldStyled
                  type="file"
                  name="logo"
                  onChange={handlePicture}
                />
              </LabelStyled>
              <LabelStyled>
                Email:
                <InputFieldStyled
                  type="email"
                  name="email"
                  onChange={handleChange}
                />
              </LabelStyled>

              <FormAddButtonStyled onSubmit={handleSubmit}>
                Airline Sign Up
              </FormAddButtonStyled>
            </LegendStyled>
          </FieldSetStyled>
        </form>
      </FormStyled>
    </>
  );
};

export default AirlineSignup;
