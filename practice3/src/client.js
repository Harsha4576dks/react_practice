let contactsDB = [
    {id:'1', name:'Rahul sharma', phone: '464861615'},
    {id:'2', name:'sushant', phone:'763863668'},
];

export const client = {
    getAll: () => [...contactsDB],


    create: (newContact) => {
        const contactWithId = {id:contactsDB.length+1, ...newContact};
        contactsDB.push(contactWithId);
        return contactWithId;
    },

    update: (id, updateData) => {
        const index = contactsDB.findIndex((c) => c.id === id);
        if (index === -1) throw new Error('Contacts not found');
        contactsDB[index] = {...contactsDB[index], ...updateData};
        return contactsDB[index];
    },

    delete: (id) => {
        const index = contactsDB.findIndex((c) => c.id === id);
        if (index === -1) throw new Error('contact not found');
        contactsDB = contactsDB.filter((c) => c.id !== id);
        return true;
    },
};