import { useState } from "react";
// Components
import FlightSearch from "../FlightSearch";
// Styling
import { FlightTakeoff } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { Description, HomeImage, Title, StyledFlightSearch } from "./styles";

const Home = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div>
      <Title>welcome </Title>
      <Description>Live with no excuses and travel with no regrets</Description>
      <Description>
        Find your next adventure
        <Button onClick={() => setShowSearch(!showSearch)}>
          <FlightTakeoff />
        </Button>
      </Description>
      {showSearch && <StyledFlightSearch />}
      <HomeImage
        src="https://mydigitaloffice.com/wp-content/uploads/2020/11/travel.png"
        alt="Home page"
      ></HomeImage>
    </div>
  );
};

export default Home;
