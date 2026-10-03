import {useCars} from "../hook/Carhooks";
import { useState } from "react";

export default function CarsList(){
    const {cars, add, remove, updateVehicle} = useCars()
    const [searchTerm, setSearchTerm] = useState("")
    const [searchResults, setSearchResults] = useState([]);
    const [newName, setNewName] = useState("");
    const [editName, setEditName] = useState("");
    const [deletedId, setdeletedId] = useState("");


    function handleAdd(){
        if (newName.trim() === "")return;
        add(newName);
        setNewName("");
    }

    function handleSearch(){
        const results = cars.filter(c =>
            c.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    }

    function handleUpdate(deletedId){
        const id = parseInt(deletedId, 10);
        if(!id || editName.trim() === "")return;
        updateVehicle(id, editName);
        setEditName("");
    }

    
    return(
        <div>
            <h2>Cars list</h2>

            {/*ADD NEW CAR*/}
            <input 
            type="text"
            placeholder="Enter car name"
            value={newName}
            onChange={e => setNewName(e.target.value)}
            />
            <button onClick={handleAdd}>Add car</button>

            
            {/*SEARCH CARS*/}
            <input 
            type="text"
            placeholder="search car"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>search</button>
            
             {searchResults.length > 0 && (
        <ul>
          {searchResults.map(car => (
            <li key={car.id}>{car.name}</li>
          ))}
        </ul>
      )}
            
            
            {/*UPDATE CAR*/}
            <input 
            type="number"
            placeholder="Edit car Id"
            value={deletedId}
            onChange={e => setdeletedId(e.target.value)}
            />
             <input
            type="text"
            placeholder="New car name"
            value={editName}
            onChange={e => setEditName(e.target.value)}
           />
            <button onClick={() => handleUpdate(deletedId)}>update car</button>


         {/*DELETE CARS*/}
      
      <ul>
        {cars.map(car => (
          <li key={car.id}>{car.name}
          <button onClick = {() => remove(car.id)}>Delete</button>
          </li>
        ))}
      </ul>


        </div>
    );

}