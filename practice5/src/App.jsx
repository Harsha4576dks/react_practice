import { useState } from "react";

function App() {

    const [car, setCar] = useState([]);
    const [names, setNames] = useState("");

    return (
        <div>
            <h1>car management</h1>
        
            <input 
            type="text"
            placeholder="enter car name"
            value="name"
            onChange= {(e)=> setNames(e.target.value)
            />
            </div>
        }
    );
}
export default App;