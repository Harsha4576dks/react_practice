let carsDB = [];

export const car = {
    getAll: () => [...carsDB],

    create: (newCar) => {
        const carWithId = {id:carsDB.length+1, ...newCar}
        carsDB.push(carWithId);
        return carWithId;
    },

}