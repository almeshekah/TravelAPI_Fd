import React from "react";
import { Route, Switch } from "react-router";
import { useSelector } from "react-redux";
//Components
import Home from "../Home";
import UserSignin from "../UserSignin";
import UserSignup from "../UserSignup";
import AirlineSignup from "../AirlineSignup";
import AirlineSignin from "../AirlineSignin";
import FlightList from "../FlightList";
import AirlineList from "../AirlineList";
import FlightAdd from "../FlightAdd";
import AirlineDetail from "../AirlineDetail";
import Userprofile from "../Userprofile";
import Flights from "../Flights";
import Roundtrip from "../Flights/Roundtrip";
import BookingForm from "../BookingForm";
import Loading from "../Loading";
import OrderHistory from "../OrderHistory";

const Routes = () => {
  const { flights, flightsLoading, returnFlights, roundtrip } = useSelector(
    (state) => state.flightReducer
  );
  const bookedFlights = useSelector((state) => state.bookingReducer.flights);
  const { airlines } = useSelector((state) => state.airlineReducer);
  const { passengersCount, travelClassId } = useSelector(
    (state) => state.bookingReducer
  );

  return (
    <Switch>
      <Route exact path="/user/order-history">
        <OrderHistory />
      </Route>

      <Route exact path="/user/profile">
        <Userprofile />
      </Route>

      <Route exact path="/user/signup">
        <UserSignup />
      </Route>

      <Route exact path="/user/signin">
        <UserSignin bookedFlights={bookedFlights} />
      </Route>

      <Route path="/airlines/signup">
        <AirlineSignup />
      </Route>

      <Route path="/airlines/signin">
        <AirlineSignin />
      </Route>

      <Route
        path={[
          "/airlines/:airlineId/flights/new",
          "/airlines/:airlineId/flights/:flightId/update",
        ]}
      >
        <FlightAdd />
      </Route>

      <Route path="/flightsearch">
        <Flights
          flights={flights}
          returnFlights={returnFlights}
          loading={flightsLoading}
          bookedFlights={bookedFlights}
          travelClassId={travelClassId}
          airlines={airlines}
          roundtrip={roundtrip}
        />
      </Route>

      <Route path="/returnFlights">
        <Roundtrip
          flights={flights}
          returnFlights={returnFlights}
          loading={flightsLoading}
          bookedFlights={bookedFlights}
          travelClassId={travelClassId}
          roundtrip={roundtrip}
          airlines={airlines}
        />
      </Route>

      <Route path="/airlines/:airlineSlug">
        <AirlineDetail flights={flights} />
      </Route>

      <Route path="/flights">
        <FlightList flights={flights} />
      </Route>

      <Route path="/airlines">
        <AirlineList airlines={airlines} />
      </Route>

      <Route path="/booking">
        <BookingForm passengersCount={passengersCount} />
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
