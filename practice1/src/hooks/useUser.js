import { useState, useEffect } from "react";
import {fetchUsers, createUser, removeUser} from "../services/userService"

export function useUser(){
    const [users, setUsers] = useState([]);

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
    return {users, add, remove};
}