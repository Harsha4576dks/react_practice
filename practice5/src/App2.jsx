import { useState } from "react";
import "./App2.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 3);
  };

  return (
    <div className="counter-card">
      <h2 className="counter-title">Count: {count}</h2>
      <button className="counter-button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}

export default App;