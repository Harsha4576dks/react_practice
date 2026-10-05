import React from 'react';
import { useContacts } from './hook/ContactHooks';
import AddContactForm from './components/AddContactForm';
import EditContactForm from './components/EditContactForm';
import ContactList from './components/ContactList';

function App() {
  const {
    contacts,
    editingContact,
    status,
    setEditingContact,
    handleAdd,
    handleUpdate,
    handleDelete,
  } = useContacts();

  return (
    <div style={{ padding: '20px', maxWidth: '500px', fontFamily: 'sans-serif' }}>
      <h2>Contact Manager</h2>


      {status.message && (
        <div
          style={{
            padding: '10px',
            marginBottom: '15px',
            color: 'white',
            backgroundColor: status.type === 'error' ? '#dc3545' : '#28a745',
            borderRadius: '4px',
          }}
        >
          {status.message}
        </div>
      )}


      {editingContact ? (
        <EditContactForm
          currentContact={editingContact}
          onUpdate={handleUpdate}
          onCancel={() => setEditingContact(null)}
        />
      ) : (
        <AddContactForm onAdd={handleAdd} />
      )}

      <h3>Contact List</h3>
      <ContactList
        contacts={contacts}
        onDelete={handleDelete}
        onStartEdit={(contact) => setEditingContact(contact)}
      />
    </div>
  );
}

export default App;