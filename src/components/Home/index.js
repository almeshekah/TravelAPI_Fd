import { useState } from "react";
import { Description, HomeImage, Title, StyledFlightSearch } from "./styles";
import FlightSearch from "../FlightSearch";
import { FlightTakeoff } from "@material-ui/icons";

const Home = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div>
      <Title>welcome </Title>
      <Description>Live with no excuses and travel with no regrets</Description>
      <Description>
        Find your next adventure
        <FlightTakeoff onClick={() => setShowSearch(!showSearch)} />
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
