import * as React from "react";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";

import FlightItem from "./FlightItem";
import { useSelector } from "react-redux";
import Loading from "../Loading";

const FlightList = ({ flights }) => {
  const loading = useSelector((state) => state.flightReducer.flightsLoading);
  if (loading) return <Loading />;

  const flightList = flights.map((flight) => (
    <FlightItem flight={flight} key={flight.id} />
  ));

  return (
    <div>
      <div>
        <div className="container mt-5">
          <div className="row justify-content-md-center">
            <div className="col-20">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Flight Name</th>
                    <th scope="col">Departure Date</th>
                    <th scope="col">Departure Time</th>
                    <th scope="col">Arrival Time</th>
                    <th scope="col">Economy Price</th>
                    <th scope="col">Business Price</th>
                    <th scope="col">Update</th>
                  </tr>
                </thead>
                <tbody>{flightList}</tbody>
              </table>
            </div>

            <div className="col-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightList;
