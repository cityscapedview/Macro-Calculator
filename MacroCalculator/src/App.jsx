import { useState } from "react";
import Body from "./components/Body";

//change below css file
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Body />
    </div>
  );
}

export default App;
