let cars = [
    {id:1, name:"benz"},
    {id:2, name:"bmw"}
];

export function getVehicle(){
    return cars;
}

export function addVehicle(name){
    const newVehicle = {id:cars.length + 1, name};
    cars.push(newVehicle);
    return newVehicle;
}

export function updateVehicle(id, name){
    const upVehicle = cars.find(v => v.id === id);
    if(upVehicle){
        upVehicle.name = name;
        return upVehicle;
    }
    return null;
}

export function deleteVehicle(id){
    cars = cars.filter(c => c.id !== id);
}