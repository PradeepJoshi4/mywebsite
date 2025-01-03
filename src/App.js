import './App.css';
import Header from './component/Header';
import AddContact from './component/AddContact';
import ContactList from './component/ContactList';
import React, { useState } from 'react';
import Footer from './component/Footer';

function App() {
  // State to store contacts
  const [contacts, setContacts] = useState([
    { "id": 1, "name": "John Doe", "email": "john.doe@example.com" },
    { "id": 2, "name": "Jane Smith", "email": "jane.smith@example.com" },
    { "id": 3, "name": "Michael Johnson", "email": "michael.johnson@example.com" },
    { "id": 4, "name": "Emily Brown", "email": "emily.brown@example.com" },
    { "id": 5, "name": "Chris Davis", "email": "chris.davis@example.com" },
  ]);

  let contactLength = contacts.length;

  // Function to add new contact
  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const updateContact = (updatedContact) => {
    setContacts(contacts.map(contact =>
      contact.id === updatedContact.id ? updatedContact : contact
    ));
  };

  // Function to delete a contact
  const deleteContact = (contactId) => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const [searchQuery, setSearchQuery] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  let lastElement = contacts[contacts.length - 1];

  return (
    <div className="App">
      <Header setSearchQuery={setSearchQuery} />
      <div className="mt-4">
        <AddContact addContact={addContact} contactLength={contactLength} lastElement={lastElement} />
      </div>
      <div className="mt-2">
        <ContactList contacts={filteredContacts} updateContact={updateContact} deleteContact={deleteContact}/>
      </div>
      <div className="mt-4">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
