import React, {useState, useEffect} from "react";
import Button from './button';

function EditContactForm({currentContact, onUpdate, onCancel}){
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        if (currentContact){
            setName(currentContact.name);
            setPhone(currentContact.phone);
        }
        },  [currentContact]);


    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(currentContact.id, {name, phone});
    };
    

    return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <h3>Edit Contact</h3>

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

export default EditContactForm;