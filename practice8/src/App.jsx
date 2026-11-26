import { useState } from "react";
import "./App.css";

function Display() {
    const [name, setName] = useState("")
    const [show, setShow] = useState(false)

    return(
        <div className="dis">
            <input 
            type="text"
            value={name}
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            />

            <button className="button" onClick={() => setShow((prev)=> !prev)}>
                Save
            </button>

            {show && <p>show: {name}</p>}

        </div>

    )
}

export default Display