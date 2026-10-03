import { getVehicle, addVehicle, updateVehicle, deleteVehicle } from "../client";

export function fetchVehicle(){
    return getVehicle();
}

export function createVehicle(name){
    return addVehicle(name);
}

export function updatedVehicle(id, name){
    return updateVehicle(id,name);
}

export function removeVehicle(id){
    return deleteVehicle(id);
}