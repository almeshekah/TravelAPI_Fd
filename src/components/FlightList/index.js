import * as React from "react";

import { Title } from "./styles";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import FlightItem from "./FlightItem";

const FlightList = ({ flights }) => {
  const flightList = flights.map((flight) => (
    <FlightItem flight={flight} key={flight.id} />
  ));

  return (
    <div>
      <Title>Flights</Title>
      <div>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Flight Name</TableCell>
              <TableCell>Departure Date</TableCell>
              <TableCell>Arrival Date</TableCell>
              <TableCell>Departure Time</TableCell>
              <TableCell>Arrival Time</TableCell>
              <TableCell>Departure Airport</TableCell>
              <TableCell>Arrival Airport</TableCell>
              <TableCell>Economy Price</TableCell>
              <TableCell>Business Price</TableCell>
              <TableCell>Airline</TableCell>
            </TableRow>
          </TableHead>
        </Table>
        {flightList}
      </div>
    </div>
  );
};

export default FlightList;
