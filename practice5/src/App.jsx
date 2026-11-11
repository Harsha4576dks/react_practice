import { useState } from "react";

function App() {
  const [car, setCar] = useState([]);
  const [names, setNames] = useState("");

  return (
    <div>
      <h1>Car management</h1>

      <input
        type="text"
        placeholder="Enter car name"
        value={names}
        onChange={(e) => setNames(e.target.value)}
      />
    </div>
  );
}

export default App;