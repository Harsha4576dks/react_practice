import React, {useState} from "react";
import Button from './button';

function AddStudent({onAdd}){
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !phone) return;
        onAdd({name, phone});
        setName('');
        setPhone('');
    };

    return (
        <form onSubmit={handleSubmit} style={{marginBottom: '20px'}}>
            <h3>enter new student</h3>

            <input 
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />

            
            <input 
            type="text"
            placeholder="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{marginLeft: '8px'}}
            />

             <Button type="submit" style={{marginLeft: '8px'}}>  Add student</Button>
        </form>
    );

}

export default AddStudent;