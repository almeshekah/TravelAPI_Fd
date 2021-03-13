import React from "react";
import { Helmet } from "react-helmet";
import { ItemWrapper } from "./styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";

import UpdateButton from "../buttons/UpdateButton";

const FlightItem = ({ flight }) => {
  return (
    <>
      <ItemWrapper>
        <Helmet>
          <title>Flights</title>
        </Helmet>
        <Table>
          <TableBody>
            <TableCell style={{ width: 100 }}>{flight.name}</TableCell>
            <TableCell>{flight.departureDate}</TableCell>
            <TableCell>{flight.departureTime}</TableCell>
            <TableCell>{flight.arrivalTime}</TableCell>
            <TableCell>{flight.departureAirport}</TableCell>
            <TableCell>{flight.arrivalAirport}</TableCell>
            <TableCell>{flight.economyPrice}</TableCell>
            <TableCell>{flight.businessPrice}</TableCell>
            <TableCell>{flight.airlineId}</TableCell>
            <TableCell>
              <UpdateButton
                airlineId={flight.airlineId}
                flightId={flight.id}
              ></UpdateButton>
            </TableCell>
          </TableBody>
        </Table>
      </ItemWrapper>
    </>
  );
};

export default FlightItem;
