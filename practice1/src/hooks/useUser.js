import { useState, useEffect } from "react";
import {fetchUsers, createUser, removeUser} from "../services/userService"

export function useUser(){
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchedUsers, setSearchedUsers] = useState([]);


    useEffect(() => {
        setUsers(fetchUsers());
    }, []);

    function add(name){
        const newUser = createUser(name);
        setUsers([...users, newUser]);
    }

    function remove(id){
        removeUser(id);
        setUsers(users.filter(u => u.id !== id));
    }
    function search(){
    const filteredUsers = users.filter( u =>
         u.name.toLowerCase().includes(searchTerm.toLowerCase()));
         setSearchedUsers(result);
    }
    return {users, add, remove, searchTerm, setSearchTerm, searchedUsers, search};
}