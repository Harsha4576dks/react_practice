import { useState, useEffect } from "react";
import { getContacts, addContact, updateContact, deleteContact } from "../services/contactService";

export function useContacts(){
    const [contacts, setContacts] = useState([]);
    const [editingContact, setEditingContact] = useState(null);
    const [status, setStatus] = useState({type:'', message:''});

    
    const notify = (type, message) => {
        setStatus({type, message});
        setTimeout(() => setStatus({type:'', message:''}), 3000);
    };


    const fetchContacts = async () => {
        try{
            const data = await getContacts();
            setContacts(data);
        }catch (err){
            notify('error', 'Failed to load contacts');
        }
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    const handleAdd = async (contactData) => {
        try{
            await addContact(contactData);
            await fetchContacts();
            notify('success', 'contact added successfully');
            }catch (err){
             notify('error', err.message || 'Failed to add contact');
            }
    };



    const handleUpdate = async (id, contactData) => {
        try{
            await updateContact(id, contactData);
            await fetchContacts();
            setEditingContact(null);
            notify('success', 'contact updated successfully!');
        }catch (err){
            notify('error', err.message || 'Failed to update contact');
        }
    };



    const handleDelete = async (id) => {
        try{
            await deleteContact(id);
            await fetchContacts();
            notify('success', 'contacts deleted successfully');
        }catch (err){
            notify('error', 'failed to delete contact');
        }
    };


    return {
        contacts, editingContact, status, setEditingContact,
        handleAdd, handleDelete, handleUpdate,
    };
}