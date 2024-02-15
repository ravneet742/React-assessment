// ContactList.jsx
import React from 'react';

function ContactList({ contacts, deleteContact, setCurrentContact }) {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name} - {contact.email} - {contact.phone}
          <button onClick={() => setCurrentContact(contact)}>Edit</button>
          <button onClick={() => deleteContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
