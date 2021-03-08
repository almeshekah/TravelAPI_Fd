import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import { signin } from "../../store/actions/authActions";
import {
  AddButtonStyled,
  FormStyled,
  LabelStyled,
  InputFieldStyled,
  FieldSetStyled,
  LegendStyled,
  FormAddButtonStyled,
} from "../styles";



import { register } from "../serviceWorker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const AirlineSignin = () => {
  const eye = <FontAwesomeIcon icon={faEye} />;
  const [isSubmitted, setIsSubmitted] = useState(false);
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
    // email: "",
  });

  const handleChnage = (event) => {
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
    dispatch(signin(user, history));
    restForm();
  };
  return <div></div>;
};

export default AirlineSignin;
