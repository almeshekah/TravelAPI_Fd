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

const Routes = () => {
  const { flights, flightsLoading, returnFlights, roundtrip } = useSelector(
    (state) => state.flightReducer
  );
  const bookedFlights = useSelector((state) => state.bookingReducer.flights);
  const { airlines } = useSelector((state) => state.airlineReducer);

  return (
    // Remove exact, longer paths at the top. Keep exact only when needed
    <Switch>
      <Route exact path="/passenger">
        <BookingForm />
      </Route>
      <Route exact path="/user/profile">
        <Userprofile />
      </Route>
      <Route exact path="/user/signup">
        <UserSignup />
      </Route>
      <Route exact path="/user/signin">
        <UserSignin />
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
        />
      </Route>
      <Route path="/returnFlights">
        <Roundtrip
          flights={flights}
          returnFlights={returnFlights}
          loading={flightsLoading}
          bookedFlights={bookedFlights}
        />
        <Route path="/airlines/:airlineSlug">
          <AirlineDetail />
        </Route>
        <Route path="/flights">
          <FlightList />
        </Route>
      </Route>
      <Route path="/airlines">
        <AirlineList airlines={airlines} />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
