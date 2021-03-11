import React from "react";
import {
  Button,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Card,
  CardContent,
  CardActions,
} from "@material-ui/core";

const FlightItem = ({ flight }) => {
  return (
    <>
      <Card alignItems="flex-start">
        <CardContent>
          <Typography variant="h5" component="h2">
            {flight.departureTime} - {flight.arrivalTime}
          </Typography>
          <Typography variant="h5" component="h2">
            departure airport - arrival airport
          </Typography>
          <Typography variant="h5" component="h2">
            Airline logo - airline name
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Book</Button>
        </CardActions>
      </Card>
      <Divider variant="inset" component="li" />
    </>
  );
};

export default FlightItem;
