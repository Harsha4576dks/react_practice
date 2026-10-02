import {getUsers, addUser, deleteUser} from "../client";

export function fetchUsers(){
    return getUsers();
}

export function createUser(name){
    return addUser(name);
}

export function removeUser(id){
    return deleteUser(id);
}