import { client } from "../client";

export const getContacts = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(client.getAll()), 200)
    });
};


export const addContact = async (contactData) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!contactData.name || !contactData.phone){
                reject(new Error('Name and phone are required.'));
            }else{
                resolve(client.create(contactData));
            }
        }, (200));
    });
};


export const updateContact = async(id, contactData) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try{
                const updated = client.update(id, contactData);
                resolve(updated);
            }catch(err){
                reject(err);
            }
        }, 200);
    });
};



export const deleteContact = async (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                client.delete(id);
                resolve(id);
            }catch(err){
                reject(err);
            }
        }, 200);
    });
};