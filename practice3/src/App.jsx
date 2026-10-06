import React from 'react';
import { useContacts } from './hook/ContactHooks';
import Navbar from './components/Navbar';
import AddContactForm from './components/AddContactForm';
import EditContactForm from './components/EditContactForm';
import ContactList from './components/ContactList';
import Button from './components/button';
import { useState } from 'react';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('get');
  const {
    contacts,
    editingContact,
    status,
    setEditingContact,
    handleAdd,
    handleUpdate,
    handleDelete,
  } = useContacts();


  const handleStartEdit = (contact) => {
    setEditingContact(contact);
    setActivePage('update');
  };

return (
    <div className="app-layout">
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      <main className="content-container">
        <h2>Contact Management</h2>


        {status.message && (
          <div className={`status-banner ${status.type}`}>
            {status.message}
          </div>
        )}


        {activePage === 'get' && (
          <div className="page-view">
            <h3>All Contacts (Read View)</h3>
            <ContactList
              contacts={contacts}
              onDelete={handleDelete}
              onStartEdit={handleStartEdit}
            />
          </div>
        )}


        {activePage === 'add' && (
          <div className="page-view">
            <AddContactForm
              onAdd={(data) => {
                handleAdd(data);
                setActivePage('get'); 
              }}
            />
          </div>
        )}


        {activePage === 'update' && (
          <div className="page-view">
            {editingContact ? (
              <EditContactForm
                currentContact={editingContact}
                onUpdate={(id, data) => {
                  handleUpdate(id, data);
                  setActivePage('get'); 
                }}
                onCancel={() => {
                  setEditingContact(null);
                  setActivePage('get');
                }}
              />
            ) : (
              <div>
                <p>No contact selected for editing.</p>
                <Button onClick={() => setActivePage('get')}>
                  Select Contact from List
                </Button>
              </div>
            )}
          </div>
        )}


        {activePage === 'delete' && (
          <div className="page-view">
            <h3>Delete Contacts View</h3>
            <p>Click Delete next to any contact below:</p>
            <ContactList
              contacts={contacts}
              onDelete={handleDelete}
              onStartEdit={handleStartEdit}
            />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;