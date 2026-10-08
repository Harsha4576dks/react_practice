let studentsDB = [];

export const school = {
    getAll: () => [...studentsDB],


    create: (newStudent) => {
        const studentWithId = {id:studentsDB.length+1, ...newStudent};
        studentsDB.push(studentWithId);
        return studentWithId;
    },


    update: (id, updateData) => {
        const index = studentsDB.findIndex((s) => s.id === id);
        if (index === -1) throw new Error('students not found');
        studentsDB[index] = {...studentsDB[index], ...updateData};
        return studentsDB[index];        
    },


    delete: (id) => {
        const index = studentsDB.findIndex((s) => s.id === id);
        if (index === -1) throw new Error('student not found');
        studentsDB = studentsDB.filter((s) => s.id !== id);
        return true;
    },
};