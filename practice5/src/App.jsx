import { useState } from "react";

function App() {
    const [car, setCar] = useState([]);
    const [name, setName] = useState("");
    const [search, setSearch] = useState("");

    // Add car
    const addCar = () => {
        if (name.trim() === "") {
            return;
        }

        setCar([...car, name.trim()]);
        setName("");
    };

    // Delete car
    const deleteCar = (index) => {
        const updatedCars = car.filter(
            (_, i) => i !== index
        );

        setCar(updatedCars);
    };

    // Search car
    const filteredCars = car.filter((carName) =>
        carName.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <h1>Car Management</h1>

            {/* Add car */}
            <input
                type="text"
                placeholder="Enter car name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <button onClick={addCar}>
                Add Car
            </button>

            <br /><br />

            {/* Search car */}
            <input
                type="text"
                placeholder="Search car"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <h2>Car List</h2>

            {filteredCars.length === 0 ? (
                <p>No cars found</p>
            ) : (
                filteredCars.map((carName) => {
                    const originalIndex = car.indexOf(carName);

                    return (
                        <div key={originalIndex}>
                            <span>{carName}</span>

                            <button
                                onClick={() => deleteCar(originalIndex)}
                            >
                                Delete
                            </button>
                        </div>
                    );
                })
            )}
        </div>
    );
}

export default App;