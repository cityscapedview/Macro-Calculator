import { useState } from "react";
import Body from "./components/Body";
import Calculator from "./components/Calculator";
import GlobalContainer from "./components/GlobalContainer";
import Header from "./components/Header";
import HealthBenefits from "./components/HealthBenefits";
import Instructions from "./components/Instructions";

function App() {
  return (
    <div>
      <Body>
        <GlobalContainer>
          <Header />
          <HealthBenefits />
          <Instructions />
          <Calculator />
        </GlobalContainer>
      </Body>
    </div>
  );
}

export default App;
