import { useState, useEffect} from "react";
import { fetchVehicle, createVehicle, updatedVehicle,removeVehicle } from "../services/carService";

export function useCars(){
    const [cars, setVehicle] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [seacrhedVehicle, setSearchedvehicle] = useState([]); 

    useEffect(() => {
        setVehicle(fetchVehicle());
    }, []);

    function add(name){
        const newVehicle = createVehicle(name);
        setVehicle([...cars, newVehicle]);
    }

    function remove(id){
        removeVehicle(id);
        setVehicle(cars.filter(c => c.id !== id));
    }

    function search(){
        const filteredVehicle = cars.filter(c => 
            c.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchedvehicle(filteredVehicle);
    }

    function update(id, name){
        updatedVehicle(id, name);
        setVehicle(fetchVehicle());
    }
    return {cars, add, remove, search, update, searchTerm, setSearchTerm, seacrhedVehicle}
}
