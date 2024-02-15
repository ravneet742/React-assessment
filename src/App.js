import React, { useState } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import SearchBar from './SearchBar';

function App() {
  const [contacts, setContacts] = useState([]);
  const [currentContact, setCurrentContact] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const addContact = (contact) => {
    setContacts([...contacts, { ...contact, id: Date.now() }]);
  };

  const updateContact = (id, updatedContact) => {
    setContacts(contacts.map(contact => contact.id === id ? updatedContact : contact));
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBar setSearchTerm={setSearchTerm} />
      <ContactForm
        addContact={addContact}
        updateContact={updateContact}
        currentContact={currentContact}
        setCurrentContact={setCurrentContact}
      />
      <ContactList
        contacts={filteredContacts}
        deleteContact={deleteContact}
        setCurrentContact={setCurrentContact}
      />
    </div>
  );
}

export default App;
