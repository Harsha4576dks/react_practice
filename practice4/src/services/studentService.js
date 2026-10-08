import {client} from "../client";

export const getStudents = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(client.getAll()), 200)
    });
};



export const addStudent = async (studentData) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!studentData.name || !studentData.phone){
                reject(new Error('Name and phone are required.'));
            }else{
                resolve(client.create(studentData));
            }
        }, 200);
    });
};



export const updateStudent = async(id, studentData) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try{
                const updated = client.update(id, studentData);
                resolve(updated);
            }
            catch(err){
                reject(err);
            }
        }, 200);
    });
};


export const deleteStudent = async(id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try{
                client.delete(id);
                resolve(id);
            }catch(err){
                reject(err);
            }
        }, 200);
    });
};