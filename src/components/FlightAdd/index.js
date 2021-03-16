import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { register } from "../../serviceWorker";

import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Loading from "../Loading";
import { createFlight, updateFlight } from "../../store/actions/flightActions";

import AirportSelect from "../FlightSearch/AirportSelect";
//styling
import {
  FormStyled,
  LabelStyled,
  InputFieldStyled,
  FieldSetStyled,
  LegendStyled,
  FormAddButtonStyled,
} from "../../styles";

const FlightAdd = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const { airlineId, flightId } = useParams();

  const foundFlight = useSelector((state) =>
    state.flightReducer.flights.find((flight) => flight.id === +flightId)
  );

  const airline = useSelector((state) => state.authReducer.user);
  const { destinations, destinationLoading } = useSelector(
    (state) => state.destinationReducer
  );
  const [flight, setFlight] = useState(
    foundFlight
      ? foundFlight
      : {
          airlineId: airlineId,

          name: "",
          departureDate: "",
          departureTime: "",
          arrivalTime: "",
          originId: "",
          destinationId: "",
          economyPrice: "",
          businessPrice: "",
        }
  );

  const [options, setOptions] = useState({
    destinationId: null,
    originId: null,
  });

  if (destinationLoading) return <Loading />;

  const departureOptions = destinations.map((destination) => ({
    value: destination.id,
    label: `${destination.city} (${destination.code} - ${destination.airport})`,
    name: "originId",
  }));
  const arrivalOptions = departureOptions.map((option) => ({
    ...option,
    name: "destinationId",
  }));

  const handleOptions = (selectedOption) => {
    setOptions({ ...options, [selectedOption.name]: selectedOption });
  };

  const handleChange = (event) => {
    setFlight({ ...flight, [event.target.name]: event.target.value });
  };
  {
    const handleSubmit = (event) => {
      event.preventDefault();
      if (foundFlight) {
        dispatch(updateFlight(flight, airline.id));
      } else {
        dispatch(
          createFlight(
            {
              ...flight,
              originId: options.originId.value,
              destinationId: options.destinationId.value,
            },
            airline.id
          )
        );
      }
      history.replace("/airlines");
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
                <h2>
                  {foundFlight ? "Update " : "New "}
                  Flight
                </h2>

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
                  <AirportSelect
                    name="origin"
                    options={options}
                    handleOptions={handleOptions}
                    _options={departureOptions}
                    set="originId"
                    // value={flight.origin}
                  />
                </LabelStyled>

                <LabelStyled>
                  Arrival Airport:
                  <AirportSelect
                    name="destination"
                    options={options}
                    handleOptions={handleOptions}
                    _options={arrivalOptions}
                    set="destinationId"
                    // value={flight.destination}
                  />
                </LabelStyled>

                <LabelStyled>
                  Price:
                  <InputFieldStyled
                    type="text"
                    name="economyPrice"
                    value={flight.economyPrice}
                    onChange={handleChange}
                  />
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
                  {foundFlight ? "Update " : "New "}
                  Flight
                </FormAddButtonStyled>
              </LegendStyled>
            </FieldSetStyled>
          </form>
        </FormStyled>
      </>
    );
  }
};

export default FlightAdd;
