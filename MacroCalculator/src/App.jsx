import { useState } from "react";
import Body from "./components/Body";
import GlobalContainer from "./components/GlobalContainer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Body>
        <GlobalContainer>
          <Header></Header>
        </GlobalContainer>
      </Body>
    </div>
  );
}

export default App;
