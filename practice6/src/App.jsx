import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
<div className="counter">
  <h1>counter : {count}</h1>
  <button onClick={() => setCount(count + 1)}>
    Increment
  </button>
  
  <button onClick={() => setCount(count - 1)}>
    Decrement
    </button>

  <button onClick={() => setCount(0)}>
    Refresh
  </button>
  
</div>
  );
}

export default App;