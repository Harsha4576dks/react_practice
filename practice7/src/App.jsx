import { useState } from "react";
import "./App.css"

function Toggle() {
    const [show, setShow] = useState(false)


    return (
        <div className="strin">
            <h1>{show ? "Hello React!" : "Button: show"}</h1>
            <button className="button" onClick={() => setShow((prev) => !prev)}>
                click
            </button>
        </div>
    );
}

export default Toggle;
