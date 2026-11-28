import { useState } from "react";
import "./App.css";

export default function App() {
  const [color, setColor] = useState("");

  return (
    <div className="color-class" style={{ color }}>
      <button onClick={() => setColor("red")}>red</button>
      <button onClick={() => setColor("blue")}>blue</button>
      <button onClick={() => setColor("green")}>green</button>
    </div>
  );
}