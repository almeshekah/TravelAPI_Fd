import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
//Components
import { bookingCreate } from "../../store/actions/bookingActions";
//Styling
import {
  FormStyled,
  LabelStyled,
  InputFieldStyled,
  FieldSetStyled,
  LegendStyled,
  FormAddButtonStyled,
} from "../../styles";

const BookingForm = () => {
  const { user } = useSelector((state) => state.authReducer);
  const passangersCount = useSelector(
    (state) => state.bookingReducer.passangers
  );

  const history = useHistory();
  const dispatch = useDispatch();

  const initialState = [];
  for (let i = 0; i < passangersCount; i++) {
    arr.push({
      firstName: "",
      lastName: "",
      email: "",
      passport: "",
      birthDate: "",
      userId: user ? user.id : null,
    });
  }
  const [passangers, setPassangers] = useState(inititalState);

  const handleChange = (event) => {
    setPassangers({ ...user, [event.target.name]: event.target.value });
  };
  const [passengers, setPassengers] = useState([]);
  const [numpassengers, setnumpassengers] = useState(0);
  const restForm = () => {
    setPassangers({
      firstName: "",
      lastName: "",
      email: "",
      passport: "",
      birthDate: "",
    });
  };
  const handlePassenger = (event) => {
    passengers.push(user);
    event.preventDefault();
    restForm();
    setnumpassengers(numpassengers + 1);
  };

  const handleSubmit = (event) => {
    dispatch(bookingCreate(passengers));
    event.preventDefault();
    restForm();
    console.log(passengers);
    history.replace("/");
  };
  return (
    <>
      <Helmet>
        <title> Passenger info</title>
      </Helmet>
      <FormStyled>
        <form onSubmit={handleSubmit}>
          <FieldSetStyled>
            <LegendStyled>
              <h2> Passenger info </h2>

              {passengers.length >= cont ? (
                <>
                  <h3> Thank you ✅ </h3>

                  <FormAddButtonStyled onSubmit={handleSubmit}>
                    Submit
                  </FormAddButtonStyled>
                </>
              ) : (
                <>
                  <LabelStyled>
                    firstName:
                    <InputFieldStyled
                      type="text"
                      name="firstName"
                      value={user.firstName}
                      onChange={handleChange}
                    />
                  </LabelStyled>

                  <LabelStyled>
                    lastName:
                    <InputFieldStyled
                      type="text"
                      name="lastName"
                      value={user.lastName}
                      onChange={handleChange}
                    />
                  </LabelStyled>
                  <LabelStyled>
                    passport:
                    <InputFieldStyled
                      type="text"
                      name="passport"
                      value={user.passport}
                      onChange={handleChange}
                    />
                  </LabelStyled>
                  <LabelStyled>
                    email:
                    <InputFieldStyled
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                    />
                  </LabelStyled>
                  <LabelStyled>
                    birthDate
                    <InputFieldStyled
                      type="date"
                      className="form-control"
                      placeholder="date"
                      aria-label="date"
                      aria-describedby="basic-addon1"
                      name="birthDate"
                      onChange={handleChange}
                      value={user.birthDate}
                    />
                  </LabelStyled>
                  <FormAddButtonStyled onClick={handlePassenger}>
                    Next Passenger
                  </FormAddButtonStyled>
                </>
              )}
            </LegendStyled>
          </FieldSetStyled>
        </form>
      </FormStyled>
    </>
  );
};

export default BookingForm;
