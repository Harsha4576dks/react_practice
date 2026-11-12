import { useState } from "react";

function App() {
    const [pet, setPet] = useState([]);
    const [name, setName] = useState("");
    const [search,setSearch] = useState("");

    const addPet = () => {
        if (name.trim() === ""){
            return;
        }
        setPet([...pet, name.trim()]);
        setName("");

     };

     const deletePet = (index) => {
        const updatePet = pet.filter(
            (_,i) => i !==index
        );
        setPet(updatedPets);
     };
}