import { useState } from "react";
import Body from "./components/Body";
import GlobalContainer from "./components/GlobalContainer";

function App() {
  return (
    <div className="App">
      <Body>
        <GlobalContainer></GlobalContainer>
      </Body>
    </div>
  );
}

export default App;
