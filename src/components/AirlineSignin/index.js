import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import { airlinesignin } from "../../store/actions/authActions";
import {
  FormStyled,
  LabelStyled,
  InputFieldStyled,
  FieldSetStyled,
  LegendStyled,
  FormAddButtonStyled,
} from "./styles";

import { register } from "../../serviceWorker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const AirlineSignin = () => {
  const eye = <FontAwesomeIcon icon={faEye} />;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { errors } = useForm();
  const history = useHistory();

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  const dispatch = useDispatch();

  const [user, setUser] = useState({
    username: "",
    password: "",
    // email: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const restForm = () => {
    setUser({
      username: "",
      password: "",
      // email: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    dispatch(airlinesignin(user, history));
    restForm();
  };
  return (
    <>
      <Helmet>
        <title>Airline Sign In</title>
      </Helmet>
      {/* {!isSubmitted ? ( */}
      <FormStyled>
        <form onSubmit={handleSubmit}>
          <FieldSetStyled>
            <LegendStyled>
              <h2>Airline Sign In</h2>

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
                Airline Sign In
              </FormAddButtonStyled>
            </LegendStyled>
          </FieldSetStyled>
        </form>
      </FormStyled>
    </>
  );
};

export default AirlineSignin;
