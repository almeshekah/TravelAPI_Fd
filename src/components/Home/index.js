import { useState } from "react";
// Components
import FlightSearch from "../FlightSearch";
// Styling
import { FlightTakeoff } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { Description, HomeImage, Title, StyledFlightSearch } from "./styles";
import HomeBG from "../../images/Home.png";

const Home = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div>
      <Title>Welcome </Title>
      <span>&nbsp;&nbsp;</span> <HomeImage src={HomeBG} alt="Home page" />
      <Description>Live with no excuses and travel with no regrets</Description>
      <Description>
        Find your next adventure
        <Button onClick={() => setShowSearch(!showSearch)}>
          <FlightTakeoff />
        </Button>
      </Description>
      {showSearch && <StyledFlightSearch />}
      <span>&nbsp;&nbsp;</span>
    </div>
  );
};

export default Home;
