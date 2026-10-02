let users = [
    {id:1, name:"Alice"},
    {id:2, name:"Bob"}
];

export function getUsers(){
    return users;
}

export function addUser(name){
    const newUser = {id:Date.now(), name};
    users.push(newUser);
    return newUser;
}

export function deleteUser(id) {
    users = users.filter(u => u.id !== id);
}