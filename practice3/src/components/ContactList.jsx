import React from "react";
import Button from './button';

function ContactList({contacts, onDelete, onStartEdit}){
    if (contacts.length === 0) return <p>No contacts available</p>;

    return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {contacts.map((contact) => (
        <li
          key={contact.id}
          style={{
            display: 'flex',
            justify: 'space-between',
            padding: '8px 0',
            borderBottom: '1px solid #ddd',
          }}
        >
          <span>
            <strong>{contact.name}</strong> - {contact.phone}
          </span>
          <div>
            <Button onClick={() => onStartEdit(contact)}>Edit</Button>
            <Button
              onClick={() => onDelete(contact.id)}
              style={{ marginLeft: '8px', color: 'white', background: 'red' }}
            >
              Delete
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;