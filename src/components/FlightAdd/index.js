import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { register } from "../../serviceWorker";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import { createFlight } from "../../store/actions/flightActions";
import {
  FormStyled,
  LabelStyled,
  InputFieldStyled,
  FieldSetStyled,
  LegendStyled,
  FormAddButtonStyled,
} from "./styles";

const FlightAdd = () => {
  const { errors } = useForm();
  const history = useHistory();

  const dispatch = useDispatch();

  const airline = useSelector((state) => state.authReducer.user);

  const [flight, setFlight] = useState({
    name: "",
    departureDate: "",
    arrivalDate: "",
    departureTime: "",
    arrivalTime: "",
    departureAirport: "",
    arrivalAirport: "",
    economyPrice: "",
    businessPrice: "",
  });

  const handleChange = (event) => {
    setFlight({ ...flight, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createFlight(flight, airline.id));
    history.replace("/flights");

  };
  return (
    <>
      <Helmet>
        <title>Add Flight</title>
      </Helmet>
      <FormStyled>
        <form onSubmit={handleSubmit}>
          <FieldSetStyled>
            <LegendStyled>
              <h2>Add Flight</h2>

              <LabelStyled>
                Name:
                <InputFieldStyled
                  type="text"
                  name="name"
                  value={flight.name}
                  onChange={handleChange}
                />
              </LabelStyled>

              <LabelStyled>
                Departure Date:
                <InputFieldStyled
                  type="text"
                  name="departureDate"
                  value={flight.departureDate}
                  onChange={handleChange}
                />
              </LabelStyled>

              <LabelStyled>
                Arrival Date:
                <InputFieldStyled
                  type="text"
                  name="arrivalDate"
                  value={flight.arrivalDate}
                  onChange={handleChange}
                />
              </LabelStyled>
              <LabelStyled>
                Departure Time:
                <InputFieldStyled
                  type="text"
                  name="departureTime"
                  value={flight.departureTime}
                  onChange={handleChange}
                />
              </LabelStyled>

              <LabelStyled>
                Arrival Time:
                <InputFieldStyled
                  type="text"
                  name="arrivalTime"
                  value={flight.arrivalTime}
                  onChange={handleChange}
                />
              </LabelStyled>

              <LabelStyled>
                Departure Airport:
                <InputFieldStyled
                  type="text"
                  name="departureAirport"
                  value={flight.departureAirport}
                  onChange={handleChange}
                />
              </LabelStyled>

              <LabelStyled>
                Arrival Airport:
                <InputFieldStyled
                  type="text"
                  name="arrivalAirport"
                  value={flight.arrivalAirport}
                  onChange={handleChange}
                />
              </LabelStyled>

              <LabelStyled>
                Price:
                <InputFieldStyled
                  type="text"
                  // type="radio"
                  name="economyPrice"
                  value={flight.economyPrice}
                  onChange={handleChange}
                />
                {/* <label for="economy">Economy</label><br> */}
              </LabelStyled>

              <LabelStyled>
                Business Price:
                <InputFieldStyled
                  type="text"
                  name="businessPrice"
                  value={flight.businessPrice}
                  onChange={handleChange}
                />
              </LabelStyled>

              <FormAddButtonStyled onSubmit={handleSubmit}>
                Add Flight
              </FormAddButtonStyled>
            </LegendStyled>
          </FieldSetStyled>
        </form>
      </FormStyled>
    </>
  );
};

export default FlightAdd;
