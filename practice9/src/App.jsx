import { useState } from "react";
import "./App.css";

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("#f5f5f5");

  return (
    <div className="color-class" style={{ backgroundColor }}>
      <button className="button" onClick={() => setBackgroundColor("red")}>red</button>
      <button className="button" onClick={() => setBackgroundColor("blue")}>blue</button>
      <button className="button" onClick={() => setBackgroundColor("green")}>green</button>
    </div>
  );
}