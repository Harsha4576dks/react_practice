import React, {useState, useEffect} from "react";
import Button from "./button";

function EditStudent({currentStudent, onUpdate, onCancel}){
    const [name, setName] = useState('');
    const[phone, setPhone] = useState('');

    useEffect(() => {
        if(currentStudent){
            setName(currentStudent.name);
            setPhone(currentStudent.phone);
        }
    }, [currentStudent]);


    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(currentStudent.id, {name, phone});
    };

     return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <h3>Edit student</h3>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{ marginLeft: '8px' }}
      />

      <Button type="submit" style={{ marginLeft: '8px' }}> Save </Button>
      <Button onClick={onCancel} style={{ marginLeft: '8px' }}>  Cancel </Button>
    </form>
  );
}

export default EditStudent;