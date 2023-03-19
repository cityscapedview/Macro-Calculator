import { useState } from "react";
import Body from "./components/Body";
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
        </GlobalContainer>
      </Body>
    </div>
  );
}

export default App;
