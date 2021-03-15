import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
//Components
import { bookingCreate } from "../../store/actions/bookingActions";
import Loading from "../Loading";
import PassengerForm from "./PassengerForm";
//Styling
import { FormStyled, FormAddButtonStyled } from "../../styles";

const BookingForm = ({ passengersCount }) => {
  const { user } = useSelector((state) => state.authReducer);
  const bookingReducer = useSelector((state) => state.bookingReducer);

  const history = useHistory();
  const dispatch = useDispatch();

  let initialState = [];
  for (let i = 0; i < passengersCount; i++) {
    initialState.push({
      firstName: "",
      lastName: "",
      email: "",
      passport: "",
      birthDate: "",
    });
  }
  const [passengers, setPassengers] = useState(initialState);

  const handleChange = (event) => {
    let passengersArr = passengers.slice();
    passengersArr[event.target.id][event.target.name] = event.target.value;
    setPassengers(passengersArr);
  };

  const handleSubmit = (event) => {
    dispatch(bookingCreate(passengers, bookingReducer, user, history));
    event.preventDefault();
  };

  let passengersForms = [];
  for (const number in passengers) {
    console.log(number);
    passengersForms.push(
      <PassengerForm
        passengers={passengers}
        handleChange={handleChange}
        number={number}
        key={number}
      />
    );
  }

  console.log(passengersForms);
  return (
    <>
      <FormStyled>
        <form onSubmit={handleSubmit}>
          {passengersForms}
          <FormAddButtonStyled onSubmit={handleSubmit}>
            Submit
          </FormAddButtonStyled>
        </form>
      </FormStyled>
    </>
  );
};

export default BookingForm;
