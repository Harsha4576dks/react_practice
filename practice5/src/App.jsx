import { useState } from "react";

function App() {
  const [car, setCar] = useState([]);
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");

  //Add car
  const addCar = () => {
    if(name.trim() === ""){
        return;
    }
    setCar([...car, name.trim()]);
    setName("");
  };

  //Delete car
  const deleteCar = (index) => {
    const updatedCars = car.filter(
        (-, i) => i ! == index
    );

    setCar(updatedCars);

  };

  // search car
  const filteredCars = car.filter((car) => 
    car.toLowerCase().includes(search.toLowerCase())
);


  return (
    <div>
      <h1>Car management</h1>

      <input
        type="text"
        placeholder="Enter car name"
        value={names}
        onChange={(e) => setNames(e.target.value)}
      />
      <button onClick={addCar}>
        Add car
      </button>
      <br></br>

      <input
        type="text"
        placeholder="search car "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h2>car list</h2>

      {filteredCars.length === 0 ? (
        <p>No cars found</p>
      ): (
        filteredCars.map((car, index) => (
            <div key={index}>
                <span>{car}</span>
                <button
                onClick={() => deletedCar(
                    car.indexOf(car)
                )}
                >
                    Delete
                </button>
        ))
      )}
    </div>
  );
}

export default App;