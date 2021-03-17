import React from "react";
import NavBar from "./components/NavBar";
import Routes from "./components/Routes";
import { GlobalStyle } from "./styles";
function App() {
  return (
    <>
      <GlobalStyle />

      <NavBar />
      <Routes />
    </>
  );
}

export default App;
