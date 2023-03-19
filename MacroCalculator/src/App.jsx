import { useState } from "react";
import Body from "./components/Body";
import GlobalContainer from "./components/GlobalContainer";
import Header from "./components/Header";
import HealthBenefits from "./components/HealthBenefits";

function App() {
  return (
    <div>
      <Body>
        <GlobalContainer>
          <Header />
          <HealthBenefits />
        </GlobalContainer>
      </Body>
    </div>
  );
}

export default App;
